import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Biographie',
  description: 'Miskwa Kimiwan écrit, guérit et enseigne la guérison spirituelle et la médecine énergétique. Une œuvre porteuse de mémoire intergénérationnelle, qui jette un pont entre le trauma, la présence et le monde invisible.',
  alternates: alternates('fr', '/about'),
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
              Biographie
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-8">
              La personne qui guide a aussi saigné.
            </h1>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              Quelque chose s’est brisé tôt. Un lit d’hôpital embrasé comme une fournaise. La peau qui se fend comme l’écorce. Une histoire familiale lourde de silence, et de ces blessures qui voyagent dans les lignées sans que personne ne les nomme.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed">
              Ce qui a suivi n’a pas été une ligne droite vers la guérison. Ce furent des années passées dans l’obscurité, à apprendre que l’obscurité n’est pas l’ennemie. Que le corps sait déjà ce dont l’esprit débat encore. Qu’aucun chemin spirituel tout fait ne correspondait à ce qui se passait vraiment, et que la seule option honnête était de bâtir quelque chose avec la matière brute de l’expérience vécue.
            </p>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, un pont entre les mondes"
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
            Ce qui en est né
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Miskwa Kimiwan écrit, guérit et enseigne la guérison spirituelle et la médecine énergétique. Une œuvre porteuse de mémoire et de médecine intergénérationnelles, qui jette un pont entre le trauma, la présence et le monde invisible.
            </p>
            <p>
              L’œuvre publiée a commencé avec <em>Red Rain: A Soul Shattered</em>, des mémoires que les lecteurs décrivent non comme un livre qu’on lit, mais comme un livre qui vous lit. Puis est venu <em>The Book of Questions: The Socratic Year of the Soul</em>, une question pour chaque jour d’une année, sur douze mois de territoire de l’âme. <em>The Signal</em> s’est tourné vers les motifs qui reviennent dans une vie sous d’autres noms. <em>The Re-Membering</em> est paru à l’équinoxe d’automne 2026, un court livre pour la part de vous qui soupçonne avoir su quelque chose autrefois.
              {/* After December 21, 2026, change "paraît au" to "est paru au". The
                  English and Spanish pages have the same line. */}{' '}
              <em>Forgiveness as Freedom</em> paraît au solstice d’hiver.
            </p>
            <p>
              Tous partent du même principe : la personne qui tient le livre porte déjà ce dont elle a besoin. Le travail n’est jamais d’installer quelque chose de nouveau. Le travail est de rester avec ce qui est déjà là assez longtemps pour que cela soit entendu.
            </p>
          </div>
          <p className="mt-10 font-display text-xs tracking-[0.2em] uppercase text-glow/85">
            Membre de{' '}
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
            «&nbsp;La blessure est l’endroit par où la lumière entre en vous.&nbsp;»
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
            Philosophie
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Ici, pas de maîtres
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              La plupart des pratiques de guérison et de spiritualité reposent sur la performance. Jouer le bien-être. Jouer la transformation. Jouer la guérison accomplie. Monter sur une scène et dire aux gens que vous avez la réponse. Bâtir un piédestal et les laisser vénérer ce qu’ils croient que vous savez.
            </p>
            <p>
              Ce modèle produit de la dépendance, pas de la souveraineté. Il apprend aux gens à chercher hors d’eux ce qui vit en eux depuis toujours. Et il produit des praticiens mal formés, qui promettent trop, incapables d’accueillir ce qui franchit vraiment la porte quand la performance tombe.
            </p>
            <p>
              Ce travail part d’une autre prémisse. La personne qui guide a fait le travail, le fait encore, et ne revendique aucune position achevée. Personne d’autre n’est nécessaire pour revenir à vous-même. Ce qui est offert ici est un espace assez honnête et assez sûr pour que vous cessiez de jouer, que vous regardiez en face ce que vous portez, que vous le sentiez dans le corps, et que vous découvriez que vous êtes plus que ce qui vous est arrivé.
            </p>
            <p className="text-bone/70">
              La rédemption n’est pas un événement unique. C’est une pratique quotidienne : choisir de devenir plus que ce qui est arrivé. Tout ce qui est écrit, enseigné et offert ici existe pour faire place à cette vérité.
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
            Qui trouve ce travail
          </h2>
          <div className="space-y-6 font-body text-body-lg text-night/75 leading-relaxed">
            <p>
              Des personnes qui portent un poids que personne ne voit. Qui ont été blessées et ont blessé à leur tour. Qui en ont fini de faire semblant et sont prêtes pour un espace où le travail est réel, où la rédemption est possible, et où la personne qui guide a aussi saigné.
            </p>
            <p>
              Des personnes qui ont traversé l’univers classique de la guérison et du développement personnel, et l’ont trouvé creux. Les approches «&nbsp;amour et lumière&nbsp;» les ont laissées invisibles. La pensée positive sonnait comme un rôle. Ce dont elles ont besoin, c’est de quelque chose qui ne recule pas devant l’obscurité et ne les presse pas vers une résolution.
            </p>
            <p>
              Des thérapeutes et des praticiens qui rencontrent ce travail et y reconnaissent de quoi combler un manque dans leur propre pratique clinique. Des personnes qui soignent, lasses de la mise en scène de cette industrie, et qui veulent se former dans un espace où l’honnêteté passe en premier.
            </p>
            <p>
              Si vous cherchez une solution rapide, ce n’est pas le bon endroit. Si vous voulez un gourou à suivre, vous n’en trouverez pas ici. Mais si vous acceptez de rester avec ce que vous portez et de le laisser vous apprendre quelque chose, il y a de la place auprès du feu.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/fr/red-rain" className="btn-light">
              Commencer par Red Rain
            </Link>
            <Link href="/fr/bookstore" className="btn-light">
              Parcourir la Librairie
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
            Prises de parole et lectures
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Une part de ce travail a besoin d’une salle
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Un livre se lit d’ordinaire seul. Une part de ce que portent ces livres résonne autrement quand elle est dite à voix haute, dans une salle pleine de gens venus l’entendre. Miskwa Kimiwan accepte les invitations à prendre la parole et à lire, en personne et en ligne.
            </p>
            <p>
              Ne vous attendez pas à un spectacle d’où l’on distribue des réponses. Une intervention ici ressemble plutôt à une veillée autour d’un feu avec des gens que vous venez de rencontrer : une histoire, un silence qu’on laisse durer, et la question qui se tient sous chacun des livres. Que faut-il pour devenir plus que ce qui vous est arrivé ? On repart souvent en la portant encore.
            </p>
          </div>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Conférences et interventions</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Congrès, rassemblements et journées professionnelles. Le trauma et ce que le corps garde, la mémoire intergénérationnelle, la présence, et le lent travail de revenir à soi.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Lectures</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Tirées de n’importe lequel des livres, avec ensuite un temps pour les questions. Librairies, bibliothèques, festivals et lancements.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Rencontres</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Clubs de lecture, salles de classe, tables rondes, podcasts et entretiens. Les groupes qui lisent ensemble l’un des livres sont particulièrement bienvenus.
              </dd>
            </div>
          </dl>

          <p className="mt-12 font-body text-body text-bone/70 leading-relaxed">
            Pour lancer une invitation, écrivez en précisant la date, le lieu, qui sera dans la salle et le temps disponible. Chaque demande est lue.
          </p>
          <div className="mt-8">
            <Link href="/fr/contact?topic=speaking" className="btn-primary">
              Envoyer une invitation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
