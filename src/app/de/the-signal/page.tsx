import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/the-signal'),
  title: 'The Signal',
  description:
    'Sie senden gerade jetzt etwas aus, und es hat still Ihr Leben um Sie herum zusammengefügt. Ein neues Buch von Miskwa Kimiwan.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/de/the-signal',
    siteName: 'Miskwa Kimiwan',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Sie senden gerade jetzt etwas aus, und es hat still Ihr Leben um Sie herum zusammengefügt. Ein neues Buch von Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-signal-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Signal, Buchumschlag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Ein neues Buch von Miskwa Kimiwan über die Frequenz, die der Körper trägt, und das Leben, das sie zusammenfügt.',
    images: ['/images/the-signal-cover.jpg'],
  },
}

export default function TheSignal() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
              Jetzt als Taschenbuch und E-Book erhältlich
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              The Signal
            </h1>
            <p className="font-serif italic text-subheading text-bone/70 mb-2">
              Why Life and People Keep Happening to You
            </p>
            <p className="font-display text-caption text-bone/70 mb-8 tracking-[0.15em] uppercase">
              Ein Buch von Miskwa Kimiwan
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Sie senden gerade jetzt etwas aus.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
              Nicht die Worte, mit denen Sie sich beschreiben. Nicht die Version, die Sie zu Abendessen mitbringen, zu Vorstellungsgesprächen, in die ersten drei Monate einer neuen Beziehung. Etwas darunter. Eine Frequenz, die Ihr Körper schon trug, bevor Sie ein Wort dafür hatten. Das, was andere im selben Raum spüren und nicht benennen können.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
              Dieses Buch handelt von diesem Signal und von dem Leben, das es still um Sie herum zusammengefügt hat.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/020dzwrJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Bei Amazon kaufen: Taschenbuch und E-Book
              </a>
              <a
                href="https://books.by/miskwa-kimiwan/the-signal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Bei Books.by kaufen
              </a>
              <a
                href="https://books2read.com/u/4NMJaz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                E-Book bei Apple, Kobo, B&amp;N und mehr
              </a>
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
            <div className="relative w-64 md:w-72 lg:w-80 aspect-2/3 bg-black rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-signal-cover.jpg"
                alt="The Signal: Why Life and People Keep Happening to You, Buchumschlag"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          THE QUESTION UNDERNEATH
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Die Frage darunter
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Vielleicht arbeiten Sie seit Jahren an sich.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Vielleicht arbeiten Sie seit Jahren an sich, und etwas bleibt immer wieder ungesagt. Vielleicht lesen Sie die gängige Literatur über Heilung und merken, dass unter der Sprache etwas fehlt, selbst wenn die Sprache gut ist.
            </p>
            <p>
              Oder vielleicht haben Sie gar nicht jahrelang an sich gearbeitet. Vielleicht sind Sie hier, weil dieselbe Art Mensch immer wieder in Ihrem Leben auftaucht, unter anderen Namen. Oder weil derselbe Schmerz Sie immer wieder findet, in anderen Formen. Oder weil sich dieselbe Dynamik in Ihren Beziehungen und Ihrer Arbeit wiederholt, egal wie oft Sie geschworen haben, dass das letzte Mal das letzte Mal war.
            </p>
            <p>
              Ihnen fehlen die Worte für das Warum. Sie wissen nur, dass es immer wieder passiert, und Sie sind es leid.
            </p>
            <p className="font-serif italic text-bone/80">
              Dieses Buch ist für Sie.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-threshold py-16 md:py-20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-8" />
          <p className="pull-quote text-bone/90 max-w-2xl mx-auto">
            &bdquo;Sie senden gerade jetzt etwas aus. Dieses Buch handelt von dem Leben, das es still um Sie herum zusammengefügt hat.&ldquo;
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            Aus <em>The Signal</em>
          </p>
        </div>
      </section>

      {/* ============================================
          WHAT THE SIGNAL TEACHES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Was The Signal lehrt
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Eine Frequenz, die der Körper trägt.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Das Signal ist eine Frequenz, die der Körper trägt. Es ist nichts Mystisches. Es lebt im Körper, und die Menschen um Sie herum spüren es, bevor Sie ein Wort sagen. Und es ist der Grund, warum dieselben Menschen, dieselben Situationen und dieselben Muster immer wieder in Ihr Leben kommen, egal was Sie im Außen verändern.
            </p>
            <p>
              Das Buch lehrt Sie, das Signal zu erkennen, das Sie aussenden, zu benennen, was Sie unter Ihren Absichten gesteuert hat, und die Frequenz zu verschieben, damit das, was ankommt, anders ankommen kann.
            </p>
            <p>
              Verwurzelt in indigener Kosmologie und im Ansatz von Miskwa Kimiwan, im Gespräch mit peer-reviewter Neurowissenschaft, Epigenetik und Herz-Hirn-Forschung, bietet <em>The Signal</em> achtzehn Kapitel: Lehre, Schritt für Schritt gegangen, Übungen im körperlichen Spüren und ein ehrliches Anerkennen dessen, was diese Arbeit kostet.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHO THIS IS FOR
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-4">
            Für wen dieses Buch ist
          </h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Für alle, deren Muster sich nicht zurücklassen ließen.
          </p>
          <div className="space-y-5 font-body text-body text-night/75 leading-relaxed">
            <p>
              Für alle, die jahrelang innere Arbeit getan haben und wissen, dass etwas noch immer nicht benannt ist.
            </p>
            <p>
              Für alle, die diese Arbeit nie getan haben und die Frage zum ersten Mal stellen.
            </p>
            <p>
              Für alle, deren Muster mit ihnen gezogen sind, durch Städte, durch Beziehungen, durch Kapitel des Lebens, und sich nicht zurücklassen lassen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          Translated from verified-purchase reader reviews on Amazon.ca. The
          English page quotes them word for word. An ellipsis marks where a
          review was shortened.
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
                &bdquo;Dieses Buch ist außergewöhnlich. &hellip; Es braucht radikale Ehrlichkeit mit sich selbst, um es zu erkennen. Mit diesem Wegweiser bleibt weniger Raum, sich selbst zu belügen.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &bdquo;Ein Antrieb, sich auf den Sender, den Kanal einzustimmen, der von innen ruft. Dieses Buch hilft, eine andere Perspektive zu gewinnen, weil man bereit und willens ist, sich selbst zuzuhören.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Rezension auf Amazon
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &bdquo;Dies ist ein unglaublich wichtiges Buch. &hellip; Ich glaube, es ist eines der faszinierendsten Bücher, die ich je gelesen habe.&ldquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.D.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://www.amazon.ca/gp/product-reviews/B0H8KZ73L9/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Alle Rezensionen auf Amazon lesen &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          ORDER
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <h2 className="font-serif text-heading text-bone mb-6">
            The Signal
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            Jetzt als Taschenbuch und E-Book erhältlich.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://a.co/d/020dzwrJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 w-fit"
            >
              Bei Amazon kaufen: Taschenbuch und E-Book
            </a>
            <a
              href="https://books.by/miskwa-kimiwan/the-signal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              Bei Books.by kaufen
            </a>
            <a
              href="https://books2read.com/u/4NMJaz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              E-Book bei Apple, Kobo, B&amp;N und mehr
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              Nicht im Regal Ihrer Buchhandlung? Bitten Sie dort, es zu bestellen. Die Buchhandlung kann es über IngramSpark beziehen.
            </p>
          </div>
        </div>
      </section>
      <MoreBooks current="/the-signal" locale="de" />
      <NewsletterSignup locale="de" />
    </>
  )
}
