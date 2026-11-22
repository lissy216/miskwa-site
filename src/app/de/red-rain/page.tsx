import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/red-rain'),
  title: 'Red Rain: A Soul Shattered',
  description: 'Die Geschichte eines tiefen Falls, einer jungen Seele, die in Stücke bricht, und der Suche nach Menschlichkeit an den dunklen Orten. Keine Geschichte leichter Erlösung. Ein Wegweiser, um mit Würde durch die Dunkelheit zu gehen.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/de/red-rain',
    siteName: 'Miskwa Kimiwan',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Keine Geschichte leichter Erlösung. Ein Wegweiser, um mit Würde durch die Dunkelheit zu gehen.',
    images: [
      {
        url: '/images/red-rain-cover.png',
        width: 430,
        height: 645,
        alt: 'Red Rain: A Soul Shattered, Vorderseite des Umschlags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Keine Geschichte leichter Erlösung. Ein Wegweiser, um mit Würde durch die Dunkelheit zu gehen.',
    images: ['/images/red-rain-cover.png'],
  },
}

export default function RedRain() {
  return (
    <>
      {/* ============================================
          HERO - Shadow mood
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-label mb-4">Jetzt erhältlich</p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              Red Rain
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Soul Shattered
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Ein Junge überlebt die Traumata, die ihn hätten zerbrechen sollen: ein Krankenhausbett, glühend wie ein Hochofen, Haut, die aufplatzt wie Rinde. Eine Familiengeschichte, schwer von Schweigen. Nächte, heimgesucht von Träumen, die sich wie Warnungen anfühlen. Er wächst im Schatten generationenübergreifender Traumata auf und der quälenden Fragen, die sie hinterlassen.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-6">
              Was ist wirklich? Wohin geht der Schmerz, wenn niemand ihn halten will? Wer werden wir, wenn die Welt vergisst, uns zu sehen?
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Aus den langen Korridoren fehlender Erinnerung lernt er die stärkste Medizin, die er hat: Präsenz. Den Mut, bei dem zu bleiben, was wehtut, lange genug, damit es sich verwandeln kann.
            </p>

            {/* Purchase Links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/6qsyT4d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Bei Amazon kaufen
              </a>
              <a
                href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Bei Chapters Indigo kaufen
              </a>
              <a
                href="https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Bei Singing Pebble Books kaufen (Ottawa)
              </a>
              <a
                href="https://books2read.com/u/b5AEQG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                E-Book bei Apple, Kobo, B&amp;N und weiteren
              </a>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Dieses Buch ist auf Englisch erhältlich.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Nicht im Regal Ihrer Buchhandlung? Bitten Sie dort um eine Bestellung. Die Buchhandlung kann es über IngramSpark beziehen.
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
                src="/images/red-rain-cover.png"
                alt="Red Rain: A Soul Shattered, Vorderseite des Umschlags"
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
          ABOUT THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Über das Buch
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Auf dem Weg liegen Momente, die brennen und heiligen: die Güte eines Fremden im Krankenhaus, das Gewicht gefallener Freunde, ein Vater auf der Suche nach dem Himmel und das stille Gelübde, das zu beenden, was seine Blutlinie gejagt hat.
            </p>
            <p>
              Wenn Sie sich je ungesehen gefühlt haben, zerstreut von Kräften, größer als Sie selbst, dann bietet Ihnen dieses Buch eine Hand auf der Schulter und einen Pfad durch den Wald. Nicht um die Vergangenheit auszulöschen, sondern um sie zu verwandeln: in Wahl, in Mitgefühl und in ein Feuer, das endlich Ihren Namen entzündet.
            </p>
            <p className="text-bone/70">
              <em>Red Rain: A Soul Shattered</em> ist keine Geschichte leichter Erlösung. Es ist ein Wegweiser, um mit Würde durch die Dunkelheit zu gehen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <p className="pull-quote text-bone max-w-2xl mx-auto">
            „Heilung heißt nicht, dem zu entkommen, was Ihnen wehtut. Heilung heißt, sich dessen bewusst zu werden.“
          </p>
          <p className="font-display text-caption text-bone/70 mt-6 tracking-wide">
            Aus <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-4 text-center">
            Stimmen von Lesenden
          </h2>
          <p className="font-serif italic text-caption text-night/70 mb-12 text-center">
            Rezensionen aus dem Englischen übersetzt.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Zuerst scheint dieses Buch eine Geschichte über das Leben eines Jungen zu sein, der zum Mann heranwächst. Was man anfangs nicht merkt: Die Geschichte erreicht leise verschiedene Teile von einem selbst. Manche Kapitel sind schwer zu lesen, nicht nur wegen ihres Inhalts, sondern weil sie die eigenen ungelösten Wunden an die Oberfläche holen. Am Ende merkt man, dass man neu geprägt, verändert und geheilt worden ist. Dieses Buch zeigt nicht nur die Kraft der Verbundenheit und des kollektiven Bewusstseins. Es nutzt diese Kraft aktiv, um Sie zu heilen.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Noch nie wollte ich den Menschen hinter einem Buch einfach so fest halten und sagen, dass alles gut wird. Es hat mich zerbrochen, es hat mich geheilt, und ich will leben und lieben mit allem, was ich bin.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Dieses Buch hat mich verändert. Ich habe es mit jeder Seite geschehen gespürt. Eine Medizin ist hineingewoben: die Medizin der Bedeutung. Herzzerreißend, roh, ehrlich, von poetischer Eleganz, gab es mir Hoffnung und Inspiration, eine Richtung. Eine wirklich bemerkenswerte Lektüre. Ein sehr geerdeter Zugang zu der spirituellen Alchemie, die es braucht, um ein Leben zu retten, indem man all dem Schmerz und Leid, das wir hier erfahren, eine Bedeutung gibt.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.R.D.
              </footer>
            </blockquote>

            {/* The five below are translated from verified-purchase reader reviews
                on Amazon.ca. An ellipsis marks where a review was shortened. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Dieses Buch ist auf erschütternde Weise schön. &hellip; Diese Seiten werden Sie zerbrechen, aber sie setzen Sie auch wieder zusammen. Dieses Buch ist ein echtes Geschenk.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Dieses Buch zeigt kunstvoll, was es heißt, Schmerz zu verwandeln und aus Dunkelheit etwas Schönes zu machen, auf die roheste und menschlichste Weise.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Eine schöne Lektüre voller Tiefe, Innenschau und Erzählkunst, die von Herzen kommt. Red Rain lädt dazu ein, Schmerz auf heilige Weise zu halten.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.F.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Red Rain erinnert uns daran, wie wichtig es ist, Raum für uns selbst und für andere zu halten, und dass Heilung selbst in unseren dunkelsten Momenten möglich ist.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                T.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Herzzerreißend, schön und inspirierend: Dieses Buch wird Sie verändern.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                I.
              </footer>
            </blockquote>

            {/* Translated from a verified reviewer on Chapters Indigo. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „Auf jeden Fall großartig zu lesen. Ich konnte es nicht aus der Hand legen.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://a.co/d/6qsyT4d"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Alle Rezensionen auf Amazon lesen &rarr;
            </a>
          </p>
          <p className="text-center mt-4">
            <a
              href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Rezensionen bei Chapters Indigo &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          ABOUT THE AUTHOR
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/85 mb-4">
            Über Miskwa Kimiwan
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed max-w-xl mx-auto">
            Miskwa Kimiwan schreibt, heilt und lehrt spirituelles Heilen und Energiemedizin. Das Werk von Miskwa Kimiwan trägt generationenübergreifende Erinnerung und Medizin und verbindet Trauma, Präsenz und die unsichtbare Welt. Es hilft anderen, sich daran zu erinnern, wer sie unter dem Schmerz sind.
          </p>
        </div>
      </section>
      <MoreBooks current="/red-rain" locale="de" />
      <NewsletterSignup locale="de" />
    </>
  )
}
