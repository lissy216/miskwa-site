import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Biografie',
  description: 'Miskwa Kimiwan schreibt, heilt und lehrt spirituelle Heilung und Energiemedizin. Ein Werk, das generationenübergreifende Erinnerung trägt und Brücken schlägt zwischen Trauma, Präsenz und der unsichtbaren Welt.',
  alternates: alternates('de', '/about'),
}

export default function About() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
              Über Miskwa Kimiwan
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-8">
              Wer hier begleitet, hat selbst geblutet.
            </h1>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              Etwas zerbrach früh. Ein Krankenhausbett, glühend wie ein Hochofen. Haut, die aufplatzte wie Rinde. Eine Familiengeschichte schwer von Schweigen und von der Art Wunden, die durch Blutlinien wandern, ohne dass jemand sie beim Namen nennt.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed">
              Was folgte, war keine gerade Linie zur Heilung. Es waren Jahre im Dunkeln, in denen sich zeigte, dass das Dunkle nicht der Feind ist. Dass der Körper schon weiß, worüber der Verstand noch streitet. Dass kein fertig verpackter spiritueller Weg zu dem passte, was tatsächlich geschah, und der einzig ehrliche Weg war, aus dem Rohstoff gelebter Erfahrung etwas Eigenes zu bauen.
            </p>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, eine Brücke zwischen den Welten"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          THE WORK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-8">
            Was daraus entstand
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Miskwa Kimiwan schreibt, heilt und lehrt spirituelle Heilung und Energiemedizin. Ein Werk, das generationenübergreifende Erinnerung und Medizin trägt und Brücken schlägt zwischen Trauma, Präsenz und der unsichtbaren Welt.
            </p>
            <p>
              Das veröffentlichte Werk begann mit <em>Red Rain: A Soul Shattered</em>, einem Memoir, das viele nicht als etwas beschreiben, das sie lesen, sondern als etwas, das sie liest. Dann folgte <em>The Book of Questions: The Socratic Year of the Soul</em>, eine Frage für jeden Tag eines Jahres, über zwölf Monate Seelengelände. <em>The Signal</em> wandte sich den Mustern zu, die in einem Leben unter immer neuen Namen wiederkehren. <em>The Re-Membering</em> erschien zur Herbst-Tagundnachtgleiche 2026, ein kurzes Buch für den Teil von Ihnen, der ahnt, dass er einmal etwas wusste.
              {/* After December 21, 2026, change "erscheint zur" to "folgte zur". The
                  English, Spanish and French pages have the same line. */}{' '}
              <em>Forgiveness as Freedom</em> erscheint zur Wintersonnenwende.
            </p>
            <p>
              Jedes dieser Bücher arbeitet aus demselben Grundsatz: Wer das Buch in der Hand hält, trägt bereits in sich, was gebraucht wird. Die Arbeit besteht nie darin, etwas Neues einzusetzen. Die Arbeit besteht darin, lange genug bei dem zu bleiben, was schon da ist, bis es gehört wird.
            </p>
          </div>
          <p className="mt-10 font-display text-xs tracking-[0.2em] uppercase text-glow/85">
            Mitglied bei{' '}
            <a
              href="https://www.canadianauthors.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-glow/40 underline-offset-4 hover:text-sun"
            >
              Canadian Authors
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          RUMI PULL QUOTE: bridging "The Work" and "Philosophy"
          ============================================ */}
      <section className="bg-ash py-section-sm">
        <div className="section-narrow text-center">
          <div className="divider-bridge max-w-xs mx-auto mb-10 opacity-60" />
          <p className="pull-quote-lg text-bone/85">
            „Die Wunde ist die Stelle, an der das Licht in Sie eintritt.“
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            Rumi
          </p>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            Haltung
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Keine Meister hier
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Die meiste Heil- und Spiritualitätsarbeit beruht auf Darbietung. Wohlbefinden vorführen. Wandlung vorführen. Geheiltsein vorführen. Auf einer Bühne stehen und den Leuten sagen, dass man die Antwort hat. Ein Podest bauen und sie anbeten lassen, was sie zu wissen glauben, dass man weiß.
            </p>
            <p>
              Dieses Modell erzeugt Abhängigkeit, keine Souveränität. Es lehrt Menschen, außerhalb von sich zu suchen, was die ganze Zeit in ihnen gelebt hat. Und es bringt Praktizierende hervor, die zu wenig ausgebildet sind, zu viel versprechen und nicht halten können, was tatsächlich durch die Tür kommt, wenn die Darbietung fällt.
            </p>
            <p>
              Diese Arbeit beruht auf einer anderen Voraussetzung. Wer hier begleitet, hat die Arbeit getan, tut sie noch und beansprucht keinen abgeschlossenen Standpunkt. Für die Arbeit, zu sich selbst heimzukehren, braucht es niemanden sonst. Was hier angeboten wird, ist ein Raum, ehrlich genug und sicher genug, dass Sie aufhören können, etwas vorzuführen, dem ins Auge sehen, was Sie getragen haben, es im Körper spüren und entdecken, dass Sie mehr sind als das, was Ihnen geschehen ist.
            </p>
            <p className="text-bone/70">
              Erlösung ist kein einzelnes Ereignis. Sie ist eine tägliche Praxis: sich dafür zu entscheiden, mehr zu werden als das, was geschehen ist. Alles, was hier geschrieben, gelehrt und angeboten wird, ist da, um dieser Wahrheit Raum zu halten.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT THIS WORK IS FOR
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">
            Wer diese Arbeit findet
          </h2>
          <div className="space-y-6 font-body text-body-lg text-night/75 leading-relaxed">
            <p>
              Menschen, die ein Gewicht tragen, das niemand sieht. Die verletzt wurden und andere verletzt haben. Die mit dem Vortäuschen fertig sind und bereit für einen Raum, in dem die Arbeit echt ist, Erlösung möglich ist und wer begleitet, selbst geblutet hat.
            </p>
            <p>
              Menschen, die durch die übliche Welt der Heilung und Selbsthilfe gegangen sind und sie hohl fanden. Die Konzepte von Liebe und Licht ließen sie ungesehen. Positives Denken fühlte sich wie eine Rolle an. Was sie brauchen, ist etwas, das vor dem Dunklen nicht zurückweicht und sie nicht zur Auflösung drängt.
            </p>
            <p>
              Therapeutisch Tätige und Praktizierende, die dieser Arbeit begegnen und darin etwas erkennen, das eine Lücke in ihrem eigenen klinischen Handwerkszeug füllt. Heilende, die die Inszenierung der Branche satthaben und sich in einem Raum ausbilden lassen wollen, der zuerst Ehrlichkeit verlangt.
            </p>
            <p>
              Wenn Sie eine schnelle Lösung suchen, ist das nicht der richtige Ort. Wenn Sie einem Guru folgen wollen, werden Sie hier keinen finden. Aber wenn Sie bereit sind, bei dem zu bleiben, was Sie tragen, und es Sie etwas lehren zu lassen, ist am Feuer Platz.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/de/red-rain" className="btn-light">
              Mit Red Rain beginnen
            </Link>
            <Link href="/de/bookstore" className="btn-light">
              Zur Buchhandlung
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SPEAKING AND READINGS
          ============================================ */}
      <section id="speaking" className="bg-night py-section-sm md:py-section scroll-mt-24">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            Vorträge und Lesungen
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Manches an dieser Arbeit braucht einen Raum
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Ein Buch liest man meist allein. Manches von dem, was diese Bücher tragen, kommt anders an, wenn es laut gesprochen wird, in einem Raum voller Menschen, die gekommen sind, um es zu hören. Miskwa Kimiwan nimmt Einladungen zu Vorträgen und Lesungen an, vor Ort und online.
            </p>
            <p>
              Erwarten Sie keine Bühnenshow, von der Antworten herabgereicht werden. Ein Vortrag hier gleicht eher einem Abend am Feuer mit Menschen, die Sie gerade erst kennengelernt haben: eine Geschichte, ein Schweigen, das andauern darf, und die Frage unter jedem der Bücher. Was braucht es, um mehr zu werden als das, was Ihnen geschehen ist? Die meisten gehen und tragen sie noch.
            </p>
          </div>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Keynotes und Vorträge</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Konferenzen, Zusammenkünfte und Fachtage. Trauma und was der Körper bewahrt, generationenübergreifende Erinnerung, Präsenz und die langsame Arbeit, zu sich selbst zurückzukommen.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Lesungen</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Aus jedem der Bücher, mit Zeit für Fragen danach. Buchhandlungen, Bibliotheken, Festivals und Buchpremieren.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Gespräche</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Lesekreise, Klassenzimmer, Podien, Podcasts und Interviews. Gruppen, die gemeinsam eines der Bücher lesen, sind besonders willkommen.
              </dd>
            </div>
          </dl>

          <p className="mt-12 font-body text-body text-bone/70 leading-relaxed">
            Für eine Einladung schreiben Sie bitte mit Datum, Ort, wer im Raum sein wird und wie viel Zeit zur Verfügung steht. Jede Anfrage wird gelesen.
          </p>
          <div className="mt-8">
            <Link href="/de/contact?topic=speaking" className="btn-primary">
              Einladung senden
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
