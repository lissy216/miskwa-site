import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  alternates: alternates('fr', '/wholesale'),
  title: 'Vente en gros pour les librairies et commerces',
  description:
    'Prix de gros sur les livres de Miskwa Kimiwan pour les librairies, centres de mieux-être, personnes qui pratiquent la guérison, thérapeutes et lieux communautaires. Remise de 55 pour cent sur le prix de vente, devis établi pour chaque commande.',
}

const books = [
  { title: 'The Signal', subtitle: 'Why Life and People Keep Happening to You', retail: 22.99, wholesale: 10.35 },
  { title: 'Red Rain', subtitle: 'A Soul Shattered', retail: 19.99, wholesale: 9.0 },
  { title: 'The Book of Questions', subtitle: 'The Socratic Year of the Soul', retail: 24.99, wholesale: 11.25 },
]

const fmt = (n: number) => `$${n.toFixed(2)}`

// Pre-filled mailto template for the wholesale inquiry button. Opens the
// visitor's default mail client with subject and body ready to fill in.
// The subject stays in English so it matches the English inquiries in the inbox.
const mailtoBody = `Bonjour Miskwa,

Je souhaite me renseigner sur les commandes en gros. Merci de m'envoyer un devis pour ce qui suit.

Nom de la personne-ressource :
Entreprise ou organisme :
Courriel :
Téléphone (facultatif) :

Livres et quantités :
    The Signal :
    Red Rain :
    The Book of Questions :

Adresse de livraison :

Délai (pour quand) :

Remarques :

Merci.`

const mailtoUrl = `mailto:miskwa@miskwakimiwan.com?subject=${encodeURIComponent('Wholesale inquiry')}&body=${encodeURIComponent(mailtoBody)}`

export default function Wholesale() {
  return (
    <>
      {/* ============================================
          HERO
          ============================================ */}
      <section className="mood-shadow py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-6">
            Pour les librairies et les lieux communautaires
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-bone mb-6">
            Vente en gros
          </h1>
          <div className="divider-warm mx-auto mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Pour les librairies, les centres de mieux-être, les personnes qui pratiquent la
            guérison, les thérapeutes et les lieux communautaires qui souhaitent proposer ces
            livres dans leurs boutiques ou les offrir à leur clientèle et à leurs communautés.
          </p>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">Comment ça fonctionne</h2>
          <div className="space-y-5 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Les prix de gros suivent la remise commerciale standard d&rsquo;Ingram, soit
              55 pour cent sur le prix de vente. Les livres sont fournis sous forme
              d&rsquo;exemplaires d&rsquo;auteur Amazon KDP ou par IngramSpark, et expédiés
              directement à votre adresse.
            </p>
            <p>
              Un minimum de cinq exemplaires par commande est préférable, dans n&rsquo;importe
              quelle combinaison des trois titres. Les frais d&rsquo;expédition sont calculés
              pour chaque commande selon la destination et la quantité, et facturés en plus
              du prix de gros. Les commandes plus importantes peuvent bénéficier d&rsquo;une
              remise supplémentaire, sur devis.
            </p>
            <p>
              Dès réception de votre demande, nous confirmerons la disponibilité, vous
              indiquerons le total final avec l&rsquo;expédition et organiserons le paiement
              par facture envoyée par courriel ou par virement électronique (e-transfer). Les
              livres partent dès que le paiement est reçu.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING TABLE
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-3">Tarifs</h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Par exemplaire, hors expédition. Tous les prix sont en dollars canadiens (CAD).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-night/20">
                  <th className="text-left py-4 pr-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Titre
                  </th>
                  <th className="text-right py-4 px-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Prix de vente
                  </th>
                  <th className="text-right py-4 pl-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Prix de gros
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((b) => (
                  <tr key={b.title} className="border-b border-night/10">
                    <td className="py-5 pr-4">
                      <p className="font-serif text-body-lg text-night">{b.title}</p>
                      <p className="font-serif italic text-body text-night/75">{b.subtitle}</p>
                    </td>
                    <td className="py-5 px-4 text-right font-body text-body text-night/75">
                      {fmt(b.retail)}
                    </td>
                    <td className="py-5 pl-4 text-right font-body text-body-lg text-night font-semibold">
                      {fmt(b.wholesale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-serif italic text-body text-night/75">
            Les prix reflètent la remise commerciale standard de 55 pour cent sur le prix de
            vente. L&rsquo;expédition et la manutention font l&rsquo;objet d&rsquo;un devis
            distinct pour chaque commande.
          </p>
        </div>
      </section>

      {/* ============================================
          INQUIRY (mailto, no backend, opens your email app)
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Demander un devis
          </p>
          <h2 className="font-serif text-heading text-bone mb-4">Envoyez votre demande</h2>
          <div className="divider-warm mx-auto mb-10" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Le bouton ci-dessous ouvre votre application de courriel avec un message prêt à
            remplir. Ajoutez vos coordonnées et envoyez. Nous répondons avec un devis
            incluant l&rsquo;expédition sous quelques jours ouvrables.
          </p>
          <a href={mailtoUrl} className="btn-primary inline-flex items-center gap-3">
            Envoyer votre demande de vente en gros
          </a>
          <p className="font-serif italic text-caption text-bone/70 mt-6">
            Ou écrivez directement à <a href="mailto:miskwa@miskwakimiwan.com?subject=Wholesale%20inquiry" className="text-glow hover:text-sun underline decoration-glow/40 underline-offset-4">miskwa@miskwakimiwan.com</a>.
          </p>
        </div>
      </section>

      {/* ============================================
          BACK LINKS
          ============================================ */}
      <section className="bg-night py-16">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-bone/60 mb-6">
            Découvrir les livres
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fr/the-signal" className="btn-primary">The Signal</Link>
            <Link href="/fr/red-rain" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">Red Rain</Link>
            <Link href="/fr/book-of-questions" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">The Book of Questions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
