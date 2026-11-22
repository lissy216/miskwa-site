import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('de', '/book-of-questions'),
  title: 'The Book of Questions: The Socratic Year of the Soul',
  description: '372 Fragen. Zwölf Monate Gelände. Ein ganzes Jahr, um dem zu vertrauen, was in Ihnen schon lebendig ist. Als Taschenbuch, als E-Book und jetzt als App für das iPhone: Season One ist kostenlos.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/de/book-of-questions',
    siteName: 'Miskwa Kimiwan',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 Fragen. Zwölf Monate Gelände. Ein ganzes Jahr, um dem zu vertrauen, was in Ihnen schon lebendig ist.',
    images: [
      {
        url: '/images/book-of-questions-cover.png',
        width: 1024,
        height: 1536,
        alt: 'The Book of Questions: The Socratic Year of the Soul, Vorderseite des Umschlags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 Fragen. Zwölf Monate Gelände. Ein ganzes Jahr, um dem zu vertrauen, was in Ihnen schon lebendig ist.',
    images: ['/images/book-of-questions-cover.png'],
  },
}

export default function BookOfQuestions() {
  const months = [
    { number: 'eins', title: 'Wer Sie waren, bevor man Ihnen einen Namen gab' },
    { number: 'zwei', title: 'Was Sie tragen, ohne es zu wissen' },
    { number: 'drei', title: 'Der Körper erinnert sich' },
    { number: 'vier', title: 'Was die Trauer Ihnen sagen will' },
    { number: 'fünf', title: 'Wo Sie sich selbst verlassen haben' },
    { number: 'sechs', title: 'Die Gesichter Ihrer Kraft' },
    { number: 'sieben', title: 'Was Vergebung nie bedeutet hat' },
    { number: 'acht', title: 'Zugehörigkeit und ihr Preis' },
    { number: 'neun', title: 'Die Geschichten, die Sie steuern' },
    { number: 'zehn', title: 'Was Sie täten, wenn niemand zusähe' },
    { number: 'elf', title: 'Die Abstammung, die Sie nicht gewählt haben' },
    { number: 'zwölf', title: 'Die Rückkehr' },
  ]

  return (
    <>
      {/* ============================================
          HERO - Light mood
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              Jetzt erhältlich
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-2">
              The Book of Questions
            </h1>
            <p className="font-serif italic text-subheading text-night/75 mb-2">
              The Socratic Year of the Soul
            </p>
            <p className="font-serif italic text-body-lg text-night/70 mb-8">
              Eine einjährige Reise zu Ihnen selbst
            </p>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              Die meisten Bücher geben Ihnen Antworten. Dieses gibt Sie sich selbst zurück.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed mb-10">
              372 Fragen. Zwölf Monate Gelände. Ein ganzes Jahr, um dem zu vertrauen, was in Ihnen schon lebendig ist. Kein Programm. Kein Lehrplan. Ein Gespräch zwischen Ihnen und dem Teil von Ihnen, der darauf wartet, gefragt zu werden.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Die App für das iPhone: Season One kostenlos
              </a>
              <a
                href="https://a.co/d/04ofbHp4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Kindle-Ausgabe: bei Amazon bestellen
              </a>
              <a
                href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Taschenbuch: bei Chapters Indigo bestellen
              </a>
              <a
                href="https://books2read.com/u/mBWDNA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                E-Book bei Apple, Kobo, B&amp;N und weiteren
              </a>
              <p className="font-serif italic text-caption text-night/70 mt-3 max-w-md">
                Dieses Buch ist auf Englisch erhältlich.
              </p>
              <p className="font-serif italic text-caption text-night/70 max-w-md">
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
          <div className="flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/book-of-questions-cover.png"
                alt="The Book of Questions: The Socratic Year of the Soul, Vorderseite des Umschlags"
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
          THE APP
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Jetzt auf dem iPhone
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Das Jahr in Ihrer Tasche
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Das ganze Jahr lebt jetzt als App. Jeden Morgen wartet die Frage des Tages: auf Ihrem Startbildschirm, auf Ihrem Sperrbildschirm, bevor Sie irgendetwas anderes öffnen. Lesen Sie sie am Morgen. Lassen Sie sie mitgehen. Am Abend schreiben Sie. Schon ein ehrlicher Satz zählt, und er speichert sich von selbst.
            </p>
            <p>
              Wenn eine Staffel endet, spiegelt Ihnen der Spiegel Ihre eigenen Worte zurück. Keine KI liest Ihr Tagebuch. Keine Zusammenfassung stammt von einer Maschine. Alles, was Sie schreiben, bleibt auf Ihrem Telefon und in Ihrer eigenen iCloud, nie auf einem Server von uns, denn wir haben keinen. Keine Konten, keine Statistiken, keine Werbung.
            </p>
            <p>
              Season One, einunddreißig Tage und Ihr erster Spiegel, ist kostenlos. Keine Karte, keine Frist. Das Taschenbuch und die App sind zwei Türen in dasselbe Jahr.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Im App Store laden
            </a>
            <p className="font-serif italic text-caption text-bone/60 mt-4">
              Kostenlos beginnen &middot; Für das iPhone
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE BEGINNING
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Der Anfang
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Sie haben nach den richtigen Antworten gesucht. Was, wenn Sie die falschen Fragen gestellt haben?
            </p>
            <p>
              Etwas in Ihnen kennt den Weg hindurch schon. Nicht vorbei. <em>Hindurch.</em> Das Problem ist nicht, dass Ihnen Antworten fehlen. Das Problem ist, dass die Fragen, die die meisten stellen, die Fragen wohlmeinender Bücher, Lehrender und Programme, das Ziel außerhalb von Ihnen verorten. Sie schicken Sie bei fremdem Wissen in die Lehre.
            </p>
            <p>
              Sokrates hat niemandem gesagt, was zu denken sei. Er fragte, bis die Wahrheit, die schon in einem Menschen lebte, keine Wahl mehr hatte, als aufzutauchen. Er nannte es Hebammenkunst. Er überbrachte keine Information. Er brachte Menschen zu sich selbst.
            </p>
            <p>
              <em>The Book of Questions</em> folgt dieser Tradition. Eine Frage pro Tag, ein ganzes Jahr lang, geordnet über zwölf Monate Seelengelände. Ein Gespräch zwischen Ihnen und dem Teil von Ihnen, der darauf wartet, gefragt zu werden.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="bg-parchment py-16">
        <div className="section-narrow text-center">
          <div className="divider-cool mx-auto mb-10" />
          <p className="pull-quote text-night max-w-2xl mx-auto">
            „Die Frage, die Ihnen Angst macht, ist fast immer die, die etwas befreien will.“
          </p>
        </div>
      </section>

      {/* ============================================
          INSIDE THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            Im Buch
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Ein Jahr ist keine lange Zeit. Es sei denn, Sie verbringen es ehrlich.
            </p>
            <p>
              Jeder Monat trägt sein eigenes Thema. Sein eigenes Gelände. Die zwölf Monate folgen nicht dem Kalender, sondern der Seele, und bewegen sich durch Fragen, Identität, Trauer, Zugehörigkeit, Kraft, Vergebung und Rückkehr.
            </p>
            <p>
              Jeden Tag eine Frage. Manchmal wird sie sich einfach anfühlen. Sie schreiben ein paar Worte und legen sie beiseite. An einem anderen Tag öffnet eine ganz ähnliche Frage etwas, das Sie seit zwanzig Jahren tragen und von dem Sie nicht wussten, dass es noch Gewicht hat.
            </p>
            <p>
              Es gibt keinen richtigen Weg, dieses Buch zu benutzen. Es gibt keine Note. Es gibt kein Ankommen. Es gibt nur die Übung, sich hinzusetzen und sich fragen zu lassen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE TWELVE MONTHS
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
              Das Gelände eines Jahres
            </p>
            <h2 className="font-serif text-heading text-bone">
              Die zwölf Monate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {months.map((month) => (
              <div key={month.number} className="border border-bridge/50 rounded-sm p-6 hover:border-glow/30 transition-colors">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-2">
                  Monat {month.number}
                </p>
                <p className="font-serif text-body-lg text-bone">
                  {month.title}
                </p>
              </div>
            ))}
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
            Sie müssen nicht zerbrochen sein, um das zu brauchen. Sie müssen nur ehrlich sein.
          </p>
          <div className="space-y-5 font-body text-body text-night/70 leading-relaxed">
            <p>
              Dieses Buch wurde für Menschen geschrieben, die es leid sind, gesagt zu bekommen, wie ihre Heilung auszusehen hat.
            </p>
            <p>
              Für alle, die jedes Selbsthilfebuch gelesen haben und noch immer spüren, dass etwas Wesentliches unberührt bleibt. Für alle, die heilen, therapeutisch arbeiten oder begleiten und eine Praxis brauchen, die ganz ihnen gehört, nicht ihrer Arbeit.
            </p>
            <p>
              Für alle, die mit einer Trauer leben, die in keine Phase und keinen Zeitplan passt. Für alle, denen es von außen gut geht und die irgendwo viel tiefer erschöpft sind.
            </p>
            <p>
              Für alle, die die Antworten kennen, die sie geben sollen, und ahnen, dass es wahrere gibt, die sie nie laut ausgesprochen haben. Für alle, die etwas überlebt haben und noch herausfinden, was dieses Überleben von ihnen verlangt.
            </p>
            <p>
              Für alle, die des Suchens müde sind und endlich bereit, einfach zuzuhören.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          ORDER
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <div className="divider-warm mx-auto mb-10" />
          <h2 className="font-serif text-heading text-bone mb-6">
            Beginnen
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            Das Jahr wartet auf Sie.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Kindle-Ausgabe: bei Amazon bestellen
            </a>
            <a
              href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              Taschenbuch: bei Chapters Indigo bestellen
            </a>
            <a
              href="https://books2read.com/u/mBWDNA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              E-Book bei Apple, Kobo, B&amp;N und weiteren
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              Nicht im Regal Ihrer Buchhandlung? Bitten Sie dort um eine Bestellung. Die Buchhandlung kann es über IngramSpark beziehen.
            </p>
          </div>
        </div>
      </section>
      {/* ============================================
          READER REFLECTIONS
          Translated from reader reviews on Amazon.ca.
          An ellipsis marks where a review was shortened.
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
                „So eine Öffnung habe ich mit einem Buch noch nie erlebt, nie. Und ich bin erst bei der ersten Frage. Dieses Buch lädt ein, die Worte mit dem Körper zu spüren, statt ihnen mit dem denkenden Verstand zu begegnen, und es ist so geschrieben, dass genau das geschehen kann.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                „&hellip; dieses Buch ist ein wertvolles Werkzeug, um die eigenen Fortschritte festzuhalten. Es hilft, sich selbst gegenüber verbindlich zu bleiben und weiter auf den Weg zuzugehen, den man will.“
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Rezension auf Amazon
              </footer>
            </blockquote>
          </div>

          <p className="text-center mt-12">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Alle Rezensionen auf Amazon lesen &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/book-of-questions" locale="de" />
      <NewsletterSignup locale="de" />
    </>
  )
}
