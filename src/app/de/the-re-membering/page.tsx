import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/the-re-membering'),
  title: 'The Re-Membering',
  description:
    'Sie sind nicht zerbrochen. Sie haben gelebt. Sechs Wege zurück zu dem Teil von Ihnen, der nie vergessen hat. Als Taschenbuch, E-Book und Hörbuch, gelesen von Omar Abou.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/de/the-re-membering',
    siteName: 'Miskwa Kimiwan',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'Sie sind nicht zerbrochen. Sie haben gelebt. Sechs Wege zurück zu dem Teil von Ihnen, der nie vergessen hat. Ein neues Buch von Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-re-membering-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Re-Membering, Buchumschlag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'Sie sind nicht zerbrochen. Sie haben gelebt. Ein neues Buch von Miskwa Kimiwan.',
    images: ['/images/the-re-membering-cover.jpg'],
  },
}

const places = [
  'der Körper',
  'die Geschichte, die man Ihnen übergeben hat',
  'die Menschen, die vor Ihnen kamen',
  'das Land',
  'das Heilige',
  'der Teil von Ihnen, der die ganze Zeit zugesehen hat',
]

export default function TheReMembering() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Jetzt als Taschenbuch, E-Book und Hörbuch erhältlich</p>
            {/* The hyphen is the point of the title, so it must not become a line
                break. Re-Membering is held on one line and "The" wraps instead.

                That makes the word unbreakable, so it has to fit the column at every
                width. It needs about 8.84px per pixel of font size, and the measured
                columns are 324px at 375, 305px at 768, 374px at 1024 and 502px at
                1280. The tightest point is 768, where the two column split starts
                while the viewport is still narrow, which is why md steps down rather
                than up. This title is longer than the other books, so it does not use
                the full display size they do. */}
            <h1 className="font-serif text-[2rem] md:text-[1.875rem] lg:text-[2.25rem] xl:text-display-sm text-bone mb-2">
              The <span className="whitespace-nowrap">Re-Membering</span>
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              Six Turns Back to the Part of You That Never Forgot
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-serif text-body-lg text-glow/80 leading-relaxed mb-8">
              Sie sind nicht zerbrochen. Sie haben gelebt.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Dieses Buch wurde für den Teil von Ihnen geschrieben, der ahnt, dass er
              früher etwas wusste, und es jetzt nicht mehr findet. Nicht die dramatische
              Version. Die gewöhnliche. Ein Leben, das gut läuft und sich ein wenig fern
              anfühlt. Geliebt werden von Menschen, die jemand anderen zu beschreiben scheinen.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Fast alles, was diesem Teil von Ihnen angeboten wird, ist ein System.
              Schritte. Übungen. Ein besserer Morgen. <em>The Re-Membering</em> ist keins.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.amazon.ca/dp/1777747872"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Bei Amazon kaufen: Taschenbuch und E-Book
              </a>
              <a
                href="https://www.audible.ca/pd/B0HNC297KK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3 w-fit"
              >
                Bei Audible hören: Hörbuch
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Gelesen von Omar Abou. Zwei Stunden und dreißig Minuten, ungekürzt.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Dieses Buch ist auf Englisch erhältlich.
              </p>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Nicht im Regal Ihrer Buchhandlung? Bitten Sie dort, es zu bestellen. Die Buchhandlung kann es über IngramSpark beziehen.
              </p>
              <a
                href="/de/wholesale"
                className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 hover:text-glow transition-colors mt-2 inline-block"
              >
                Großhandel ab 5 Exemplaren &rarr;
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-re-membering-cover.jpg"
                alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, Buchumschlag"
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
          THE SIX PLACES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Wo das Vergessen lebt
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Das Buch geht mit Ihnen durch die sechs Orte, an denen das Vergessen lebt. An
            jedem ist die Frage dieselbe. Dann tut das Fragen, was Fragen tut.
          </p>
          <ol className="flex flex-col gap-5">
            {places.map((place, i) => (
              <li key={place} className="flex items-baseline gap-5">
                <span className="font-display text-caption text-glow/85 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-subheading text-bone/80">{place}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-threshold py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">Sie dürfen das Wasser trinken, ohne mir den Brunnen zu schulden.</p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Von innen geschrieben</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            Miskwa Kimiwan schreibt mitten aus der Arbeit heraus: ein Krankenhausbett, eine
            Apothekentheke, eine unfertige Brücke auf einer Farm, die Nachtwache am Bett der
            Mutter. Nie von oben herab.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Nichts hier verlangt, geglaubt zu werden. Prüfen Sie es an Ihrem eigenen Atem.
          </p>
          <Link
            href="/de/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            Über Miskwa Kimiwan &rarr;
          </Link>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          Translated from reader reviews on Amazon.ca. The English page quotes
          them word for word. An ellipsis marks where a review was shortened.
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section border-t border-night/10">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-12 text-center">
            Stimmen zum Buch
          </h2>
          <p className="font-serif italic text-caption text-night/70 text-center -mt-8 mb-12">
            Rezensionen aus dem Englischen übersetzt.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &bdquo;Dieses wunderschön gearbeitete kleine Buch weckt den Wunsch nach mehr. Die Weisheit, die es vermittelt, schließt den Kreis: an den Ort, an dem man zu vergessen begann, und zurück zum Erinnern daran, wer man ist, und an die vielen Facetten, die einen zum Menschen machen.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                P.A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &bdquo;Wieder ein Buch von Miskwa mit wirklich kraftvoller Medizin. Erhalten und langsam gelesen, in einem Zug. Danke für die Samen.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &bdquo;Dieses Buch ist ein aktiver Wegweiser, um sich den Weg zurück zu erinnern: zu sich selbst, zur Beziehung, zur Präsenz. Es gibt dem Worte, was man vielleicht unter der Oberfläche gespürt hat. &hellip; Dieses Buch ist ein wunderschönes Geschenk.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://www.amazon.ca/dp/1777747872"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Alle Rezensionen auf Amazon lesen &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/the-re-membering" locale="de" />
      <NewsletterSignup locale="de" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">Gehen Sie behutsam.</p>
        </div>
      </section>
    </>
  )
}
