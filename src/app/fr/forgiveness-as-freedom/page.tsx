import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup, { NEWSLETTER_URL } from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/forgiveness-as-freedom'),
  title: 'Forgiveness as Freedom',
  description:
    'Un processus personnel de libération, de limite et de retour. Le nouveau livre de Miskwa Kimiwan paraîtra au solstice d’hiver, le 21 décembre 2026.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/fr/forgiveness-as-freedom',
    siteName: 'Miskwa Kimiwan',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Un processus personnel de libération, de limite et de retour. Le nouveau livre de Miskwa Kimiwan paraîtra au solstice d’hiver, le 21 décembre 2026.',
    images: [
      {
        url: '/images/forgiveness-as-freedom-cover.jpg',
        width: 1650,
        height: 2550,
        alt: 'Forgiveness as Freedom, couverture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgiveness as Freedom: A Self Process for Release, Boundary, and Return',
    description:
      'Un processus personnel de libération, de limite et de retour. Le nouveau livre de Miskwa Kimiwan paraîtra au solstice d’hiver, le 21 décembre 2026.',
    images: ['/images/forgiveness-as-freedom-cover.jpg'],
  },
}

// All reader-facing copy on this page is translated from the book's own back
// cover. Only the section headings are lifted from lines within it.

const frees = [
  'Dire la vérité sur ce qui s’est passé.',
  'Tracer la limite.',
  'Lâcher la corde.',
  'Revenir à votre propre vie.',
]

const rooms = [
  'Les excuses qui ne viendront jamais.',
  'La personne morte avant que rien ne soit réglé.',
  'La table où vous devez encore vous asseoir à chaque fête de famille.',
  'Le parent dont les mains n’étaient pas douces, et qui a maintenant besoin de vous pour se relever.',
  'Le mal que vous vous êtes fait à vous-même, qui est souvent le dernier compte que l’on solde.',
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
            <p className="text-label mb-4">Solstice d’hiver &middot; <span className="whitespace-nowrap">21 décembre 2026</span></p>
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
              Vous portez une fatigue. Pas celle que le sommeil répare.
            </p>
            <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-6">
              Quelqu’un prononce son nom et votre poitrine refait la même chose. Vous avez dit
              aux gens que c’était derrière vous. Vous avez dit ce qu’il fallait au dîner,
              gardé la voix égale, changé de sujet. Puis vous vous couchez et tout le dossier
              se rouvre, et vous plaidez encore, et vous gagnez encore, et rien ne change.
            </p>
            <p className="font-body text-body text-bone/70 leading-relaxed mb-10">
              Peut-être vous a-t-on dit de pardonner. Peut-être avec douceur, et quelque chose
              en vous s’est tout de même glacé. Ce froid était une information. Il signifiait
              que la définition qu’on vous avait tendue ne correspondait pas à ce que vous
              portez réellement.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Pas encore paru. Cette page accueillera les liens d’achat le jour de sa
                sortie.
              </p>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                Ce livre paraîtra en anglais.
              </p>
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 w-fit mt-2"
              >
                Recevoir l’annonce le jour de sa sortie
              </a>
              <p className="font-serif italic text-caption text-bone/70 max-w-md">
                La parution sera annoncée dans The Rainfall Newsletter, sur Substack.
              </p>
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/forgiveness-as-freedom-cover.jpg"
                alt="Forgiveness as Freedom: A Self Process for Release, Boundary, and Return, couverture"
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
            Ce qui libère vraiment une personne
          </h2>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Alors je ne vais pas vous presser. Je ne vais pas vous imposer de calendrier. Je
            ne vais pas vous dire de lâcher prise, ni vous demander d’appeler tout cela un
            cadeau.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-10">
            Ce que je ferai, c’est marcher à vos côtés à travers ce qui libère vraiment une
            personne.
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
            Les pièces où cela vit vraiment
          </h2>
          <ul className="flex flex-col gap-4 mb-12">
            {rooms.map((room) => (
              <li key={room} className="font-serif text-body-lg text-bone/75 leading-relaxed">
                {room}
              </li>
            ))}
          </ul>
          <p className="font-body text-body text-bone/60 leading-relaxed mb-6">
            Vingt-trois chapitres. Des pratiques à faire dès ce soir. Des pages où écrire.
            Des mots pour les jours où vous n’en avez aucun à vous.
          </p>
          <p className="font-body text-body text-bone/60 leading-relaxed">
            Rien de tout cela n’a besoin d’eux. Pas d’excuses. Pas de conversation. Pas de
            revirement de leur côté. Ils n’ont même pas besoin d’être en vie.
          </p>
        </div>
      </section>

      {/* ============================================
          PULL QUOTE
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section border-t border-ash/20">
        <div className="section-narrow">
          <p className="pull-quote">
            Vous avez porté cela assez longtemps. La vie qui vous attend de l’autre côté est
            toujours la vôtre.
          </p>
        </div>
      </section>

      {/* ============================================
          WHO IS WRITING
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-10">Je connais cette pièce</h2>
          <p className="font-body text-body-lg text-night/70 leading-relaxed mb-6">
            J’ai occupé la place où vous êtes, à tenir quelque chose qui refusait de se
            laisser poser. J’ai aussi été la raison pour laquelle une autre personne s’y
            est retrouvée. Les deux sont dans ce livre, parce que les deux sont en moi.
          </p>
          <p className="font-body text-body text-night/75 leading-relaxed mb-10">
            Nous vivons tous dans des maisons de verre.
          </p>
          <Link
            href="/fr/about"
            className="font-display text-xs tracking-[0.2em] uppercase text-ember hover:text-heartfire transition-colors"
          >
            À propos de Miskwa Kimiwan &rarr;
          </Link>
        </div>
      </section>

      <MoreBooks current="/forgiveness-as-freedom" locale="fr" />
      <NewsletterSignup locale="fr" />

      {/* ============================================
          CLOSING
          ============================================ */}
      <section className="mood-shadow py-16 border-t border-ash/20">
        <div className="section-narrow text-center">
          <p className="font-serif italic text-subheading text-bone/60">
            C’est vous qui revenez. Commencez ici.
          </p>
        </div>
      </section>
    </>
  )
}
