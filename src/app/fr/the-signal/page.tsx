import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/the-signal'),
  title: 'The Signal',
  description:
    'Vous émettez quelque chose en ce moment même, et cela assemble en silence votre vie autour de vous. Un nouveau livre de Miskwa Kimiwan.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/fr/the-signal',
    siteName: 'Miskwa Kimiwan',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Vous émettez quelque chose en ce moment même, et cela assemble en silence votre vie autour de vous. Un nouveau livre de Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-signal-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Signal, couverture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Signal: Why Life and People Keep Happening to You',
    description:
      'Un nouveau livre de Miskwa Kimiwan sur la fréquence que porte le corps, et la vie qu’elle assemble.',
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
              Disponible en livre broché et numérique
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              The Signal
            </h1>
            <p className="font-serif italic text-subheading text-bone/70 mb-2">
              Why Life and People Keep Happening to You
            </p>
            <p className="font-display text-caption text-bone/70 mb-8 tracking-[0.15em] uppercase">
              Un livre de Miskwa Kimiwan
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Vous émettez quelque chose en ce moment même.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
              Pas les mots que vous employez pour vous décrire. Pas la version que vous emportez aux dîners, aux entretiens d&rsquo;embauche, aux trois premiers mois d&rsquo;une nouvelle relation. Quelque chose sous tout cela. Une fréquence que votre corps porte depuis avant que vous ayez un mot pour elle. Ce que les gens présents dans la pièce avec vous perçoivent sans pouvoir le nommer.
            </p>
            <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
              Ce livre parle de ce signal, et de la vie qu&rsquo;il assemble en silence autour de vous.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/020dzwrJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Acheter sur Amazon : broché et numérique
              </a>
              <a
                href="https://books.by/miskwa-kimiwan/the-signal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Acheter sur Books.by
              </a>
              <a
                href="https://books2read.com/u/4NMJaz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Livre numérique chez Apple, Kobo, B&amp;N et ailleurs
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Ce livre est disponible en anglais.
              </p>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Il n&rsquo;est pas sur les rayons de votre librairie ? Demandez-lui de le commander. Elle peut se le procurer par IngramSpark.
              </p>
              <a
                href="/fr/wholesale"
                className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 hover:text-glow transition-colors mt-2 inline-block"
              >
                Vente en gros dès 5 exemplaires &rarr;
              </a>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 md:w-72 lg:w-80 aspect-2/3 bg-black rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-signal-cover.jpg"
                alt="The Signal: Why Life and People Keep Happening to You, couverture"
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
            La question en dessous
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Peut-être faites-vous le travail depuis des années.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Peut-être faites-vous le travail depuis des années et quelque chose reste toujours non dit. Peut-être lisez-vous la littérature populaire sur la guérison et sentez-vous qu&rsquo;il manque quelque chose sous le langage, même quand le langage est juste.
            </p>
            <p>
              Ou peut-être n&rsquo;avez-vous pas fait des années de travail du tout. Peut-être êtes-vous ici parce que le même genre de personne revient sans cesse dans votre vie sous des noms différents. Ou parce que le même genre de douleur vous retrouve sous des formes différentes. Ou parce que la même dynamique se répète dans vos relations et dans votre travail, peu importe combien de fois vous vous êtes juré que la dernière fois serait la dernière.
            </p>
            <p>
              Vous n&rsquo;avez pas de mots pour dire pourquoi. Vous savez seulement que cela continue, et vous en avez assez.
            </p>
            <p className="font-serif italic text-bone/80">
              Ce livre est pour vous.
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
            &laquo;&nbsp;Vous émettez quelque chose en ce moment même. Ce livre parle de la vie que cela assemble en silence autour de vous.&nbsp;&raquo;
          </p>
          <p className="font-display text-caption text-glow/85 mt-6 tracking-[0.2em] uppercase">
            Extrait de <em>The Signal</em>
          </p>
        </div>
      </section>

      {/* ============================================
          WHAT THE SIGNAL TEACHES
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Ce qu&rsquo;enseigne The Signal
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Une fréquence que porte le corps.
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Le signal est une fréquence que porte le corps. Il n&rsquo;a rien de mystique. Il vit dans le corps, et les gens autour de vous le sentent avant que vous ayez dit un mot. Et c&rsquo;est la raison pour laquelle les mêmes personnes, les mêmes situations et les mêmes schémas continuent d&rsquo;arriver dans votre vie, quoi que vous changiez à l&rsquo;extérieur.
            </p>
            <p>
              Le livre vous apprend à reconnaître le signal que vous émettez, à nommer ce qui vous mène sous vos intentions, et à déplacer la fréquence pour que ce qui arrive puisse arriver autrement.
            </p>
            <p>
              Ancré dans la cosmologie autochtone et le cadre de Miskwa Kimiwan, en dialogue avec les neurosciences évaluées par les pairs, l&rsquo;épigénétique et la recherche sur le cœur et le cerveau, <em>The Signal</em> offre dix-huit chapitres d&rsquo;enseignement parcouru pas à pas, de pratique du ressenti corporel et de reconnaissance honnête de ce que coûte ce travail.
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
            Pour qui
          </h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Pour qui porte des schémas qui ont refusé d&rsquo;être laissés derrière.
          </p>
          <div className="space-y-5 font-body text-body text-night/75 leading-relaxed">
            <p>
              Pour qui a fait des années de travail intérieur et sait que quelque chose n&rsquo;a toujours pas été nommé.
            </p>
            <p>
              Pour qui n&rsquo;a jamais fait ce travail et pose la question pour la première fois.
            </p>
            <p>
              Pour qui a vu ses schémas l&rsquo;accompagner d&rsquo;une ville à l&rsquo;autre, d&rsquo;une relation à l&rsquo;autre, d&rsquo;un chapitre de la vie à l&rsquo;autre, en refusant d&rsquo;être laissés derrière.
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
            Échos de lecture
          </h2>
          <p className="font-serif italic text-caption text-night/70 text-center -mt-8 mb-12">
            Avis traduits de l&rsquo;anglais.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;Ce livre est exceptionnel. &hellip; Il faut une honnêteté radicale envers soi-même pour le reconnaître. Avoir ce guide laisse moins de place pour se mentir.&nbsp;&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;Un élan pour commencer à se brancher sur cette station, ce canal qui appelle de l&rsquo;intérieur. Ce livre aidera à prendre du recul, parce qu&rsquo;il y a en vous l&rsquo;envie et la disponibilité de vous écouter.&nbsp;&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Avis sur Amazon
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;C&rsquo;est un livre extrêmement important. &hellip; Je pense que c&rsquo;est l&rsquo;un des livres les plus fascinants que j&rsquo;aie jamais lus.&nbsp;&raquo;
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
              Lire tous les avis sur Amazon &rarr;
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
            Disponible dès maintenant en livre broché et numérique.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://a.co/d/020dzwrJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 w-fit"
            >
              Acheter sur Amazon : broché et numérique
            </a>
            <a
              href="https://books.by/miskwa-kimiwan/the-signal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              Acheter sur Books.by
            </a>
            <a
              href="https://books2read.com/u/4NMJaz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
            >
              Livre numérique chez Apple, Kobo, B&amp;N et ailleurs
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              Il n&rsquo;est pas sur les rayons de votre librairie ? Demandez-lui de le commander. Elle peut se le procurer par IngramSpark.
            </p>
          </div>
        </div>
      </section>
      <MoreBooks current="/the-signal" locale="fr" />
      <NewsletterSignup locale="fr" />
    </>
  )
}
