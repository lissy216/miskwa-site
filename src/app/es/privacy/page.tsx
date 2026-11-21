import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de privacidad de la app The Book of Questions y de MiskwaKimiwan.com. Tu diario se queda en tu dispositivo: sin cuentas, sin analíticas, sin rastreo, sin recopilar nada.',
  alternates: alternates('es', '/privacy'),
}

const EFFECTIVE_DATE = '20 de noviembre de 2026'

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
            Política de privacidad
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-night mb-4">
            Tu diario es tuyo.
          </h1>
          <p className="font-body text-body text-night/40 mb-2">
            Fecha de entrada en vigor: {EFFECTIVE_DATE}
          </p>
          <p className="font-body text-body text-night/40 mb-2">
            Esta es una traducción de cortesía. La{' '}
            <Link href="/privacy" className="underline">
              versión en inglés
            </Link>{' '}
            es la oficial.
          </p>
          <p className="font-body text-body text-night/40">
            Abarca: The Book of Questions: The Socratic Year of the Soul (app para iOS)
            y este sitio web. Publicado por The 8th Fire, Inc., una sociedad de Ontario,
            Canadá. Obra de Miskwa Kimiwan.
          </p>
          <div className="divider-cool my-8" />

          <H2>Qué cubre esta política</H2>
          <P>
            Dos cosas, y funcionan de manera distinta. La app en sí, que se ejecuta en tu
            dispositivo y no nos envía nada. Y este sitio web, donde escribirnos por correo
            electrónico comparte lo que eliges enviar, y donde Ella Rae, el chatbot de IA
            del sitio, responde preguntas sobre los libros. La mayor parte de esta
            política trata de la app. Las secciones tituladas <em>Ella Rae</em> y{' '}
            <em>Cuando nos escribes</em> cubren el sitio web.
          </P>

          <H2>La versión corta</H2>
          <P>
            Todo lo que escribes en la app se guarda en tu dispositivo y en tu propio
            iCloud. La app no tiene cuentas, ni analíticas, ni publicidad, ni código de
            rastreo de terceros. No recibimos las entradas de tu diario. No podríamos
            leerlas aunque quisiéramos, porque nunca nos llegan.
          </P>

          <H2>Qué guarda la app, y dónde</H2>
          <P>
            Las entradas de tu diario, los reflejos de Mirror, tus preferencias de
            recordatorios, el ajuste de App Lock, la fecha de inicio y tu racha de
            escritura se guardan en el almacenamiento privado de la app en tu dispositivo.
            Los reflejos de Mirror y los repasos de cada temporada se generan por completo
            en tu dispositivo a partir de tus propias palabras: sin llamadas a la red, sin
            servicios de análisis, sin IA.
          </P>
          <P>
            Si eliminas la app, estos datos se borran de tu dispositivo. Las copias que
            hayas hecho tú, descritas más abajo, no se ven afectadas y siguen bajo tu
            control.
          </P>

          <H2>Lo que la app no recopila</H2>
          <P>
            A la fecha de entrada en vigor indicada arriba, la app no contiene ningún SDK
            de analíticas, ningún SDK de reporte de fallos, ningún SDK de publicidad ni
            código de rastreo de terceros de ningún tipo. No te pide tu nombre, tu correo
            electrónico, tu ubicación, tus contactos, tus fotos ni los identificadores de
            tu dispositivo. No hay cuenta que crear ni inicio de sesión. Su etiqueta de
            privacidad en la App Store dice &laquo;Datos no recopilados&raquo; porque así
            está construida la app.
          </P>
          <P>
            No vendemos información personal y no la compartimos con terceros con fines
            de marketing. Tu escritura nunca se usa para entrenar ni mejorar ningún sistema
            de inteligencia artificial, ni nuestro ni de nadie. Y no podría usarse, porque
            nunca sale de tu dispositivo ni de tu propio iCloud.
          </P>
          <P>
            Si algo de esto llega a cambiar, esta política se actualizará antes de que el
            cambio se publique, y la app te lo dirá.
          </P>

          <H2>Copias de seguridad: tus datos, tu almacenamiento</H2>
          <P>La app protege tu diario de dos maneras, y ninguna pasa por un servidor nuestro:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Una copia en tu propio iCloud.</strong>{' '}
              La app guarda una copia de seguridad de tu diario en tu almacenamiento
              privado de iCloud, el espacio vinculado a tu cuenta de Apple. Esa copia vive
              en tu cuenta de Apple, no en ningún servidor nuestro. No tenemos ninguna
              llave para abrirla ni forma de llegar a ella. Si prefieres no tener ninguna
              copia en iCloud, puedes desactivar el acceso de la app a iCloud en los
              Ajustes de iOS (tu nombre → iCloud).
            </LI>
            <LI>
              <strong className="text-night/80">La copia de seguridad de tu iPhone.</strong>{' '}
              Como pasa con la mayoría de las apps, el almacenamiento del diario en el
              dispositivo también se incluye en la copia de seguridad normal de tu iPhone,
              en tu propia cuenta de Apple.
            </LI>
          </ul>
          <P>
            Vale la pena saberlo, porque la mayoría de las apps no te lo dirán: con la
            Protección de datos estándar de Apple (la opción predeterminada en toda cuenta
            de Apple), los datos de iCloud se cifran en tránsito y en los servidores de
            Apple, pero Apple tiene las llaves. Si quieres que tu diario tenga cifrado de
            extremo a extremo, para que solo tus dispositivos de confianza puedan leerlo,
            activa la Protección de datos avanzada en tus ajustes de iCloud. A nosotros no
            nos beneficia ni una cosa ni la otra. Simplemente deberías saber que la opción
            existe.
          </P>
          <P>
            También puedes guardar un archivo de copia de seguridad completo de tu diario
            cuando quieras, y conservarlo donde quieras. Adónde va ese archivo es una
            decisión solo tuya.
          </P>

          <H2>Cómo se protege tu diario en el dispositivo</H2>
          <P>
            En iOS, los archivos que están dentro del almacenamiento privado de una app
            quedan cifrados en reposo por el sistema operativo, vinculados al código de
            tu dispositivo. Esa protección es real, y es la que hace la mayor parte del
            trabajo aquí. La advertencia honesta: depende de que tengas un código
            configurado. Un iPhone sin código, o uno que le entregas desbloqueado a otra
            persona, es el riesgo real para un diario. No nosotros, y no Apple.
          </P>

          <H2>App Lock</H2>
          <P>
            Puedes exigir Face ID, Touch ID o el código de tu dispositivo para abrir la
            app. Esa verificación la hace el sistema operativo de tu dispositivo. La app
            nunca ve, guarda ni transmite tus datos biométricos ni tu código. App Lock es
            una puerta en la pantalla. No es lo que cifra tu diario, y eso es a propósito:
            así un Face ID fallido, un sensor roto o un ajuste olvidado nunca pueden
            costarte lo que has escrito.
          </P>

          <H2>Recordatorios</H2>
          <P>
            Los recordatorios diarios son notificaciones locales que iOS programa en tu
            dispositivo. No interviene ningún servidor y nada sale de tu teléfono. La app
            solo pide dos permisos, Notificaciones y Face ID, y puedes retirar ambos en
            cualquier momento en los Ajustes de iOS.
          </P>

          <H2>Exportar y compartir</H2>
          <P>
            Exportar crea en tu dispositivo un archivo de texto, un PDF o un archivo de
            copia de seguridad de tus entradas, y luego abre el menú para compartir de tu
            propio teléfono. Si un archivo exportado va a alguna parte, lo decides tú. La
            app no envía nada por su cuenta.
          </P>

          <H2>Compras</H2>
          <P>
            La Temporada Uno de la app es gratuita. El año completo se vende como
            suscripción anual o como compra única, vendida y procesada por completo por
            Apple a través de la App Store, bajo los términos de Apple. Nunca vemos ni
            guardamos tus datos de pago, tu tarjeta ni tu dirección de facturación. Apple
            nos da informes de ventas que muestran totales, no clientes. Cómo se verifica
            tu compra: la app le pregunta a StoreKit de Apple, en tu dispositivo, si esta
            cuenta de Apple tiene la compra. No interviene ningún servicio de verificación
            de terceros y no se nos envía nada. La respuesta se recuerda como una pequeña
            marca en tu dispositivo para que la app funcione sin conexión; esa marca se
            queda en tu dispositivo y no se incluye en las copias de seguridad de tu
            diario. Puedes ver, cambiar o cancelar una suscripción en los ajustes de tu
            cuenta de Apple. Nosotros no podemos hacerlo por ti, y no podemos ver si lo
            hiciste.
          </P>

          <h2 id="ella-rae" className="font-serif text-heading text-night mt-12 mb-4 scroll-mt-28">
            Ella Rae, el chatbot del sitio web
          </h2>
          <P>
            Ella Rae es un chatbot de IA, no una persona. Cuando le escribes a Ella Rae,
            tus mensajes en esa conversación se envían a través del AI Gateway de Vercel a
            Anthropic, cuyo modelo Claude escribe las respuestas. Procesan el texto para
            responderte, bajo sus propias políticas de privacidad, y pueden conservarlo
            por un tiempo limitado para vigilar la seguridad y prevenir abusos. Nosotros
            no guardamos tus conversaciones, no las leemos, y desaparecen de tu pantalla
            cuando cierras o recargas la página. Por favor, no compartas nada que no
            quieras que procese un proveedor de servicios.
          </P>
          <P>
            Si le pides a Ella Rae que te avise cuando salga un libro y marcas la casilla
            de permiso, el correo electrónico que escribes se envía a nuestra bandeja de
            entrada. Lo usamos una sola vez, para ese lanzamiento, y luego lo borramos. No
            se agrega a ninguna lista de correo.
          </P>

          <H2>Cuando nos escribes</H2>
          <P>
            El correo electrónico es el único lugar donde recibimos información sobre ti,
            y solo porque tú decidiste enviarla. Los mensajes enviados a{' '}
            <a href="mailto:miskwa@miskwakimiwan.com" className="text-bridge underline">
              miskwa@miskwakimiwan.com
            </a>{' '}
            contienen tu dirección de correo y lo que escribas. Los conservamos hasta 24
            meses y luego los borramos. Los usamos para responderte. No te agregamos a una
            lista de correo por un mensaje de soporte, no los vendemos y no los
            compartimos. Pídelo y te diremos qué tenemos, te enviaremos una copia, lo
            corregiremos o lo borraremos. Respondemos en un plazo de 30 días.
          </P>

          <H2>Conservar y borrar tus datos</H2>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">En la app:</strong> cualquier entrada se
              puede vaciar dentro de la app. Si eliminas la app, se borra todo lo que
              guardó en tu dispositivo.
            </LI>
            <LI>
              <strong className="text-night/80">En iCloud:</strong> abre los Ajustes de
              iOS → tu nombre → iCloud → administra el almacenamiento de tu cuenta, busca
              The Book of Questions y borra sus datos.
            </LI>
            <LI>
              <strong className="text-night/80">Archivos que guardaste:</strong> los
              archivos exportados y de copia de seguridad viven donde tú los pusiste. No
              podemos llegar a ellos ni borrarlos por ti.
            </LI>
            <LI>
              <strong className="text-night/80">Mensajes que nos enviaste:</strong>{' '}
              cubiertos arriba. Pídelo y desaparecen.
            </LI>
          </ul>
          <P>No conservamos nada más, porque no tenemos nada más.</P>

          <H2>Tus derechos</H2>
          <P>
            Las leyes de privacidad te dan derecho a acceder, corregir, borrar y exportar
            la información personal que una organización tiene sobre ti. PIPEDA en Canadá,
            la Ley 25 de Quebec, el GDPR de la UE y del Reino Unido, y la CCPA/CPRA de
            California funcionan en esa línea. En el caso de la app, cada uno de esos
            derechos ya está en tus manos: tu diario está en tu dispositivo, exportar te da
            una copia completa cuando la pidas, y borrar es algo que solo tú puedes hacer.
            De nuestro lado no hay nada cuyo borrado puedas solicitar. Para la
            correspondencia por correo electrónico, los derechos son los habituales y los
            respetamos. En Quebec, la persona a cargo de la protección de la información
            personal es quien ocupa la dirección general de The 8th Fire, Inc. Si estás en
            Canadá y no te satisface cómo atendimos una solicitud, puedes presentar una
            queja ante la Oficina del Comisionado de Privacidad de Canadá; en Quebec, ante
            la Commission d’accès à l’information.
          </P>

          <H2>Terceros</H2>
          <P>Esta es la lista completa a la fecha de entrada en vigor indicada arriba:</P>
          <ul className="list-disc pl-6 mb-4">
            <LI>
              <strong className="text-night/80">Apple</strong> proporciona el
              almacenamiento del dispositivo, iCloud, las notificaciones, Face ID y el
              procesamiento de pagos, bajo{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-bridge underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                la política de privacidad de Apple
              </a>
              .
            </LI>
            <LI>
              <strong className="text-night/80">Zoho Mail</strong> aloja nuestra bandeja
              de entrada de correo, bajo su propia política de privacidad.
            </LI>
            <LI>
              <strong className="text-night/80">Vercel</strong> aloja este sitio web y
              transporta los mensajes de Ella Rae a través de su AI Gateway, bajo su
              propia política de privacidad.
            </LI>
            <LI>
              <strong className="text-night/80">Anthropic</strong> proporciona el modelo
              de IA detrás de Ella Rae, bajo su propia política de privacidad.
            </LI>
            <LI>
              <strong className="text-night/80">Resend</strong> entrega a nuestra bandeja
              de entrada los mensajes del formulario de contacto del sitio y los avisos de
              lanzamiento, bajo su propia política de privacidad.
            </LI>
          </ul>
          <P>
            Al tocar el enlace al libro impreso, tu navegador abre el sitio de una
            librería, que a partir de ese momento opera bajo su propia política de
            privacidad. No recibimos comisión por referencia ni ningún dato de vuelta por
            ese enlace. Está ahí porque el libro existe. Ningún proveedor de analíticas,
            red publicitaria ni intermediario de datos interviene en la app.
          </P>

          <H2>Menores de edad</H2>
          <P>
            La app no está dirigida a menores de 13 años y no recopila información de
            nadie, a ninguna edad.
          </P>

          <H2>Una nota sobre lo que es esta app</H2>
          <P>
            The Book of Questions ofrece escritura reflexiva para la indagación personal.
            No es asesoramiento médico, psicológico ni terapéutico, y no sustituye la
            atención de un profesional calificado. Si necesitas ese tipo de apoyo, por
            favor búscalo con alguien que esté calificado para darlo.
          </P>

          <H2>Cambios a esta política</H2>
          <P>
            Cualquier cambio se publicará aquí con una nueva fecha de entrada en vigor, y
            las versiones anteriores seguirán disponibles para que puedas ver qué se
            prometió y cuándo. Si un cambio es importante, es decir, si afecta lo que se
            recopila, adónde va tu escritura o quién puede llegar a ella, la app te lo
            dirá antes de que el cambio entre en vigor. Ningún cambio se aplicará jamás
            hacia atrás para reducir la privacidad de lo que ya escribiste.
          </P>

          <H2>Contacto</H2>
          <P>
            Preguntas sobre privacidad y todo lo demás:{' '}
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
