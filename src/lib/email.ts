/**
 * Resend wrapper for the miskwakimiwan.com marketing site.
 *
 * miskwakimiwan.com has DKIM verified in Resend under the "miskwakimiwan"
 * workspace, so mail sent from miskwa@miskwakimiwan.com passes DMARC alignment.
 *
 * Env vars required (set in Vercel project env):
 *   RESEND_API_KEY   Resend key from https://resend.com/api-keys
 *   EMAIL_FROM       Optional. Defaults to Miskwa Kimiwan <miskwa@miskwakimiwan.com>
 *   INBOX_EMAIL      Optional. Where form submissions are delivered.
 *                    Defaults to miskwa@miskwakimiwan.com.
 */

export interface SendEmailInput {
  subject: string;
  html: string;
  text?: string;
  to?: string;
  replyTo?: string;
}

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM ?? "Miskwa Kimiwan <miskwa@miskwakimiwan.com>";
export const INBOX_EMAIL = process.env.INBOX_EMAIL ?? "miskwa@miskwakimiwan.com";

export async function sendEmail({
  subject,
  html,
  text,
  to,
  replyTo,
}: SendEmailInput) {
  const recipient = to ?? INBOX_EMAIL;

  if (!apiKey) {
    // Fallback: log the message so the site does not break in local dev / preview
    // builds without a key set. Never silently drop in production — an error is
    // preferable so we notice the misconfiguration.
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not set");
    }
    console.log("[email] no RESEND_API_KEY set — logging instead");
    console.log(`  to: ${recipient}`);
    console.log(`  subject: ${subject}`);
    console.log(`  text: ${text ?? html.replace(/<[^>]+>/g, " ")}`);
    return { queued: false, logged: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipient,
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
  return { queued: true, logged: false };
}

/**
 * Wrap arbitrary body html in a Miskwa-styled email frame.
 */
export function emailFrame(bodyHtml: string): string {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf6ee">
    <tr><td align="center" style="padding:40px 20px">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px">
        <tr><td style="padding-bottom:24px;text-align:center;font-family:Georgia,serif">
          <p style="margin:0;letter-spacing:0.3em;text-transform:uppercase;font-size:12px;color:#b8864e">Miskwa Kimiwan</p>
          <p style="margin:6px 0 0;font-style:italic;color:rgba(26,26,26,0.7);font-size:14px">miskwakimiwan.com</p>
        </td></tr>
        <tr><td style="background:#f5f0e6;padding:32px 28px;color:#1a1a1a;font-family:Georgia,serif;font-size:16px;line-height:1.7">
          ${bodyHtml}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export interface WholesaleInquiryFields {
  contactName: string;
  business?: string;
  email: string;
  phone?: string;
  shippingAddress: string;
  qtySignal: number;
  qtyRedRain: number;
  qtyBookOfQuestions: number;
  timing?: string;
  notes?: string;
}

export function wholesaleInquiryEmail(f: WholesaleInquiryFields) {
  const totalCopies = f.qtySignal + f.qtyRedRain + f.qtyBookOfQuestions;
  const line = (label: string, value?: string | number) => {
    const v = value === undefined || value === "" ? "—" : String(value);
    return `<p style="margin:0 0 10px"><strong style="color:#7a5a20">${label}:</strong> ${escapeHtml(v)}</p>`;
  };
  const body = `
    <h1 style="font-family:Georgia,serif;font-size:24px;margin:0 0 20px;color:#1a1a1a">New wholesale inquiry</h1>
    <p style="margin:0 0 20px;font-style:italic;color:rgba(26,26,26,0.75)">
      A retailer has submitted the form at miskwakimiwan.com/wholesale.
    </p>
    <div style="border-top:1px solid #d4b578;padding-top:16px;margin-bottom:20px">
      ${line("Contact", f.contactName)}
      ${line("Business", f.business)}
      ${line("Email", f.email)}
      ${line("Phone", f.phone)}
    </div>
    <div style="border-top:1px solid #d4b578;padding-top:16px;margin-bottom:20px">
      <p style="margin:0 0 10px"><strong style="color:#7a5a20">Shipping address:</strong></p>
      <p style="margin:0 0 10px;white-space:pre-wrap">${escapeHtml(f.shippingAddress)}</p>
    </div>
    <div style="border-top:1px solid #d4b578;padding-top:16px;margin-bottom:20px">
      <p style="margin:0 0 10px"><strong style="color:#7a5a20">Books requested:</strong></p>
      ${line("The Signal", f.qtySignal ? f.qtySignal : "0")}
      ${line("Red Rain", f.qtyRedRain ? f.qtyRedRain : "0")}
      ${line("The Book of Questions", f.qtyBookOfQuestions ? f.qtyBookOfQuestions : "0")}
      ${line("Total copies", totalCopies)}
    </div>
    <div style="border-top:1px solid #d4b578;padding-top:16px;margin-bottom:20px">
      ${line("Timing / when needed", f.timing)}
      ${line("Notes", f.notes)}
    </div>
    <p style="margin:20px 0 0;font-size:13px;color:rgba(26,26,26,0.6)">
      Reply directly to this email to respond — your reply will go to ${escapeHtml(f.email)}.
    </p>
  `;
  return {
    subject: `Wholesale inquiry from ${f.contactName}${f.business ? ` (${f.business})` : ""} — ${totalCopies} copies`,
    html: emailFrame(body),
    text:
      `New wholesale inquiry\n\n` +
      `Contact: ${f.contactName}\n` +
      `Business: ${f.business || "-"}\n` +
      `Email: ${f.email}\n` +
      `Phone: ${f.phone || "-"}\n\n` +
      `Shipping address:\n${f.shippingAddress}\n\n` +
      `The Signal: ${f.qtySignal}\n` +
      `Red Rain: ${f.qtyRedRain}\n` +
      `The Book of Questions: ${f.qtyBookOfQuestions}\n` +
      `Total: ${totalCopies}\n\n` +
      `Timing: ${f.timing || "-"}\n` +
      `Notes: ${f.notes || "-"}\n\n` +
      `Reply to this email to respond to ${f.email}.`,
  };
}
