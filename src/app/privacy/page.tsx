import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for The Book of Questions app and MiskwaKimiwan.com. Your journal stays on your device — no accounts, no analytics, no tracking, nothing collected.',
}

const EFFECTIVE_DATE = 'August 9, 2026'

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-heading text-night mt-12 mb-4">{children}</h2>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-body text-night/60 leading-relaxed mb-4">{children}</p>
}

function LI({ children }: { children: React.ReactNode }) {
  return <li className="font-body text-body text-night/60 leading-relaxed mb-3">{children}</li>
}

export default function Privacy() {
  return (
    <>
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
            Privacy Policy
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-night mb-4">
            Your journal is yours.
          </h1>
          <p className="font-body text-body text-night/40 mb-2">
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p className="font-body text-body text-night/40">
            Covers: The Book of Questions — The Socratic Year of the Soul (iOS app)
            and this website. Published by Miskwa Kimiwan, operating from Ontario, Canada.
          </p>
          <div className="divider-cool my-8" />

          <H2>What this policy covers</H2>
          <P>
            Two things, and they work differently. The app itself, which runs on your
            device and sends nothing to us. And this website, where writing to us by
            email shares what you choose to send. Most of this policy is about the
            app. The section headed <em>When you contact us</em> covers correspondence —
            and it is the only place in this whole operation where we receive anything
            about you at all.
          </P>

          <H2>The short version</H2>
          <P>
            Everything you write in the app is stored on your device and, in your own
            iCloud. The app has no accounts, no analytics, no advertising, and no
            third-party tracking code. We do not receive your journal entries. We
            could not read them if we wanted to, because they never reach us.
          </P>

          <H2>What the app stores, and where</H2>
          <P>
            Your journal entries, Mirror reflections, reminder preferences, App Lock
            setting, start date, and writing streak are saved in the app&apos;s private
            storage on your device. Mirror reflections and season reviews are
            generated entirely on your device from your own words — no network call,
            no analysis service, no AI.
          </P>
          <P>
            Deleting the app removes this data from your device. Copies you made
            yourself, described below, are unaffected and stay under your control.
          </P>

          <H2>What the app does not collect</H2>
          <P>
            As of the effective date above, the app contains no analytics SDK, no
            crash reporting SDK, no advertising SDK, and no third-party tracking code
            of any kind. It does not ask for your name, your email address, your
            location, your contacts, your photos, or your device identifiers. There
            is no account to create and no sign-in. Its App Store privacy label reads
            &ldquo;Data Not Collected&rdquo; because that is how the app is built.
          </P>
          <P>
            We do not sell personal information and we do not share it with third
            parties for marketing. Your writing is never used to train or improve any
            artificial intelligence system, ours or anyone else&apos;s — and it could not
            be, because it never leaves your device and your own iCloud.
          </P>
          <P>
            If any of this ever changes, this policy will be updated before the
            change ships, and the app will tell you.
          </P>

          <H2>Backups: your data, your storage</H2>
          <P>The app protects your journal in two ways, and neither involves any server of ours:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">A copy in your own iCloud.</strong>{' '}
              The app keeps a backup copy of your journal in your private iCloud
              storage — the space attached to your Apple Account. That copy lives in
              your Apple Account, not on any server of ours. We hold no keys to it
              and no way to reach it. If you prefer no iCloud copy at all, you can
              turn off the app&apos;s iCloud access in iOS Settings (your name → iCloud).
            </LI>
            <LI>
              <strong className="text-night/80">Your iPhone&apos;s own backup.</strong>{' '}
              Like most apps, the journal&apos;s on-device storage is also included in
              your normal iPhone backup, under your own Apple Account.
            </LI>
          </ul>
          <P>
            Worth knowing, because most apps will not tell you: under Apple&apos;s
            Standard Data Protection (the default on every Apple Account), iCloud
            data is encrypted in transit and on Apple&apos;s servers, but Apple holds the
            keys. If you want your journal end-to-end encrypted so that only your
            trusted devices can read it, turn on Advanced Data Protection in your
            iCloud settings. We do not benefit either way — you should simply know
            the option exists.
          </P>
          <P>
            You can also save a complete backup file of your journal whenever you
            want, and keep it wherever you want. Where that file goes is entirely
            your decision.
          </P>

          <H2>How your journal is protected on the device</H2>
          <P>
            On iOS, files inside an app&apos;s private storage are encrypted at rest by
            the operating system, tied to your device passcode. That protection is
            real, and it is doing most of the work here. The honest caveat: it
            depends on you having a passcode set. An iPhone with no passcode, or one
            handed unlocked to someone else, is the actual risk to a journal — not
            us, and not Apple.
          </P>

          <H2>App Lock</H2>
          <P>
            You can require Face ID, Touch ID, or your device passcode to open the
            app. That check is performed by your device&apos;s operating system. The app
            never sees, stores, or transmits your biometric data or your passcode.
            App Lock is a gate on the screen. It is not what encrypts your journal —
            deliberately, so a failed Face ID, a broken sensor, or a forgotten
            setting can never cost you your writing.
          </P>

          <H2>Reminders</H2>
          <P>
            Daily reminders are local notifications, scheduled on your device by
            iOS. No server is involved and nothing leaves your phone. The app only
            ever asks for two permissions — Notifications and Face ID — and you can
            withdraw both at any time in iOS Settings.
          </P>

          <H2>Export and sharing</H2>
          <P>
            Export creates a text file, a PDF, or a backup file of your entries on
            your device, then opens your phone&apos;s own share sheet. Whether an
            exported file goes anywhere is your choice. The app sends nothing on its
            own.
          </P>

          <H2>Purchases</H2>
          <P>
            If subscriptions are offered, they are sold and processed by Apple
            through the App Store, under Apple&apos;s terms. We never see or store your
            payment details, your card, or your billing address. Apple provides us
            with sales reports that show totals, not customers. You can view,
            change, or cancel a subscription in your Apple Account settings — we
            cannot do it for you, and we cannot see that you have. Before any
            subscription feature is active in the app, this policy will be updated
            to describe exactly how subscription status is verified, including any
            service involved in that verification.
          </P>

          <H2>When you contact us</H2>
          <P>
            Email is the one place we receive information about you, and only
            because you chose to send it. Messages sent to{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>{' '}
            contain your email address and whatever you write. We keep them for up
            to 24 months, then delete them. We use them to answer you. We do not add
            you to a mailing list from a support message, we do not sell them, and
            we do not share them. Ask, and we will tell you what we hold, send you a
            copy, correct it, or delete it. We respond within 30 days.
          </P>

          <H2>Keeping and deleting your data</H2>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">In the app:</strong> any entry can be
              emptied inside the app. Deleting the app removes everything it stored
              on your device.
            </LI>
            <LI>
              <strong className="text-night/80">In iCloud:</strong> open iOS Settings
              → your name → iCloud → manage your account storage, find The Book of
              Questions, and delete its data.
            </LI>
            <LI>
              <strong className="text-night/80">Files you saved:</strong> exported
              and backup files live wherever you put them. We cannot reach them and
              cannot delete them for you.
            </LI>
            <LI>
              <strong className="text-night/80">Messages you sent us:</strong>{' '}
              covered above — ask, and they are gone.
            </LI>
          </ul>
          <P>We retain nothing else, because we have nothing else.</P>

          <H2>Your rights</H2>
          <P>
            Privacy laws give you rights to access, correct, delete, and export the
            personal information an organization holds about you. Canada&apos;s PIPEDA,
            Quebec&apos;s Law 25, the EU and UK GDPR, and California&apos;s CCPA/CPRA all
            work along those lines. For the app, every one of those rights is
            already in your hands: your journal is on your device, export gives you
            a complete copy on demand, and deletion is yours alone to perform —
            there is nothing on our side to request deletion of. For email
            correspondence, the rights are ordinary ones and we honour them. In
            Quebec, Miskwa Kimiwan is the person in charge of the protection of
            personal information. If you are in Canada and unsatisfied with how we
            handled a request, you may complain to the Office of the Privacy
            Commissioner of Canada; in Quebec, to the Commission d&apos;accès à
            l&apos;information.
          </P>

          <H2>Third parties</H2>
          <P>This is the whole list as of the effective date above:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Apple</strong> provides device
              storage, iCloud, notifications, Face ID, and payment processing,
              under{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-bridge underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple&apos;s privacy policy
              </a>
              .
            </LI>
            <LI>
              <strong className="text-night/80">Zoho Mail</strong> hosts our email
              inbox, under its own privacy policy.
            </LI>
          </ul>
          <P>
            Tapping the link to the printed book opens your browser to a
            bookseller&apos;s site, which operates under its own privacy policy from
            that point. We receive no referral fee and no data back from that link.
            It is there because the book exists. No analytics provider, advertising
            network, or data broker is involved in the app.
          </P>

          <H2>Children</H2>
          <P>
            The app is not directed to children under 13 and collects no
            information from anyone, at any age.
          </P>

          <H2>A note on what this app is</H2>
          <P>
            The Book of Questions offers reflective journaling for self-inquiry. It
            is not medical, psychological, or therapeutic advice, and it is not a
            substitute for care from a qualified professional. If you need that
            kind of support, please seek it from someone qualified to give it.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            Any change will be posted here with a new effective date, and earlier
            versions will remain available so you can see what was promised and
            when. If a change is material — affecting what is collected, where your
            writing goes, or who can reach it — the app will tell you before the
            change takes effect. No change will ever apply backwards to reduce the
            privacy of what you have already written.
          </P>

          <H2>Contact</H2>
          <P>
            Privacy questions and everything else:{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>
            .
          </P>
        </div>
      </section>
    </>
  )
}
