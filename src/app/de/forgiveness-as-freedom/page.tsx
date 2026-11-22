import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup, { NEWSLETTER_URL } from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/forgiveness-as-freedom'),
  title: 'Forgiveness as Freedom',
  description:
    'Ein Weg für sich selbst: Loslassen, Grenze, Rückkehr. Das neue Buch von Miskwa Kimiwan erscheint zur Wintersonnenwende, am 21. Dezember 2026.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/de/forgiveness-as-freedom',
    siteName: 'Miskwa Kimiwan',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Ein Weg für sich selbst: Loslassen, Grenze, Rückkehr. Das neue Buch von Miskwa Kimiwan erscheint zur Wintersonnenwende, am 21. Dezember 2026.',
    images: [
      {
        url: '/images/forgiveness-as-freedom-cover.jpg',
        width: 1650,
        height: 2550,
        alt: 'Forgiveness as Freedom, Vorderseite des Umschlags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Ein Weg für sich selbst: Loslassen, Grenze, Rückkehr. Das neue Buch von Miskwa Kimiwan erscheint zur Wintersonnenwende, am 21. Dezember 2026.',
    images: ['/images/forgiveness-as-freedom-cover.jpg'],
  },
}

// All reader-facing copy on this page is translated from the book's own back
// cover. Only the section headings are lifted from lines within it.

const frees = [
  'Die Wahrheit sagen über das, was geschehen ist.',
  'Die Grenze ziehen.',
  'Das Seil ablegen.',
  'In Ihr eigenes Leben zurückkehren.',
]

const rooms = [
  'Die Entschuldigung, die nie kommen wird.',
  'Der Mensch, der starb, bevor irgendetwas geklärt war.',
  'Der Tisch, an dem Sie an jedem Feiertag noch sitzen müssen.',
  'Der Elternteil, dessen Hände nicht sanft waren und der jetzt Ihre Hände braucht, um aufzustehen.',
  'Der Schaden, den Sie sich selbst zugefügt haben, meist die letzte Rechnung, die jemand begleicht.',
]

export default function ForgivenessAsFreedom() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Wintersonnenwende &middot; <span className="whitespace-nowrap">21. Dezember 2026</span></p>
            {/* "Forgiveness" is one long unbreakable word, so it must fit the column at every
                width. It needs about 7.7px per pixel of font size. Measured columns: 263px at
                320, 318px at 375, 305px at 768 (where the two column split starts, so md steps
                down), 374px at 1024 and 502px at 1280. Sized the way The Re-Membering is. */}
            <h1 className="font-serif text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-display-sm text-bone mb-2">
              Forgiveness as Freedom
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Self Process for Release, Boundary, and Return
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-serif text-body-lg text-glow/80 leading-relaxed mb-8">
              Sie sind müde. Nicht von der Art, die Schlaf behebt.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Jemand spricht diesen einen Namen aus, und Ihre Brust tut das Alte. Sie haben
              allen gesagt, Sie seien darüber hinweg. Sie haben beim Abendessen das Richtige
              gesagt, die Stimme ruhig gehalten, das Thema gewechselt. Dann legen Sie sich
              hin, und der ganze Fall wird wieder aufgerollt, und Sie verhandeln ihn noch
              einmal, und Sie gewinnen noch einmal, und nichts ändert sich.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Vielleicht hat man Ihnen gesagt, Sie sollen vergeben. Vielleicht wurde es
              freundlich gesagt, und etwas in Ihnen wurde trotzdem kalt. Diese Kälte war eine
              Information. Sie bedeutete, dass die Definition, die man Ihnen gereicht hat,
              nicht zu dem passt, was Sie tatsächlich tragen.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Noch nicht erschienen. Am Tag des Erscheinens finden Sie hier die Links zum
                Kaufen.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Dieses Buch erscheint auf Englisch.
              </p>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit mt-2"
              >
                Am Tag des Erscheinens Bescheid bekommen
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Das Erscheinen wird in The Rainfall Newsletter auf Substack angekündigt. Der
                Newsletter erscheint auf Englisch.
              </p>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/forgiveness-as-freedom-cover.jpg"
                alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, Vorderseite des Umschlags"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT ACTUALLY FREES A PERSON
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Was einen Menschen wirklich befreit
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Also werde ich Sie nicht drängen. Ich werde Ihnen keinen Zeitplan geben. Ich
            werde Ihnen nicht sagen, Sie sollen loslassen, und Sie nicht bitten, irgendetwas
            davon ein Geschenk zu nennen.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Was ich tun werde: neben Ihnen gehen, durch das, was einen Menschen wirklich
            befreit.
          </p>
          <ol className="flex flex-col gap-5">
            {frees.map((line, i) => (
              <li key={line} className="flex items-baseline gap-5">
                <span className="font-display text-caption text-glow/85 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-subheading text-bone/80">{line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          THE ROOMS
          ============================================ */}
      <section className="mood-threshold py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Die Räume, in denen das wirklich lebt
          </h2>
          <ul className="flex flex-col gap-4 mb-12">
            {rooms.map((room) => (
              <li key={room} className="font-serif text-body-lg text-bone/75 leading-relaxed">
                {room}
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Dreiundzwanzig Kapitel. Übungen, die Sie heute Abend machen können. Seiten zum
            Beschreiben. Worte für die Tage, an denen Sie keine eigenen haben.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed">
            Nichts davon braucht die anderen. Keine Entschuldigung. Kein Gespräch. Kein
            Sinneswandel auf ihrer Seite. Am Leben sein müssen sie nicht einmal.
          </p>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">
            Sie haben das lange genug getragen. Das Leben, das auf der anderen Seite wartet,
            gehört noch immer Ihnen.
          </p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Ich kenne diesen Raum</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            Ich habe dort gesessen, wo Sie jetzt sitzen, und etwas gehalten, das sich nicht
            ablegen ließ. Ich war auch der Grund, warum jemand anderes dort saß. Beides steht
            in diesem Buch, weil beides in mir ist.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Wir alle sitzen im Glashaus.
          </p>
          <Link
            href="/de/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            Über Miskwa Kimiwan &rarr;
          </Link>
        </div>
      </section>

      <MoreBooks current="/forgiveness-as-freedom" locale="de" />
      <NewsletterSignup locale="de" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">
            Wer zurückkehrt, sind Sie. Beginnen Sie hier.
          </p>
        </div>
      </section>
    </>
  )
}
