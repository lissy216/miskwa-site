import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung für die App The Book of Questions und MiskwaKimiwan.com. Ihr Tagebuch bleibt auf Ihrem Gerät: keine Konten, keine Analyse, kein Tracking, nichts wird erhoben.',
  alternates: alternates('de', '/privacy'),
}

const EFFECTIVE_DATE = '20. November 2026'

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
            Datenschutzerklärung
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-night mb-4">
            Ihr Tagebuch gehört Ihnen.
          </h1>
          <p className="font-body text-body text-night/40 mb-2">
            Gültig ab: {EFFECTIVE_DATE}
          </p>
          <p className="font-body text-body text-night/40 mb-2">
            Dies ist eine Übersetzung aus Gefälligkeit. Maßgeblich ist die{' '}
            <Link href="/privacy" className="underline">
              englische Fassung
            </Link>
            .
          </p>
          <p className="font-body text-body text-night/40">
            Geltungsbereich: The Book of Questions: The Socratic Year of the Soul
            (iOS-App) und diese Website. Herausgegeben von The 8th Fire, Inc., einer
            Gesellschaft aus Ontario, Kanada. Verfasst von Miskwa Kimiwan.
          </p>
          <div className="divider-cool my-8" />

          <H2>Was diese Erklärung abdeckt</H2>
          <P>
            Zwei Dinge, und sie funktionieren unterschiedlich. Die App selbst, die auf
            Ihrem Gerät läuft und uns nichts sendet. Und diese Website, auf der Sie mit
            einer E-Mail an uns das teilen, was Sie senden möchten, und auf der Ella Rae,
            der KI-Chatbot der Website, Fragen zu den Büchern beantwortet. Der größte Teil
            dieser Erklärung betrifft die App. Die Abschnitte <em>Ella Rae</em> und{' '}
            <em>Wenn Sie uns kontaktieren</em> betreffen die Website.
          </P>

          <H2>Die Kurzfassung</H2>
          <P>
            Alles, was Sie in der App schreiben, wird auf Ihrem Gerät und in Ihrer eigenen
            iCloud gespeichert. Die App hat keine Konten, keine Analyse, keine Werbung und
            keinen Tracking-Code von Dritten. Wir erhalten Ihre Tagebucheinträge nicht. Wir
            könnten sie nicht lesen, selbst wenn wir wollten, denn sie erreichen uns nie.
          </P>

          <H2>Was die App speichert, und wo</H2>
          <P>
            Ihre Tagebucheinträge, Mirror-Reflexionen, Erinnerungseinstellungen, die
            Einstellung der App-Sperre, Ihr Startdatum und Ihre Schreibserie werden im
            privaten Speicher der App auf Ihrem Gerät gesichert. Mirror-Reflexionen und
            Staffelrückblicke entstehen vollständig auf Ihrem Gerät aus Ihren eigenen
            Worten: kein Netzwerkaufruf, kein Analysedienst, keine KI.
          </P>
          <P>
            Wenn Sie die App löschen, werden diese Daten von Ihrem Gerät entfernt. Kopien,
            die Sie selbst angelegt haben (siehe unten), bleiben davon unberührt und unter
            Ihrer Kontrolle.
          </P>

          <H2>Was die App nicht erhebt</H2>
          <P>
            Zum oben genannten Gültigkeitsdatum enthält die App kein Analyse-SDK, kein
            Absturzbericht-SDK, kein Werbe-SDK und keinerlei Tracking-Code von Dritten. Sie
            fragt nicht nach Ihrem Namen, Ihrer E-Mail-Adresse, Ihrem Standort, Ihren
            Kontakten, Ihren Fotos oder Ihren Gerätekennungen. Es gibt kein Konto, das
            angelegt werden muss, und keine Anmeldung. Ihr Datenschutzetikett im App Store
            lautet „Keine Daten erfasst“, weil die App genau so gebaut ist.
          </P>
          <P>
            Wir verkaufen keine personenbezogenen Daten und geben sie nicht zu
            Marketingzwecken an Dritte weiter. Ihr Geschriebenes wird nie verwendet, um ein
            System künstlicher Intelligenz zu trainieren oder zu verbessern, weder unseres
            noch das von irgendjemand anderem. Das wäre auch gar nicht möglich, denn es
            verlässt nie Ihr Gerät und Ihre eigene iCloud.
          </P>
          <P>
            Sollte sich daran je etwas ändern, wird diese Erklärung aktualisiert, bevor die
            Änderung ausgeliefert wird, und die App wird Sie darüber informieren.
          </P>

          <H2>Backups: Ihre Daten, Ihr Speicher</H2>
          <P>Die App schützt Ihr Tagebuch auf zwei Wegen, und keiner davon berührt einen Server von uns:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Eine Kopie in Ihrer eigenen iCloud.</strong>{' '}
              Die App legt eine Sicherungskopie Ihres Tagebuchs in Ihrem privaten
              iCloud-Speicher ab, dem Speicherplatz, der zu Ihrem Apple Account gehört.
              Diese Kopie liegt in Ihrem Apple Account, nicht auf einem Server von uns. Wir
              haben keine Schlüssel dazu und keinen Zugang. Wenn Sie überhaupt keine
              iCloud-Kopie möchten, können Sie den iCloud-Zugriff der App in den
              iOS-Einstellungen ausschalten (Ihr Name → iCloud).
            </LI>
            <LI>
              <strong className="text-night/80">Das eigene Backup Ihres iPhones.</strong>{' '}
              Wie bei den meisten Apps ist der Gerätespeicher des Tagebuchs auch in Ihrem
              normalen iPhone-Backup enthalten, unter Ihrem eigenen Apple Account.
            </LI>
          </ul>
          <P>
            Gut zu wissen, weil die meisten Apps es Ihnen nicht sagen: Mit Apples
            Standard-Datenschutz (Standard Data Protection, die Voreinstellung bei jedem
            Apple Account) werden iCloud-Daten bei der Übertragung und auf Apples Servern
            verschlüsselt, aber Apple hält die Schlüssel. Wenn Sie Ihr Tagebuch
            Ende-zu-Ende-verschlüsselt haben möchten, sodass nur Ihre vertrauenswürdigen
            Geräte es lesen können, aktivieren Sie in Ihren iCloud-Einstellungen den
            Erweiterten Datenschutz (Advanced Data Protection). Wir haben in keinem Fall
            einen Vorteil davon. Sie sollten einfach wissen, dass es diese Option gibt.
          </P>
          <P>
            Sie können außerdem jederzeit eine vollständige Sicherungsdatei Ihres Tagebuchs
            speichern und sie aufbewahren, wo Sie möchten. Wohin diese Datei geht,
            entscheiden allein Sie.
          </P>

          <H2>Wie Ihr Tagebuch auf dem Gerät geschützt ist</H2>
          <P>
            Unter iOS werden Dateien im privaten Speicher einer App vom Betriebssystem im
            Ruhezustand verschlüsselt, gebunden an den Code Ihres Geräts. Dieser Schutz ist
            echt, und er leistet hier den größten Teil der Arbeit. Die ehrliche
            Einschränkung: Er setzt voraus, dass Sie einen Code eingerichtet haben. Ein
            iPhone ohne Code, oder eines, das entsperrt jemand anderem in die Hand gegeben
            wird, ist das eigentliche Risiko für ein Tagebuch. Nicht wir, und nicht Apple.
          </P>

          <H2>App-Sperre</H2>
          <P>
            Sie können festlegen, dass zum Öffnen der App Face ID, Touch ID oder der Code
            Ihres Geräts nötig ist. Diese Prüfung übernimmt das Betriebssystem Ihres
            Geräts. Die App sieht, speichert oder übermittelt Ihre biometrischen Daten oder
            Ihren Code nie. Die App-Sperre ist ein Tor vor dem Bildschirm. Sie ist nicht
            das, was Ihr Tagebuch verschlüsselt, und das mit Absicht: So können eine
            fehlgeschlagene Face ID, ein defekter Sensor oder eine vergessene Einstellung
            Sie nie Ihr Geschriebenes kosten.
          </P>

          <H2>Erinnerungen</H2>
          <P>
            Tägliche Erinnerungen sind lokale Mitteilungen, die iOS auf Ihrem Gerät plant.
            Kein Server ist beteiligt, und nichts verlässt Ihr Telefon. Die App fragt nur
            nach zwei Berechtigungen, Mitteilungen und Face ID, und Sie können beide
            jederzeit in den iOS-Einstellungen widerrufen.
          </P>

          <H2>Export und Teilen</H2>
          <P>
            Der Export erstellt auf Ihrem Gerät eine Textdatei, ein PDF oder eine
            Sicherungsdatei Ihrer Einträge und öffnet dann das Teilen-Menü Ihres Telefons.
            Ob eine exportierte Datei irgendwohin geht, entscheiden Sie. Die App sendet von
            sich aus nichts.
          </P>

          <H2>Käufe</H2>
          <P>
            Season One der App ist kostenlos. Das ganze Jahr wird als Jahresabonnement oder
            als einmaliger Kauf angeboten, vollständig von Apple über den App Store
            verkauft und abgewickelt, zu den Bedingungen von Apple. Wir sehen oder
            speichern nie Ihre Zahlungsdaten, Ihre Karte oder Ihre Rechnungsadresse. Apple
            stellt uns Verkaufsberichte zur Verfügung, die Summen zeigen, keine Kundinnen
            und Kunden. So wird Ihr Kauf überprüft: Die App fragt auf Ihrem Gerät bei
            Apples StoreKit nach, ob dieser Apple Account den Kauf besitzt. Kein
            Prüfdienst von Dritten ist beteiligt, und nichts wird an uns gesendet. Die
            Antwort wird als kleine Markierung auf Ihrem Gerät gespeichert, damit die App
            offline funktioniert. Diese Markierung bleibt auf Ihrem Gerät und ist nicht in
            Ihren Tagebuch-Backups enthalten. Sie können ein Abonnement in den
            Einstellungen Ihres Apple Accounts ansehen, ändern oder kündigen. Wir können
            das nicht für Sie tun, und wir können nicht sehen, ob Sie es getan haben.
          </P>

          <h2 id="ella-rae" className="font-serif text-heading text-night mt-12 mb-4 scroll-mt-28">
            Ella Rae, der Chatbot der Website
          </h2>
          <P>
            Ella Rae ist ein KI-Chatbot, kein Mensch. Wenn Sie Ella Rae schreiben, werden
            Ihre Nachrichten in diesem Gespräch über das AI Gateway von Vercel an Anthropic
            gesendet, dessen Modell Claude die Antworten schreibt. Diese Anbieter
            verarbeiten den Text, um Ihnen zu antworten, nach ihren eigenen
            Datenschutzerklärungen, und können ihn für begrenzte Zeit zur Sicherheits- und
            Missbrauchskontrolle aufbewahren. Wir speichern Ihre Gespräche nicht, wir lesen
            sie nicht, und sie verschwinden von Ihrem Bildschirm, wenn Sie die Seite
            schließen oder neu laden. Bitte teilen Sie nichts, von dem Sie nicht möchten,
            dass ein Dienstleister es verarbeitet.
          </P>
          <P>
            Wenn Sie Ella Rae bitten, Ihnen Bescheid zu geben, sobald ein Buch erscheint,
            und das Kästchen für die Einwilligung ankreuzen, wird die E-Mail-Adresse, die
            Sie eingeben, an unser Postfach gesendet. Wir verwenden sie einmal, für diese
            Veröffentlichung, und löschen sie dann. Sie wird keiner Mailingliste
            hinzugefügt.
          </P>

          <H2>Wenn Sie uns kontaktieren</H2>
          <P>
            E-Mail ist der einzige Weg, auf dem wir Informationen über Sie erhalten, und
            nur, weil Sie sich entschieden haben, sie zu senden. Nachrichten an{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>{' '}
            enthalten Ihre E-Mail-Adresse und alles, was Sie schreiben. Wir bewahren sie
            bis zu 24 Monate auf und löschen sie dann. Wir verwenden sie, um Ihnen zu
            antworten. Wir fügen Sie aufgrund einer Support-Nachricht keiner Mailingliste
            hinzu, wir verkaufen sie nicht und wir geben sie nicht weiter. Fragen Sie, und
            wir sagen Ihnen, was wir gespeichert haben, senden Ihnen eine Kopie, berichtigen
            es oder löschen es. Wir antworten innerhalb von 30 Tagen.
          </P>

          <H2>Aufbewahren und Löschen Ihrer Daten</H2>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">In der App:</strong> Jeder Eintrag lässt
              sich in der App leeren. Wenn Sie die App löschen, wird alles entfernt, was
              sie auf Ihrem Gerät gespeichert hat.
            </LI>
            <LI>
              <strong className="text-night/80">In iCloud:</strong> Öffnen Sie die
              iOS-Einstellungen → Ihr Name → iCloud → Accountspeicher verwalten, suchen
              Sie The Book of Questions und löschen Sie dessen Daten.
            </LI>
            <LI>
              <strong className="text-night/80">Dateien, die Sie gespeichert haben:</strong>{' '}
              Exportierte Dateien und Sicherungsdateien liegen dort, wo Sie sie abgelegt
              haben. Wir haben keinen Zugriff darauf und können sie nicht für Sie löschen.
            </LI>
            <LI>
              <strong className="text-night/80">Nachrichten, die Sie uns gesendet haben:</strong>{' '}
              siehe oben. Fragen Sie, und sie sind gelöscht.
            </LI>
          </ul>
          <P>Wir bewahren nichts anderes auf, weil wir nichts anderes haben.</P>

          <H2>Ihre Rechte</H2>
          <P>
            Datenschutzgesetze geben Ihnen das Recht auf Auskunft, Berichtigung, Löschung
            und Übertragung der personenbezogenen Daten, die eine Organisation über Sie
            gespeichert hat. Das kanadische Bundesgesetz PIPEDA (Personal Information
            Protection and Electronic Documents Act), das Gesetz 25 der Provinz Québec
            (Loi 25), die Datenschutz-Grundverordnung (DSGVO) der EU und die UK GDPR des
            Vereinigten Königreichs sowie der CCPA/CPRA Kaliforniens folgen alle diesen
            Grundsätzen. Für die App liegt jedes dieser Rechte bereits in Ihren Händen: Ihr
            Tagebuch ist auf Ihrem Gerät, der Export gibt Ihnen jederzeit eine
            vollständige Kopie, und das Löschen nehmen allein Sie vor. Auf unserer Seite
            gibt es nichts, dessen Löschung Sie beantragen müssten. Für E-Mail-Verkehr
            sind es gewöhnliche Rechte, und wir respektieren sie. In Québec ist die
            Geschäftsführung (CEO) von The 8th Fire, Inc. für den Schutz personenbezogener
            Daten verantwortlich. Wenn Sie sich in Kanada befinden und mit der Bearbeitung
            einer Anfrage nicht zufrieden sind, können Sie sich beim Office of the Privacy
            Commissioner of Canada beschweren, in Québec bei der Commission d’accès à
            l’information.
          </P>

          <H2>Dritte</H2>
          <P>Dies ist die vollständige Liste zum oben genannten Gültigkeitsdatum:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Apple</strong> stellt Gerätespeicher,
              iCloud, Mitteilungen, Face ID und die Zahlungsabwicklung bereit, gemäß der{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-bridge underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzrichtlinie von Apple
              </a>
              .
            </LI>
            <LI>
              <strong className="text-night/80">Zoho Mail</strong> betreibt unser
              E-Mail-Postfach, gemäß der eigenen Datenschutzerklärung.
            </LI>
            <LI>
              <strong className="text-night/80">Vercel</strong> hostet diese Website und
              leitet die Nachrichten an Ella Rae über das eigene AI Gateway weiter, gemäß
              der eigenen Datenschutzerklärung.
            </LI>
            <LI>
              <strong className="text-night/80">Anthropic</strong> stellt das KI-Modell
              hinter Ella Rae bereit, gemäß der eigenen Datenschutzerklärung.
            </LI>
            <LI>
              <strong className="text-night/80">Resend</strong> stellt Nachrichten aus dem
              Kontaktformular der Website und Anmeldungen für Erscheinungstermine in unser
              Postfach zu, gemäß der eigenen Datenschutzerklärung.
            </LI>
          </ul>
          <P>
            Wenn Sie auf den Link zum gedruckten Buch tippen, öffnet Ihr Browser die
            Website einer Buchhandlung, für die ab diesem Punkt deren eigene
            Datenschutzerklärung gilt. Wir erhalten über diesen Link keine Vermittlungsgebühr
            und keine Daten zurück. Er ist da, weil es das Buch gibt. Kein Analyseanbieter,
            kein Werbenetzwerk und kein Datenhändler ist an der App beteiligt.
          </P>

          <H2>Kinder</H2>
          <P>
            Die App richtet sich nicht an Kinder unter 13 Jahren und erhebt von niemandem
            Informationen, in keinem Alter.
          </P>

          <H2>Ein Hinweis dazu, was diese App ist</H2>
          <P>
            The Book of Questions bietet reflektierendes Tagebuchschreiben zur
            Selbsterforschung. Es ist keine medizinische, psychologische oder
            therapeutische Beratung und kein Ersatz für die Begleitung durch qualifizierte
            Fachleute. Wenn Sie diese Art von Unterstützung brauchen, suchen Sie sie bitte
            bei jemandem, der dafür qualifiziert ist.
          </P>

          <H2>Änderungen dieser Erklärung</H2>
          <P>
            Jede Änderung wird hier mit einem neuen Gültigkeitsdatum veröffentlicht, und
            frühere Fassungen bleiben verfügbar, damit Sie sehen können, was wann
            versprochen wurde. Ist eine Änderung wesentlich, betrifft sie also, was erhoben
            wird, wohin Ihr Geschriebenes geht oder wer darauf zugreifen kann, wird die App
            Sie informieren, bevor die Änderung wirksam wird. Keine Änderung wird je
            rückwirkend gelten, um den Schutz dessen zu verringern, was Sie bereits
            geschrieben haben.
          </P>

          <H2>Kontakt</H2>
          <P>
            Fragen zum Datenschutz und alles andere:{' '}
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
