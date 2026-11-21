# Spanish translation brief (miskwakimiwan.com)

You are translating English pages of miskwakimiwan.com into Spanish. The English
pages are in `src/app/(en)/`. Write each Spanish page to the same path under
`src/app/es/` (for example `src/app/(en)/red-rain/page.tsx` becomes
`src/app/es/red-rain/page.tsx`; the home page `src/app/(en)/page.tsx` becomes
`src/app/es/page.tsx`). Do not edit any English file or any file outside your
assigned Spanish files.

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
  `alternates: alternates('es', '<english path>')` to the page metadata, importing
  `import { alternates } from '@/lib/i18n'`. For the home page the English path is `'/'`.
  If the page is a client component with no metadata, leave it without.
- Internal links: prefix with /es. `href="/red-rain"` becomes `href="/es/red-rain"`,
  `href="/"` becomes `href="/es"`, `/contact?topic=speaking` becomes
  `/es/contact?topic=speaking`. Hash anchors stay (`/es/about#speaking`).
- Shared components take a locale: `<MoreBooks current="/red-rain" locale="es" />`
  (keep `current` as the ENGLISH path) and `<NewsletterSignup locale="es" />`.
  Those props are being added in parallel; use them as written.
- Remove JSON-LD `<script type="application/ld+json">` blocks and the schema
  constants that feed them from the Spanish copy. The English pages carry the
  structured data.
- On each book page, right under the buy buttons (or under the "not yet released"
  line for Forgiveness as Freedom), add one small line in the same style as nearby
  small print: `Este libro está disponible en inglés.`
- Reader reviews/testimonials: translate them, and add one small line under the
  reviews heading: `Reseñas traducidas del inglés.`
- Dates in Spanish style: "21 de diciembre de 2026", "22 de septiembre de 2026".
  "Winter Solstice" is "Solsticio de invierno"; "Autumn Equinox" is "Equinoccio de otoño".

## Voice
- Neutral Latin American Spanish. Address the reader as "tú". No vosotros.
- This is literary, spare, unflinching writing about trauma, healing and the dark.
  Keep short sentences short, fragments as fragments, and the rhythm of each line.
  Do not soften, explain or pad. Translate the meaning and the weight, not word
  for word. If an English line is a deliberate echo or repetition, keep it.
- No em dashes. Use commas, periods or colons instead.
- No wellness-brochure language, no exclamation marks.
- The author's gender: the English site refers to Miskwa Kimiwan as "they". In
  Spanish, never use gendered words for the author: no él/ella, no autor/autora,
  sanador/sanadora, portador, maestro, etc. Rephrase with verbs or the name:
  "Miskwa Kimiwan escribe, sana y enseña", "la obra de Miskwa Kimiwan",
  "quien guía también ha sangrado". The first-person "I" passages in book copy
  (back-cover text spoken by the author) stay first person; avoid gendered
  adjectives there too (use "he estado allí" not "he estado solo").
- Keep special characters correct: á é í ó ú ñ ü ¿ ¡ « ». Use straight JSX
  entities or the characters themselves; make sure the file is valid UTF-8.

## Check before you finish
- Run `npx tsc --noEmit` from the repo root `C:\Users\pbern\Projects\miskwa-site`
  and fix only errors in your own files. Errors about the `locale` prop on
  MoreBooks/NewsletterSignup may appear until that change lands; ignore those.
- Grep your files for leftover English sentences and for `href="/` links missing /es.
- Report back: the files written, any lines you were unsure how to translate, and
  anything in the English source that looked wrong.
