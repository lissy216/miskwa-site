import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/red-rain'),
  title: 'Red Rain: A Soul Shattered',
  description: 'L’histoire d’une chute, d’une jeune âme brisée en morceaux, et du chemin pour retrouver l’humanité dans les lieux obscurs. Pas un récit de rédemption facile. Un guide de terrain pour traverser l’obscurité avec dignité.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/fr/red-rain',
    siteName: 'Miskwa Kimiwan',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Pas un récit de rédemption facile. Un guide de terrain pour traverser l’obscurité avec dignité.',
    images: [
      {
        url: '/images/red-rain-cover.png',
        width: 430,
        height: 645,
        alt: 'Red Rain: A Soul Shattered, couverture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Rain: A Soul Shattered',
    description:
      'Pas un récit de rédemption facile. Un guide de terrain pour traverser l’obscurité avec dignité.',
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
            <p className="text-label mb-4">Disponible maintenant</p>
            <h1 className="font-serif text-display-sm md:text-display text-bone mb-2">
              Red Rain
            </h1>
            <p className="font-serif italic text-subheading text-bone/60 mb-8">
              A Soul Shattered
            </p>
            <div className="divider-warm mb-8" />
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Un garçon survit aux traumatismes qui auraient dû le briser : un lit d’hôpital embrasé comme une fournaise, une peau qui se fend comme l’écorce. Une histoire familiale lourde de silence. Des nuits visitées par des rêves qui ressemblent à des avertissements. Il grandit dans l’ombre du traumatisme intergénérationnel et des questions douloureuses qu’il laisse derrière lui.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-6">
              Qu’est-ce qui est réel ? Où va la douleur quand personne ne veut la porter ? Qui devenons-nous quand le monde oublie de nous voir ?
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Dans les longs couloirs de la mémoire manquante, il apprend la médecine la plus farouche qu’il possède : la présence. Le courage de rester avec ce qui fait mal assez longtemps pour le laisser changer.
            </p>

            {/* Purchase Links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://a.co/d/6qsyT4d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Acheter sur Amazon
              </a>
              <a
                href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Acheter chez Chapters Indigo
              </a>
              <a
                href="https://www.singingpebblebooks.ca/item/IqkeFrEQxd9jYdLHR2ZMUA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Acheter chez Singing Pebble Books (Ottawa)
              </a>
              <a
                href="https://books2read.com/u/b5AEQG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night inline-flex items-center gap-3 w-fit"
              >
                Livre numérique chez Apple, Kobo, B&amp;N et ailleurs
              </a>
              <p className="font-serif italic text-caption text-bone/70 mt-3 max-w-md">
                Ce livre est disponible en anglais.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Pas sur les rayons de votre librairie ? Demandez-lui de le commander. Elle peut se le procurer par IngramSpark.
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
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/red-rain-cover.png"
                alt="Red Rain: A Soul Shattered, couverture"
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
            À propos du livre
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              En chemin, il y a des moments qui brûlent et qui sanctifient : la bonté d’un inconnu à l’hôpital, le poids des amis tombés, un père qui cherche le Ciel, et le vœu silencieux de mettre fin à ce qui traque sa lignée.
            </p>
            <p>
              Si vous avez déjà connu l’invisibilité, l’éparpillement sous des forces plus grandes que vous, ce livre vous offre une main sur l’épaule et un sentier à travers la forêt. Non pour effacer le passé, mais pour le transmuer en choix, en compassion, et en un feu qui allume enfin votre nom.
            </p>
            <p className="text-bone/70">
              <em>Red Rain: A Soul Shattered</em> n’est pas un récit de rédemption facile. C’est un guide de terrain pour traverser l’obscurité avec dignité.
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
            « Guérir, ce n’est pas fuir ce qui vous blesse. C’est en prendre conscience. »
          </p>
          <p className="font-display text-caption text-bone/70 mt-6 tracking-wide">
            Extrait de <em>Red Rain: A Soul Shattered</em>
          </p>
        </div>
      </section>

      {/* ============================================
          READER REFLECTIONS
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-container">
          <h2 className="font-serif text-heading text-night mb-4 text-center">
            Échos de lecture
          </h2>
          <p className="font-serif italic text-caption text-night/70 mb-12 text-center">
            Avis traduits de l’anglais.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Au début, ce livre semble raconter les événements de la vie d’un garçon qui devient un homme. Ce que l’on ne remarque pas tout de suite, c’est que l’histoire atteint en silence différentes parts de soi. Certains chapitres sont difficiles à lire, pas seulement à cause de leur contenu, mais parce qu’ils font remonter nos propres blessures non résolues. À la fin, on se rend compte qu’on a été remodelé, changé, guéri. Ce livre ne se contente pas d’illustrer le pouvoir de l’interconnexion et de la conscience collective : il s’en sert activement pour vous guérir. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.V.D.Z.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Je n’ai jamais eu autant envie de serrer très fort dans mes bras la personne qui a écrit un livre, simplement pour lui dire que tout ira bien. Ce livre m’a brisé, il m’a guéri, et je veux vivre et aimer avec tout ce que je suis. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                B.T.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Ce livre m’a changé. Je l’ai senti se produire à chaque page. Il y a une médecine tissée dedans : la médecine du sens. Déchirant, brut, honnête, d’une élégance poétique, il m’a donné de l’espoir et de l’inspiration, une direction. Une lecture vraiment remarquable. C’est une approche très ancrée de l’alchimie spirituelle qu’il faut pour sauver une vie en donnant un sens à toute la douleur et à toute la souffrance que nous vivons ici. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                C.R.D.
              </footer>
            </blockquote>

            {/* The five below are translated from verified-purchase reader reviews
                on Amazon.ca. An ellipsis marks where a review was shortened. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Ce livre est d’une beauté dévastatrice. &hellip; Ces pages vont vous briser, mais elles vont aussi vous reconstruire. Ce livre est un vrai cadeau. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Ce livre exprime avec art ce que signifie transmuer la douleur et faire de l’obscurité quelque chose de beau, de la manière la plus brute et la plus humaine. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Une belle lecture, pleine de profondeur, d’introspection et d’un récit qui vient du cœur. Red Rain invite à porter la douleur d’une manière sacrée. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                A.F.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Red Rain nous rappelle combien il est important d’offrir un espace d’accueil à soi-même et aux autres, et que la guérison est possible même dans nos moments les plus sombres. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                T.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Déchirant, beau et inspirant, ce livre va vous changer. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                I.
              </footer>
            </blockquote>

            {/* Translated from a verified reviewer on Chapters Indigo. */}
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Une lecture formidable, sans aucun doute. Impossible de le lâcher. »
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
              Lire tous les avis sur Amazon &rarr;
            </a>
          </p>
          <p className="text-center mt-4">
            <a
              href="https://www.indigo.ca/products/red-rain-a-soul-shattered?variant=46701839024338"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
            >
              Avis sur Chapters Indigo &rarr;
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
            À propos de Miskwa Kimiwan
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed max-w-xl mx-auto">
            Miskwa Kimiwan écrit, guérit et enseigne la guérison spirituelle et la médecine énergétique. L’œuvre de Miskwa Kimiwan porte une mémoire et une médecine intergénérationnelles, et relie le traumatisme, la présence et le monde invisible. Ce travail aide d’autres personnes à se souvenir de qui elles sont sous la douleur.
          </p>
        </div>
      </section>
      <MoreBooks current="/red-rain" locale="fr" />
      <NewsletterSignup locale="fr" />
    </>
  )
}
