import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de l’application The Book of Questions et de MiskwaKimiwan.com. Votre journal reste sur votre appareil : pas de compte, pas d’analyse d’audience, pas de pistage, rien de collecté.',
  alternates: alternates('fr', '/privacy'),
}

const EFFECTIVE_DATE = '20 novembre 2026'

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-heading text-night mt-12 mb-4">{children}</h2>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-body text-night/75 leading-relaxed mb-4">{children}</p>
}

function LI({ children }: { children: React.ReactNode }) {
  return <li className="font-body text-body text-night/75 leading-relaxed mb-3">{children}</li>
}

export default function Privacy() {
  return (
    <>
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-bridge mb-6">
            Politique de confidentialité
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-night mb-4">
            Votre journal vous appartient.
          </h1>
          <p className="font-body text-body text-night/40 mb-2">
            Date d’entrée en vigueur : {EFFECTIVE_DATE}
          </p>
          <p className="font-body text-body text-night/40 mb-2">
            Ceci est une traduction de courtoisie. La{' '}
            <Link href="/privacy" className="underline">
              version anglaise
            </Link>{' '}
            fait foi.
          </p>
          <p className="font-body text-body text-night/40">
            Champ d’application : The Book of Questions: The Socratic Year of the Soul
            (application iOS) et ce site web. Publié par The 8th Fire, Inc., une société
            de l’Ontario, Canada. Une œuvre de Miskwa Kimiwan.
          </p>
          <div className="divider-cool my-8" />

          <H2>Ce que couvre cette politique</H2>
          <P>
            Deux choses, qui fonctionnent différemment. L’application elle-même, qui
            s’exécute sur votre appareil et ne nous envoie rien. Et ce site web, où nous
            écrire par courriel partage ce que vous choisissez d’envoyer, et où Ella Rae,
            le chatbot d’IA du site, répond aux questions sur les livres. L’essentiel de
            cette politique concerne l’application. Les sections intitulées{' '}
            <em>Ella Rae</em> et <em>Quand vous nous écrivez</em> couvrent le site web.
          </P>

          <H2>En bref</H2>
          <P>
            Tout ce que vous écrivez dans l’application est stocké sur votre appareil et
            dans votre propre iCloud. L’application n’a ni compte, ni analyse d’audience,
            ni publicité, ni code de pistage tiers. Nous ne recevons pas les entrées de
            votre journal. Nous ne pourrions pas les lire même si nous le voulions, parce
            qu’elles ne nous parviennent jamais.
          </P>

          <H2>Ce que l’application stocke, et où</H2>
          <P>
            Les entrées de votre journal, les réflexions Mirror, vos préférences de
            rappel, le réglage App Lock, la date de début et votre série d’écriture sont
            enregistrés dans le stockage privé de l’application, sur votre appareil. Les
            réflexions Mirror et les bilans de saison sont générés entièrement sur votre
            appareil, à partir de vos propres mots : aucun appel réseau, aucun service
            d’analyse, aucune IA.
          </P>
          <P>
            Supprimer l’application efface ces données de votre appareil. Les copies que
            vous avez faites vous-même, décrites plus bas, ne sont pas touchées et restent
            sous votre contrôle.
          </P>

          <H2>Ce que l’application ne collecte pas</H2>
          <P>
            À la date d’entrée en vigueur indiquée plus haut, l’application ne contient
            aucun SDK d’analyse d’audience, aucun SDK de rapport de plantage, aucun SDK
            publicitaire et aucun code de pistage tiers d’aucune sorte. Elle ne vous
            demande ni votre nom, ni votre adresse courriel, ni votre position, ni vos
            contacts, ni vos photos, ni les identifiants de votre appareil. Il n’y a aucun
            compte à créer et aucune connexion. Son étiquette de confidentialité sur
            l’App Store indique « Data Not Collected » (aucune donnée collectée), parce
            que c’est ainsi que l’application est construite.
          </P>
          <P>
            Nous ne vendons pas de renseignements personnels et nous ne les communiquons
            pas à des tiers à des fins de marketing. Vos écrits ne servent jamais à
            entraîner ni à améliorer un système d’intelligence artificielle, le nôtre ou
            celui de quiconque. Ils ne le pourraient pas, puisqu’ils ne quittent jamais
            votre appareil et votre propre iCloud.
          </P>
          <P>
            Si quoi que ce soit change un jour, cette politique sera mise à jour avant la
            sortie du changement, et l’application vous en informera.
          </P>

          <H2>Sauvegardes : vos données, votre stockage</H2>
          <P>L’application protège votre journal de deux façons, et aucune ne passe par un serveur à nous :</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Une copie dans votre propre iCloud.</strong>{' '}
              L’application conserve une copie de sauvegarde de votre journal dans votre
              stockage iCloud privé, l’espace rattaché à votre compte Apple. Cette copie
              se trouve dans votre compte Apple, et non sur un serveur à nous. Nous n’en
              détenons aucune clé et n’avons aucun moyen d’y accéder. Si vous préférez
              n’avoir aucune copie dans iCloud, vous pouvez désactiver l’accès de
              l’application à iCloud dans les Réglages d’iOS (votre nom → iCloud).
            </LI>
            <LI>
              <strong className="text-night/80">La sauvegarde de votre iPhone.</strong>{' '}
              Comme pour la plupart des applications, le stockage du journal sur
              l’appareil est aussi inclus dans la sauvegarde habituelle de votre iPhone,
              sous votre propre compte Apple.
            </LI>
          </ul>
          <P>
            Bon à savoir, parce que la plupart des applications ne vous le diront pas :
            avec la protection standard des données d’Apple (le réglage par défaut de tout
            compte Apple), les données iCloud sont chiffrées en transit et sur les
            serveurs d’Apple, mais c’est Apple qui détient les clés. Si vous voulez que
            votre journal soit chiffré de bout en bout, afin que seuls vos appareils de
            confiance puissent le lire, activez la protection avancée des données dans
            vos réglages iCloud. Nous n’y gagnons rien dans un cas comme dans l’autre :
            vous devriez simplement savoir que cette option existe.
          </P>
          <P>
            Vous pouvez aussi enregistrer un fichier de sauvegarde complet de votre
            journal quand vous le voulez, et le conserver où vous le voulez. L’endroit où
            va ce fichier relève entièrement de votre décision.
          </P>

          <H2>Comment votre journal est protégé sur l’appareil</H2>
          <P>
            Sur iOS, les fichiers situés dans le stockage privé d’une application sont
            chiffrés au repos par le système d’exploitation, en lien avec le code
            d’accès de votre appareil. Cette protection est réelle, et c’est elle qui
            fait l’essentiel du travail ici. La réserve honnête : elle suppose que vous
            ayez défini un code d’accès. Un iPhone sans code d’accès, ou remis
            déverrouillé à quelqu’un d’autre, est le vrai risque pour un journal. Pas
            nous, et pas Apple.
          </P>

          <H2>App Lock</H2>
          <P>
            Vous pouvez exiger Face ID, Touch ID ou le code d’accès de votre appareil pour
            ouvrir l’application. Cette vérification est effectuée par le système
            d’exploitation de votre appareil. L’application ne voit, ne stocke et ne
            transmet jamais vos données biométriques ni votre code d’accès. App Lock est
            une barrière à l’écran. Ce n’est pas lui qui chiffre votre journal, et c’est
            voulu : ainsi, un Face ID qui échoue, un capteur cassé ou un réglage oublié
            ne pourront jamais vous coûter vos écrits.
          </P>

          <H2>Rappels</H2>
          <P>
            Les rappels quotidiens sont des notifications locales, programmées sur votre
            appareil par iOS. Aucun serveur n’intervient et rien ne quitte votre
            téléphone. L’application ne demande jamais que deux autorisations,
            Notifications et Face ID, et vous pouvez retirer l’une comme l’autre à tout
            moment dans les Réglages d’iOS.
          </P>

          <H2>Exportation et partage</H2>
          <P>
            L’exportation crée un fichier texte, un PDF ou un fichier de sauvegarde de vos
            entrées sur votre appareil, puis ouvre la feuille de partage de votre
            téléphone. Qu’un fichier exporté aille quelque part ou non relève de votre
            choix. L’application n’envoie rien d’elle-même.
          </P>

          <H2>Achats</H2>
          <P>
            La première saison de l’application est gratuite. L’année complète est vendue sous
            forme d’abonnement annuel ou d’achat unique, vendu et traité entièrement par
            Apple sur l’App Store, selon les conditions d’Apple. Nous ne voyons ni ne
            stockons jamais vos informations de paiement, votre carte ou votre adresse de
            facturation. Apple nous fournit des rapports de ventes qui montrent des
            totaux, pas des clients. Comment votre achat est vérifié : l’application
            demande à StoreKit d’Apple, sur votre appareil, si ce compte Apple possède
            l’achat. Aucun service de vérification tiers n’intervient et rien ne nous est
            envoyé. La réponse est mémorisée sous la forme d’un petit indicateur sur votre
            appareil, pour que l’application fonctionne hors ligne. Cet indicateur reste
            sur votre appareil et n’est pas inclus dans les sauvegardes de votre journal.
            Vous pouvez consulter, modifier ou résilier un abonnement dans les réglages de
            votre compte Apple. Nous ne pouvons pas le faire à votre place, et nous ne
            pouvons pas voir que vous l’avez fait.
          </P>

          <h2 id="ella-rae" className="font-serif text-heading text-night mt-12 mb-4 scroll-mt-28">
            Ella Rae, le chatbot du site
          </h2>
          <P>
            Ella Rae est un chatbot d’IA, pas une personne. Quand vous écrivez à Ella Rae,
            les messages de cette conversation sont envoyés par l’AI Gateway de Vercel à
            Anthropic, dont le modèle Claude rédige les réponses. Ces entreprises traitent
            le texte pour vous répondre, selon leurs propres politiques de
            confidentialité, et peuvent le conserver pendant une durée limitée à des fins
            de sécurité et de surveillance des abus. Nous n’enregistrons pas vos
            conversations, nous ne les lisons pas, et elles disparaissent de votre écran
            quand vous fermez ou rechargez la page. Merci de ne rien partager que vous ne
            voudriez pas voir traité par un fournisseur de services.
          </P>
          <P>
            Si vous demandez à Ella Rae de vous prévenir de la sortie d’un livre et que
            vous cochez la case d’autorisation, l’adresse courriel que vous saisissez est
            envoyée à notre boîte de réception. Nous l’utilisons une seule fois, pour
            cette sortie, puis nous la supprimons. Elle n’est ajoutée à aucune liste de
            diffusion.
          </P>

          <H2>Quand vous nous écrivez</H2>
          <P>
            Le courriel est le seul endroit où nous recevons des informations à votre
            sujet, et uniquement parce que vous avez choisi de les envoyer. Les messages
            envoyés à{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>{' '}
            contiennent votre adresse courriel et tout ce que vous écrivez. Nous les
            conservons jusqu’à 24 mois, puis nous les supprimons. Nous nous en servons
            pour vous répondre. Nous ne vous inscrivons à aucune liste de diffusion à
            partir d’un message d’assistance, nous ne les vendons pas et nous ne les
            communiquons à personne. Demandez-le, et nous vous dirons ce que nous
            détenons, vous en enverrons une copie, le corrigerons ou le supprimerons. Nous
            répondons dans un délai de 30 jours.
          </P>

          <H2>Conservation et suppression de vos données</H2>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Dans l’application :</strong> n’importe
              quelle entrée peut être vidée dans l’application. Supprimer l’application
              efface tout ce qu’elle a stocké sur votre appareil.
            </LI>
            <LI>
              <strong className="text-night/80">Dans iCloud :</strong> ouvrez les Réglages
              d’iOS → votre nom → iCloud → gérer le stockage du compte, trouvez The Book of
              Questions et supprimez ses données.
            </LI>
            <LI>
              <strong className="text-night/80">Les fichiers que vous avez enregistrés :</strong>{' '}
              les fichiers exportés et de sauvegarde se trouvent là où vous les avez mis.
              Nous ne pouvons pas y accéder ni les supprimer à votre place.
            </LI>
            <LI>
              <strong className="text-night/80">Les messages que vous nous avez envoyés :</strong>{' '}
              voir plus haut. Demandez-le, et ils disparaissent.
            </LI>
          </ul>
          <P>Nous ne conservons rien d’autre, parce que nous n’avons rien d’autre.</P>

          <H2>Vos droits</H2>
          <P>
            Les lois sur la protection de la vie privée vous donnent le droit d’accéder
            aux renseignements personnels qu’une organisation détient à votre sujet, de
            les corriger, de les supprimer et de les exporter. La LPRPDE (PIPEDA) au
            Canada, la Loi 25 au Québec, le RGPD de l’UE et du Royaume-Uni, et la
            CCPA/CPRA en Californie vont toutes dans ce sens. Pour l’application, chacun
            de ces droits est déjà entre vos mains : votre journal est sur votre appareil,
            l’exportation vous en donne une copie complète à la demande, et la
            suppression ne dépend que de vous. Il n’y a rien de notre côté dont vous
            pourriez demander la suppression. Pour la correspondance par courriel, ce sont
            des droits ordinaires, et nous les respectons. Au Québec, la personne
            responsable de la protection des renseignements personnels est la personne
            qui occupe la direction générale (CEO) de The 8th Fire, Inc. Si vous êtes au
            Canada et que nous n’avons pas traité une demande à votre satisfaction,
            vous pouvez porter plainte auprès du Commissariat à la protection de la vie
            privée du Canada ; au Québec, auprès de la Commission d’accès à l’information.
          </P>

          <H2>Tiers</H2>
          <P>Voici la liste complète à la date d’entrée en vigueur indiquée plus haut :</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Apple</strong> fournit le stockage sur
              l’appareil, iCloud, les notifications, Face ID et le traitement des
              paiements, selon la{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-bridge underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité d’Apple
              </a>
              .
            </LI>
            <LI>
              <strong className="text-night/80">Zoho Mail</strong> héberge notre boîte de
              réception, selon sa propre politique de confidentialité.
            </LI>
            <LI>
              <strong className="text-night/80">Vercel</strong> héberge ce site web et
              achemine les messages d’Ella Rae par son AI Gateway, selon sa propre
              politique de confidentialité.
            </LI>
            <LI>
              <strong className="text-night/80">Anthropic</strong> fournit le modèle d’IA
              derrière Ella Rae, selon sa propre politique de confidentialité.
            </LI>
            <LI>
              <strong className="text-night/80">Resend</strong> achemine jusqu’à notre
              boîte de réception les messages du formulaire de contact du site et les
              inscriptions aux annonces de sortie, selon sa propre politique de
              confidentialité.
            </LI>
          </ul>
          <P>
            Toucher le lien vers le livre imprimé ouvre dans votre navigateur le site d’un
            libraire, qui fonctionne selon sa propre politique de confidentialité à partir
            de ce moment. Nous ne recevons aucune commission d’affiliation et aucune donnée
            en retour par ce lien. Il est là parce que le livre existe. Aucun fournisseur
            d’analyse d’audience, aucun réseau publicitaire et aucun courtier en données
            n’intervient dans l’application.
          </P>

          <H2>Enfants</H2>
          <P>
            L’application ne s’adresse pas aux enfants de moins de 13 ans et ne collecte
            aucune information auprès de qui que ce soit, à aucun âge.
          </P>

          <H2>Ce qu’est cette application</H2>
          <P>
            The Book of Questions propose une écriture de journal réflexive pour
            l’exploration de soi. Ce n’est pas un avis médical, psychologique ou
            thérapeutique, et cela ne remplace pas les soins d’un professionnel qualifié.
            Si vous avez besoin de ce type de soutien, adressez-vous à une personne
            qualifiée pour l’offrir.
          </P>

          <H2>Modifications de cette politique</H2>
          <P>
            Toute modification sera publiée ici avec une nouvelle date d’entrée en
            vigueur, et les versions précédentes resteront disponibles pour que vous
            puissiez voir ce qui a été promis, et quand. Si une modification est
            importante, c’est-à-dire si elle touche ce qui est collecté, l’endroit où vont
            vos écrits ou les personnes qui peuvent y accéder, l’application vous en
            informera avant son entrée en vigueur. Aucune modification ne s’appliquera
            jamais rétroactivement pour réduire la confidentialité de ce que vous avez
            déjà écrit.
          </P>

          <H2>Contact</H2>
          <P>
            Questions de confidentialité et tout le reste :{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>
            .
          </P>
        </div>
      </section>
    </>
  )
}
