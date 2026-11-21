# French translation brief (miskwakimiwan.com)

You are translating English pages of miskwakimiwan.com into French. The English
pages are in `src/app/(en)/`. Write each French page to the same path under
`src/app/fr/` (for example `src/app/(en)/red-rain/page.tsx` becomes
`src/app/fr/red-rain/page.tsx`; the home page `src/app/(en)/page.tsx` becomes
`src/app/fr/page.tsx`). Do not edit any English or Spanish file or any file
outside your assigned French files. The Spanish twin of each page is in
`src/app/es/` and shows how the same job was done for Spanish: use it as a
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
- Metadata: translate `title`, `description` and Open Graph/Twitter text, set
  Open Graph `locale: 'fr_FR'` where a locale is given, and add
  `alternates: alternates('fr', '<english path>')` to the page metadata, importing
  `import { alternates } from '@/lib/i18n'`. For the home page the English path is `'/'`.
  If the page is a client component with no metadata, leave it without.
- Internal links: prefix with /fr. `href="/red-rain"` becomes `href="/fr/red-rain"`,
  `href="/"` becomes `href="/fr"`, `/contact?topic=speaking` becomes
  `/fr/contact?topic=speaking`. Hash anchors stay (`/fr/about#speaking`).
- Shared components take a locale: `<MoreBooks current="/red-rain" locale="fr" />`
  (keep `current` as the ENGLISH path) and `<NewsletterSignup locale="fr" />`.
- Remove JSON-LD `<script type="application/ld+json">` blocks and the schema
  constants that feed them from the French copy. The English pages carry the
  structured data.
- On each book page, right under the buy buttons (or under the "not yet released"
  line for Forgiveness as Freedom), add one small line in the same style as nearby
  small print: `Ce livre est disponible en anglais.`
- Reader reviews/testimonials: translate them, and add one small line under the
  reviews heading: `Avis traduits de l'anglais.`
- Dates in French style: "21 décembre 2026", "22 septembre 2026" (no capital on
  the month). "Winter Solstice" is "solstice d'hiver"; "Autumn Equinox" is
  "équinoxe d'automne".

## Voice
- International French (France standard, readable in Quebec, Belgium, Switzerland
  and Africa). No regional slang. Address the reader as "vous".
- French typography: use « » for quotations, with a space inside. A space before
  ; : ? is customary; a normal space is fine. Never break the build over it.
- This is literary, spare, unflinching writing about trauma, healing and the dark.
  Keep short sentences short, fragments as fragments, and the rhythm of each line.
  Do not soften, explain or pad. Translate the meaning and the weight, not word
  for word. If an English line is a deliberate echo or repetition, keep it.
- No em dashes. Use commas, periods or colons instead.
- No wellness-brochure language, no exclamation marks.
- The author's gender: the English site refers to Miskwa Kimiwan as "they". In
  French, never use gendered words for the author: no il/elle, auteur/autrice,
  guérisseur/guérisseuse, enseignant/enseignante, né/née, etc. Rephrase with
  verbs, nouns about the work, or the name: "Miskwa Kimiwan écrit, guérit et
  enseigne", "l'œuvre de Miskwa Kimiwan", "la personne qui guide a aussi saigné".
  The first-person "I" passages (back-cover text spoken by the author) stay first
  person; avoid gendered adjectives and past participles there too ("j'y suis
  passé" is gendered: write "j'ai traversé cela").
- Keep accents and special characters correct: é è ê à ç œ « ». Make sure the
  file is valid UTF-8.
- Fixed terms: The Rainfall Newsletter stays in English (add that it is published
  in English where the Spanish page says so); "the Forgetting" is « l'Oubli »;
  "Spirit" is « l'Esprit »; "medicine" in the Indigenous sense is « médecine »;
  "residential school" is « pensionnat autochtone »; "Bookstore" is « Librairie »;
  "Wholesale" is « Vente en gros »; "About" is « Biographie »; "Contact" is
  « Contact ».

## Check before you finish
- Run `npx tsc --noEmit` from the repo root `C:\Users\pbern\Projects\miskwa-site`
  and fix only errors in your own files. Errors saying 'fr' is not a Locale may
  appear for a few minutes while that change lands; ignore those.
- Grep your files for leftover English sentences and for `href="/` links missing /fr.
- Report back: the files written, any lines you were unsure how to translate, and
  anything in the English source that looked wrong.
