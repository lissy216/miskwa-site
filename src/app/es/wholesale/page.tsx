import type { Metadata } from 'next'
import Link from 'next/link'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Venta al por mayor para librerías y tiendas',
  description:
    'Precios mayoristas de los libros de Miskwa Kimiwan para librerías, centros de bienestar, sanadores, terapeutas y espacios comunitarios. 55 por ciento de descuento sobre el precio de venta, cotizado por pedido.',
  alternates: alternates('es', '/wholesale'),
}

const books = [
  { title: 'The Re-Membering', subtitle: 'Six Turns Back to the Part of You That Never Forgot', retail: 13.99, wholesale: 6.3 },
  { title: 'The Signal', subtitle: 'Why Life and People Keep Happening to You', retail: 22.99, wholesale: 10.35 },
  { title: 'Red Rain', subtitle: 'A Soul Shattered', retail: 19.99, wholesale: 9.0 },
  { title: 'The Book of Questions', subtitle: 'The Socratic Year of the Soul', retail: 24.99, wholesale: 11.25 },
]

const fmt = (n: number) => `$${n.toFixed(2)}`

// Pre-filled mailto template for the wholesale inquiry button. Opens the
// visitor's default mail client with subject and body ready to fill in.
// The subject stays in English so it matches the English inquiries in the inbox.
const mailtoBody = `Hola, Miskwa:

Me gustaría consultar sobre pedidos al por mayor. Por favor, envíame una cotización para lo siguiente.

Nombre de contacto:
Negocio u organización:
Correo electrónico:
Teléfono (opcional):

Libros y cantidades:
    The Re-Membering:
    The Signal:
    Red Rain:
    The Book of Questions:

Dirección de envío:

Plazo (para cuándo se necesitan):

Notas:

Gracias.`

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
            Para librerías y espacios comunitarios
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-bone mb-6">
            Venta al por mayor
          </h1>
          <div className="divider-warm mx-auto mb-8" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Para librerías, centros de bienestar, sanadores, terapeutas y espacios
            comunitarios que quieren tener estos libros en sus tiendas u ofrecerlos a sus
            clientes y comunidades.
          </p>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-bone mb-10">Cómo funciona</h2>
          <div className="space-y-5 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Los precios mayoristas siguen el descuento comercial estándar de Ingram, del
              55 por ciento sobre el precio de venta. Los libros se surten como ejemplares de
              autor de Amazon KDP o a través de IngramSpark, y se envían directamente a tu
              dirección.
            </p>
            <p>
              Se prefiere un mínimo de cinco ejemplares por pedido, en cualquier combinación
              de los cuatro títulos. El envío se calcula por pedido según el destino y la
              cantidad, y se factura aparte del precio mayorista. Los pedidos más grandes
              pueden tener un descuento adicional, cotizado a solicitud.
            </p>
            <p>
              Cuando recibamos tu consulta, confirmaremos la disponibilidad, te cotizaremos
              el total final con envío incluido y acordaremos el pago por factura enviada por
              correo electrónico o por transferencia electrónica (e-transfer). Los libros se
              envían en cuanto se confirma el pago.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING TABLE
          ============================================ */}
      <section className="bg-parchment py-section-sm md:py-section">
        <div className="section-narrow">
          <h2 className="font-serif text-heading text-night mb-3">Precios</h2>
          <p className="font-serif italic text-body-lg text-night/75 mb-10">
            Por ejemplar, sin envío. Todos los precios en CAD.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-night/20">
                  <th className="text-left py-4 pr-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Título
                  </th>
                  <th className="text-right py-4 px-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Precio de venta
                  </th>
                  <th className="text-right py-4 pl-4 font-display text-xs tracking-[0.15em] uppercase text-night/75">
                    Mayorista
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
            Los precios reflejan el descuento comercial estándar del 55 por ciento sobre el
            precio de venta. El envío y el manejo se cotizan aparte en cada pedido.
          </p>
        </div>
      </section>

      {/* ============================================
          INQUIRY (mailto, no backend, opens your email app)
          ============================================ */}
      <section className="bg-night py-section-sm md:py-section">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.25em] uppercase text-glow/80 mb-4">
            Solicita una cotización
          </p>
          <h2 className="font-serif text-heading text-bone mb-4">Envía tu consulta</h2>
          <div className="divider-warm mx-auto mb-10" />
          <p className="font-body text-body-lg text-bone/70 leading-relaxed mb-10 max-w-xl mx-auto">
            El botón de abajo abre tu aplicación de correo con un mensaje listo para
            completar. Agrega tus datos y envíalo. Respondemos con una cotización que
            incluye el envío en pocos días hábiles.
          </p>
          <a href={mailtoUrl} className="btn-primary inline-flex items-center gap-3">
            Envía tu consulta mayorista por correo
          </a>
          <p className="font-serif italic text-caption text-bone/70 mt-6">
            O escribe directamente a <a href="mailto:miskwa@miskwakimiwan.com?subject=Wholesale%20inquiry" className="text-glow hover:text-sun underline decoration-glow/40 underline-offset-4">miskwa@miskwakimiwan.com</a>.
          </p>
        </div>
      </section>

      {/* ============================================
          BACK LINKS
          ============================================ */}
      <section className="bg-night py-16">
        <div className="section-narrow text-center">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-bone/60 mb-6">
            Explora los libros
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/es/the-signal" className="btn-primary">The Signal</Link>
            <Link href="/es/red-rain" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">Red Rain</Link>
            <Link href="/es/book-of-questions" className="btn-primary border-bone/30 hover:border-bone hover:bg-bone hover:text-night">The Book of Questions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
