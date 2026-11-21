import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/the-re-membering'),
  title: 'The Re-Membering',
  description:
    'Rien en vous n’a été brisé. Vous avez vécu. Six retours vers la part de vous qui n’a jamais oublié. En livre broché, numérique et audio, lu par Omar Abou.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/fr/the-re-membering',
    siteName: 'Miskwa Kimiwan',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'Rien en vous n’a été brisé. Vous avez vécu. Six retours vers la part de vous qui n’a jamais oublié. Un nouveau livre de Miskwa Kimiwan.',
    images: [
      {
        url: '/images/the-re-membering-cover.jpg',
        width: 1600,
        height: 2560,
        alt: 'The Re-Membering, couverture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Re-Membering: Six Turns Back to the Part of You That Never Forgot',
    description:
      'Rien en vous n’a été brisé. Vous avez vécu. Un nouveau livre de Miskwa Kimiwan.',
    images: ['/images/the-re-membering-cover.jpg'],
  },
}

const places = [
  'le corps',
  'l’histoire qu’on vous a transmise',
  'les personnes venues avant vous',
  'la terre',
  'le sacré',
  'la part de vous qui observe depuis le début',
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
            <p className="text-label mb-4">Disponible en livre broché, numérique et audio</p>
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
              Rien en vous n&rsquo;a été brisé. Vous avez vécu.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Ce livre a été écrit pour la part de vous qui soupçonne avoir su quelque
              chose autrefois, et ne le retrouve plus. Pas la version dramatique.
              L&rsquo;ordinaire. Une vie qui fonctionne bien et semble un peu lointaine.
              Recevoir l&rsquo;amour de gens qui semblent décrire quelqu&rsquo;un d&rsquo;autre.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Presque tout ce qu&rsquo;on offre à cette part de vous est un système. Des
              étapes. Des pratiques. Un meilleur matin. <em>The Re-Membering</em> n&rsquo;en
              est pas un.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.amazon.ca/dp/1777747872"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit"
              >
                Acheter sur Amazon : broché et numérique
              </a>
              <a
                href="https://www.audible.ca/pd/B0HNC297KK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-3 w-fit"
              >
                Écouter sur Audible : livre audio
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Lu par Omar Abou. Deux heures trente minutes, version intégrale.
              </p>
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
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/the-re-membering-cover.jpg"
                alt="The Re-Membering: Six Turns Back to the Part of You That Never Forgot, couverture"
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
            Là où vit l&rsquo;Oubli
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Il vous accompagne à travers les six lieux où vit l&rsquo;Oubli. Dans chacun
            d&rsquo;eux, la question est la même. Puis la question fait ce que fait une question.
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
          <p className="pull-quote">Vous pouvez boire l&rsquo;eau sans me devoir le puits.</p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Écrit de l&rsquo;intérieur</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            Miskwa Kimiwan écrit de l&rsquo;intérieur du travail : un lit d&rsquo;hôpital, un
            comptoir de pharmacie, un pont inachevé sur une ferme, la garde de nuit au
            chevet de sa mère. Jamais d&rsquo;au-dessus de vous.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Rien ici ne demande à être cru. Vérifiez-le à votre propre souffle.
          </p>
          <Link
            href="/fr/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            Biographie de Miskwa Kimiwan &rarr;
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
            Échos de lecture
          </h2>
          <p className="font-serif italic text-caption text-night/70 text-center -mt-8 mb-12">
            Avis traduits de l&rsquo;anglais.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;Ce petit livre, magnifiquement façonné, vous laisse sur votre faim. La sagesse qu&rsquo;il transmet vous fait boucler la boucle, jusqu&rsquo;au lieu où vous avez commencé à oublier, puis de retour vers le souvenir de qui vous êtes et des multiples facettes qui font de vous un être humain.&nbsp;&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                P.A.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;Encore un livre de Miskwa porteur d&rsquo;une médecine vraiment puissante. Je l&rsquo;ai reçu et lu lentement, d&rsquo;une seule traite. Merci pour les semences.&nbsp;&raquo;
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                &laquo;&nbsp;Ce livre est un guide actif pour retrouver le chemin vers vous-même, vers la relation, vers la présence. Il met des mots sur ce que vous ressentiez peut-être sous la surface. &hellip; Ce livre est un très beau cadeau.&nbsp;&raquo;
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
              Lire tous les avis sur Amazon &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/the-re-membering" locale="fr" />
      <NewsletterSignup locale="fr" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">Allez doucement.</p>
        </div>
      </section>
    </>
  )
}
