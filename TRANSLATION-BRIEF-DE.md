# German translation brief (miskwakimiwan.com)

You are translating English pages of miskwakimiwan.com into German. The English
pages are in `src/app/(en)/`. Write each German page to the same path under
`src/app/de/` (for example `src/app/(en)/red-rain/page.tsx` becomes
`src/app/de/red-rain/page.tsx`; the home page `src/app/(en)/page.tsx` becomes
`src/app/de/page.tsx`). Do not edit any English, Spanish or French file or any
file outside your assigned German files. The French twin of each page is in
`src/app/fr/` and shows how the same job was done for French: use it as a
structural guide (what was removed, where the small notes go), but translate
from the ENGLISH, which is the source of truth.

## What to keep identical
- All JSX structure, classNames, components, images, sizes, and layout.
- External URLs (Amazon, Audible, Indigo, Substack, App Store, etc.).
- Book titles stay in English everywhere, exactly as written (The Re-Membering,
  Forgiveness as Freedom, The Signal, Red Rain: A Soul Shattered, The Book of
  Questions: The Socratic Year of the Soul, and their subtitles). The books are
  published in English and readers need the real title to find them.
- The author's name, Miskwa Kimiwan. Imprint: Red Rain Publishing.

## What to change
- Translate every human-visible string: headings, paragraphs, buttons, labels,
  alt text, aria-labels, placeholder text, error and success messages, quotes.
- Metadata: translate `title`, `description` and Open Graph/Twitter text, and add
  `alternates: alternates('de', '<english path>')` to the page metadata, importing
  `import { alternates } from '@/lib/i18n'`. For the home page the English path is `'/'`.
  Open Graph urls point at /de/... If the page is a client component with no
  metadata, leave it without.
- Internal links: prefix with /de. `href="/red-rain"` becomes `href="/de/red-rain"`,
  `href="/"` becomes `href="/de"`, `/contact?topic=speaking` becomes
  `/de/contact?topic=speaking`. Hash anchors stay (`/de/about#speaking`).
- Shared components take a locale: `<MoreBooks current="/red-rain" locale="de" />`
  (keep `current` as the ENGLISH path) and `<NewsletterSignup locale="de" />`.
- Remove JSON-LD `<script type="application/ld+json">` blocks and the schema
  constants that feed them. The English pages carry the structured data.
- On each released book page, right under the buy buttons, add one small line in
  the same style as nearby small print: `Dieses Buch ist auf Englisch erhältlich.`
  For Forgiveness as Freedom (not yet out): `Dieses Buch erscheint auf Englisch.`
- Reader reviews/testimonials: translate them, and add one small line under the
  reviews heading: `Rezensionen aus dem Englischen übersetzt.`
- Dates in German style: "21. Dezember 2026", "22. September 2026".
  "Winter Solstice" is "Wintersonnenwende"; "Autumn Equinox" is
  "Herbst-Tagundnachtgleiche".
- Prices: keep the code that formats them as it is.

## Voice
- Standard German (Hochdeutsch), readable in Germany, Austria and Switzerland.
  Address the reader as "Sie" (capitalised, with Ihr/Ihnen). Use "ss"/"ß" as in
  Germany.
- German quotation marks „ … “ for quotes.
- This is literary, spare, unflinching writing about trauma, healing and the dark.
  Keep short sentences short, fragments as fragments, and the rhythm of each line.
  German tends to run long: resist it. Do not soften, explain or pad. Translate the
  meaning and the weight, not word for word. If an English line is a deliberate
  echo or repetition, keep it.
- No em dashes or en dashes used as dashes. Use commas, periods or colons instead.
- No wellness-brochure language, no exclamation marks.
- The author's gender: the English site refers to Miskwa Kimiwan as "they". In
  German, never use gendered words for the author: no er/sie, ihm/ihr, sein/ihr
  (possessive), Autor/Autorin, Heiler/Heilerin, Lehrer/Lehrerin, der/die Autor*in.
  Rephrase with verbs, nouns about the work, or the name: "Miskwa Kimiwan
  schreibt, heilt und lehrt", "das Werk von Miskwa Kimiwan", "Miskwa Kimiwans
  Bücher", "wer hier begleitet, hat selbst geblutet". Repeat the name rather than
  use a pronoun. The first-person "I" passages (back-cover text spoken by the
  author) stay first person; German first person is not gendered except in nouns,
  so avoid "als Heiler" etc.
- Keep the reader ungendered where it costs nothing (no "Leser" for the reader:
  "wer liest", "Lesende" sparingly, or rephrase).
- Keep umlauts and ß correct. Make sure the file is valid UTF-8.
- Fixed terms: The Rainfall Newsletter stays in English (say it is published in
  English, as the French page does); "the Forgetting" is „das Vergessen“;
  "Spirit" is „der Geist“ only where it is spiritual, otherwise rephrase;
  "medicine" in the Indigenous sense is „Medizin“; "residential school" is
  „Internatsschule für Indigene (Residential School)“ the first time, then
  „Residential School“; "Bookstore" is „Buchhandlung“; "Wholesale" is
  „Großhandel“; "About" is „Über Miskwa Kimiwan“ in headings and „Biografie“
  as a menu label; "Contact" is „Kontakt“; "Privacy" is „Datenschutz“.

## Check before you finish
- Run `npx tsc --noEmit` from the repo root `C:\Users\pbern\Projects\miskwa-site`
  and fix only errors in your own files. Errors saying 'de' is not a Locale may
  appear for a few minutes while that change lands; ignore those.
- Grep your files for leftover English sentences and for `href="/` links missing /de.
- Report back: the files written, any lines you were unsure how to translate, and
  anything in the English source that looked wrong.
