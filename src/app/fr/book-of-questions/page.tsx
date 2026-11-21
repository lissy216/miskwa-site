import type { Metadata } from 'next'
import Image from 'next/image'
import MoreBooks from '@/components/MoreBooks'
import NewsletterSignup from '@/components/NewsletterSignup'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/book-of-questions'),
  title: 'The Book of Questions: The Socratic Year of the Soul',
  description: '372 questions. Douze mois de territoire. Une année entière pour apprendre à faire confiance à ce qui est déjà vivant en vous. En livre broché, en livre numérique et désormais en application pour iPhone : la Saison un est gratuite.',
  openGraph: {
    type: 'book',
    url: 'https://www.miskwakimiwan.com/fr/book-of-questions',
    siteName: 'Miskwa Kimiwan',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 questions. Douze mois de territoire. Une année entière pour apprendre à faire confiance à ce qui est déjà vivant en vous.',
    images: [
      {
        url: '/images/book-of-questions-cover.png',
        width: 1024,
        height: 1536,
        alt: 'The Book of Questions: The Socratic Year of the Soul, couverture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book of Questions: The Socratic Year of the Soul',
    description:
      '372 questions. Douze mois de territoire. Une année entière pour apprendre à faire confiance à ce qui est déjà vivant en vous.',
    images: ['/images/book-of-questions-cover.png'],
  },
}

export default function BookOfQuestions() {
  const months = [
    { number: 'un', title: 'Qui étiez-vous avant qu’on vous nomme' },
    { number: 'deux', title: 'Ce que vous portez sans le savoir' },
    { number: 'trois', title: 'Le corps se souvient' },
    { number: 'quatre', title: 'Ce que le deuil essaie de dire' },
    { number: 'cinq', title: 'Le lieu de votre propre abandon' },
    { number: 'six', title: 'Les visages de votre pouvoir' },
    { number: 'sept', title: 'Ce que le pardon n’a jamais voulu dire' },
    { number: 'huit', title: 'L’appartenance et ce qu’elle coûte' },
    { number: 'neuf', title: 'Les histoires qui vous gouvernent' },
    { number: 'dix', title: 'Ce que vous feriez si personne ne regardait' },
    { number: 'onze', title: 'La lignée que vous n’avez pas choisie' },
    { number: 'douze', title: 'Le retour' },
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
              Disponible maintenant
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-2">
              The Book of Questions
            </h1>
            <p className="font-serif italic text-subheading text-night/75 mb-2">
              The Socratic Year of the Soul
            </p>
            <p className="font-serif italic text-body-lg text-night/70 mb-8">
              Une année de voyage vers vous-même
            </p>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              La plupart des livres vous donnent des réponses. Celui-ci vous rend à vous-même.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed mb-10">
              372 questions. Douze mois de territoire. Une année entière pour apprendre à faire confiance à ce qui est déjà vivant en vous. Pas un programme. Pas un cursus. Une conversation entre vous et la part de vous qui attend depuis longtemps qu’on l’interroge.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                L’application pour iPhone : Saison un gratuite
              </a>
              <a
                href="https://a.co/d/04ofbHp4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Édition Kindle : commander sur Amazon
              </a>
              <a
                href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Livre broché : commander chez Chapters Indigo
              </a>
              <a
                href="https://books2read.com/u/mBWDNA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light inline-flex items-center gap-3 w-fit"
              >
                Livre numérique chez Apple, Kobo, B&amp;N et ailleurs
              </a>
              <p className="font-serif italic text-caption text-night/70 mt-3 max-w-md">
                Ce livre est disponible en anglais.
              </p>
              <p className="font-serif italic text-caption text-night/70 max-w-md">
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
          <div className="flex justify-center">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-2/3 rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/book-of-questions-cover.png"
                alt="The Book of Questions: The Socratic Year of the Soul, couverture"
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
            Maintenant sur iPhone
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            L’année, dans votre poche
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              L’année entière vit désormais dans une application. Chaque aube, la question du jour vous attend : sur votre écran d’accueil, sur votre écran verrouillé, avant que vous ouvriez quoi que ce soit d’autre. Lisez-la le matin. Laissez-la marcher avec vous. Le soir, écrivez. Une seule phrase honnête compte, et elle s’enregistre d’elle-même.
            </p>
            <p>
              Quand une saison se referme, le Miroir vous renvoie vos propres mots. Aucune IA ne lit votre journal. Aucun résumé n’est écrit par une machine. Tout ce que vous écrivez reste sur votre téléphone et dans votre propre iCloud, jamais sur un serveur à nous, parce que nous n’en avons aucun. Pas de compte, pas de statistiques, pas de publicité.
            </p>
            <p>
              La Saison un, trente et un jours et votre premier Miroir, est gratuite. Sans carte, sans compte à rebours. Le livre imprimé et l’application sont deux portes vers la même année.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://apps.apple.com/app/the-book-of-questions/id6799315120"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Télécharger dans l’App Store
            </a>
            <p className="font-serif italic text-caption text-bone/60 mt-4">
              Gratuit pour commencer &middot; Pour iPhone
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
            Le commencement
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Vous cherchez les bonnes réponses. Et si vous posiez les mauvaises questions ?
            </p>
            <p>
              Il y a en vous quelque chose qui connaît déjà le chemin pour traverser. Pas pour contourner. <em>Pour traverser.</em> Le problème n’est pas que les réponses vous manquent. Le problème, c’est que les questions que la plupart des gens posent, celles qu’offrent des livres, des enseignants et des programmes bien intentionnés, placent la destination hors de vous. Elles font de vous l’élève du savoir de quelqu’un d’autre.
            </p>
            <p>
              Socrate n’a jamais dit à personne quoi penser. Il questionnait jusqu’à ce que la vérité qui vivait déjà dans la personne n’ait plus d’autre choix que de remonter à la surface. Il appelait cela la maïeutique, l’art de la sage-femme. Il ne livrait pas des informations. Il rendait chaque personne à elle-même.
            </p>
            <p>
              <em>The Book of Questions</em> s’inscrit dans cette tradition. Une question par jour, pendant une année entière, répartie sur douze mois de territoire de l’âme. Une conversation entre vous et la part de vous qui attend depuis longtemps qu’on l’interroge.
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
            « La question qui vous effraie est presque toujours celle qui essaie de libérer quelque chose. »
          </p>
        </div>
      </section>

      {/* ============================================
          INSIDE THE BOOK
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">
            À l’intérieur du livre
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Une année, ce n’est pas long. À moins de la vivre honnêtement.
            </p>
            <p>
              Chaque mois porte son propre thème. Son propre territoire. Les douze mois ne suivent pas le calendrier mais l’âme, et traversent la quête, l’identité, le deuil, l’appartenance, le pouvoir, le pardon et le retour.
            </p>
            <p>
              Chaque jour, une question. Parfois, elle vous semblera simple. Vous écrirez quelques mots et la laisserez là. Un autre jour, une question du même genre ouvrira quelque chose que vous portez depuis vingt ans sans savoir que cela pesait encore.
            </p>
            <p>
              Il n’y a pas de bonne façon d’utiliser ce livre. Pas de note. Pas d’arrivée. Il n’y a que la pratique de vous asseoir et de vous laisser interroger.
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
              Le territoire d’une année
            </p>
            <h2 className="font-serif text-heading text-bone">
              Les douze mois
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {months.map((month) => (
              <div key={month.number} className="border border-bridge/50 rounded-sm p-6 hover:border-glow/30 transition-colors">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-glow/85 mb-2">
                  Mois {month.number}
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
            Pour qui
          </h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Nul besoin d’être en morceaux pour en avoir besoin. Il suffit d’être honnête.
          </p>
          <div className="space-y-5 font-body text-body text-night/70 leading-relaxed">
            <p>
              Ce livre a été écrit pour les personnes lasses qu’on leur dise à quoi leur guérison est censée ressembler.
            </p>
            <p>
              Pour la personne qui a lu tous les livres de développement personnel et sent encore que quelque chose d’essentiel reste intact. Pour les personnes qui soignent, accompagnent en thérapie ou guident, et qui ont besoin d’une pratique qui leur appartienne entièrement, et non à leur travail.
            </p>
            <p>
              Pour quiconque vit un deuil qui ne tient pas sagement dans une étape ou un calendrier. Pour la personne qui va bien en apparence et s’épuise quelque part, beaucoup plus profond.
            </p>
            <p>
              Pour la personne qui connaît les réponses qu’elle est censée donner, et soupçonne qu’il en existe de plus vraies, jamais dites à voix haute. Pour quiconque a survécu à quelque chose et cherche encore ce que cette survie lui demande.
            </p>
            <p>
              Pour la personne lasse de chercher, enfin prête à simplement écouter.
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
            Commencer
          </h2>
          <p className="font-body text-body-lg text-bone/70 mb-10">
            L’année vous attend.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://a.co/d/04ofbHp4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Édition Kindle : commander sur Amazon
            </a>
            <a
              href="https://www.indigo.ca/products/the-book-of-questions-the-socratic-year-of-the-soul-1?variant=46804502675666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              Livre broché : commander chez Chapters Indigo
            </a>
            <a
              href="https://books2read.com/u/mBWDNA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night"
            >
              Livre numérique chez Apple, Kobo, B&amp;N et ailleurs
            </a>
            <p className="font-serif italic text-caption text-bone/70 mt-4 max-w-md">
              Pas sur les rayons de votre librairie ? Demandez-lui de le commander. Elle peut se le procurer par IngramSpark.
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
            Échos de lecture
          </h2>
          <p className="font-serif italic text-caption text-night/70 mb-12 text-center">
            Avis traduits de l’anglais.
          </p>

          <div className="space-y-8 max-w-3xl mx-auto">
            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « Je n’avais jamais vécu une telle ouverture avec un livre. Jamais. Et je n’en suis qu’à la première question. Ce livre invite à sentir les mots avec le corps plutôt qu’à les aborder par le mental, et il est écrit de manière à rendre cela possible. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                J.S.
              </footer>
            </blockquote>

            <blockquote className="bg-white/40 p-8 rounded-sm">
              <p className="font-serif italic text-body-lg text-night leading-relaxed mb-4">
                « &hellip; ce livre est un outil précieux pour suivre vos progrès. Il aide à rester responsable de soi et à continuer d’avancer pour prendre la direction que l’on veut. »
              </p>
              <footer className="font-display text-caption text-night/75 tracking-wide">
                Avis sur Amazon
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
              Lire tous les avis sur Amazon &rarr;
            </a>
          </p>
        </div>
      </section>

      <MoreBooks current="/book-of-questions" locale="fr" />
      <NewsletterSignup locale="fr" />
    </>
  )
}
