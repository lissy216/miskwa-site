import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { alternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Acerca de',
  description: 'Miskwa Kimiwan escribe, sana y enseña sanación espiritual y medicina energética. Una obra que carga memoria intergeneracional y tiende un puente entre el trauma, la presencia y el mundo invisible.',
  alternates: alternates('es', '/about'),
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
              Acerca de
            </p>
            <h1 className="font-serif text-display-sm md:text-display text-night mb-8">
              Quien guía también ha sangrado.
            </h1>
            <div className="divider-cool mb-8" />
            <p className="font-body text-body-lg text-night/75 leading-relaxed mb-6">
              Algo se hizo añicos temprano. Una cama de hospital encendida como un horno. La piel abriéndose como corteza. Una historia familiar cargada de silencio y de esas heridas que viajan por la sangre sin que nadie las nombre.
            </p>
            <p className="font-body text-body text-night/70 leading-relaxed">
              Lo que siguió no fue una línea recta hacia la sanación. Fueron años de sentarse en la oscuridad, aprendiendo que la oscuridad no es el enemigo. Que el cuerpo ya sabe lo que la mente todavía discute. Que ningún camino espiritual empaquetado coincidía con lo que de verdad estaba pasando, y que la única opción honesta era construir algo con la materia prima de la experiencia vivida.
            </p>
          </div>
          <div className="relative aspect-3/2 bg-charcoal rounded-sm overflow-hidden">
            <Image
              src="/images/author-portrait.jpg"
              alt="Miskwa Kimiwan, un puente entre mundos"
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
            Lo que surgió de ahí
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Miskwa Kimiwan escribe, sana y enseña sanación espiritual y medicina energética. Su obra carga memoria y medicina intergeneracionales, y tiende un puente entre el trauma, la presencia y el mundo invisible.
            </p>
            <p>
              La obra publicada comenzó con <em>Red Rain: A Soul Shattered</em>, unas memorias que, según quienes las leen, no se leen: te leen. Después llegó <em>The Book of Questions: The Socratic Year of the Soul</em>, una pregunta para cada día de un año, a lo largo de doce meses de territorio del alma. <em>The Signal</em> se volvió hacia los patrones que siguen llegando a una vida con otros nombres. <em>The Re-Membering</em> llegó en el equinoccio de otoño de 2026, un libro breve para la parte de ti que sospecha que alguna vez supo algo.
              {/* Después del 21 de diciembre de 2026, cambiar "llega" por "llegó". */}{' '}
              <em>Forgiveness as Freedom</em> llega en el solsticio de invierno.
            </p>
            <p>
              Todos parten del mismo principio: la persona que sostiene el libro ya lleva lo que necesita. El trabajo nunca es instalar algo nuevo. El trabajo es quedarse con lo que ya está ahí el tiempo suficiente para que se escuche.
            </p>
          </div>
          <p className="mt-10 font-display text-xs tracking-[0.2em] uppercase text-glow/85">
            Integrante de{' '}
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
            &laquo;La herida es el lugar por donde la luz entra en ti.&raquo;
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
            Filosofía
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Aquí no hay maestros
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Casi todo el trabajo de sanación y espiritualidad se construye sobre la actuación. Actuar el bienestar. Actuar la transformación. Actuar que ya sanaste. Subirte a un escenario y decirle a la gente que tienes la respuesta. Construir un pedestal y dejar que adoren lo que creen que sabes.
            </p>
            <p>
              Ese modelo produce dependencia, no soberanía. Enseña a la gente a buscar fuera de sí lo que siempre ha vivido dentro. Y produce practicantes con poca formación, que prometen de más y que no pueden sostener lo que de verdad entra por la puerta cuando la actuación se cae.
            </p>
            <p>
              Este trabajo parte de otra premisa. Quien guía ha hecho el trabajo, lo sigue haciendo y no reclama una posición terminada. Nadie más hace falta para el trabajo de volver a ti. Lo que se ofrece aquí es un espacio lo bastante honesto y lo bastante seguro para que dejes de actuar, enfrentes lo que has estado cargando, lo sientas en el cuerpo y descubras que eres más que lo que te pasó.
            </p>
            <p className="text-bone/70">
              La redención no es un acontecimiento único. Es una práctica diaria: elegir volverse más que lo que pasó. Todo lo que se escribe, se enseña y se ofrece aquí existe para sostener esa verdad.
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
            Quiénes llegan a esta obra
          </h2>
          <div className="space-y-6 font-body text-body-lg text-night/75 leading-relaxed">
            <p>
              Personas que cargan un peso que nadie ve. Que han sido heridas y han herido. Que ya no quieren fingir y buscan un espacio donde el trabajo sea real, la redención sea posible y quien guía también haya sangrado.
            </p>
            <p>
              Personas que pasaron por el mundo convencional de la sanación y la autoayuda y lo encontraron hueco. Los marcos de amor y luz las dejaron sin ser vistas. Las prácticas de pensamiento positivo se sentían como una actuación. Lo que necesitan es algo que no se estremezca ante la oscuridad y que no las apure hacia una resolución.
            </p>
            <p>
              Terapeutas y practicantes que se encuentran con esta obra y la reconocen como algo que llena un vacío en su propia caja de herramientas clínicas. Personas que sanan, cansadas de la actuación de la industria, que quieren formarse en un espacio que exige honestidad primero.
            </p>
            <p>
              Si buscas una solución rápida, este no es el lugar. Si quieres un gurú a quien seguir, aquí no lo vas a encontrar. Pero si te dispones a quedarte con lo que cargas y dejar que te enseñe algo, hay lugar junto al fuego.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/es/red-rain" className="btn-light">
              Empieza con Red Rain
            </Link>
            <Link href="/es/bookstore" className="btn-light">
              Explora la librería
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
            Charlas y lecturas
          </p>
          <h2 className="font-serif text-heading text-bone mb-10">
            Parte de esta obra necesita una sala
          </h2>
          <div className="space-y-6 font-body text-body-lg text-bone/70 leading-relaxed">
            <p>
              Un libro casi siempre se lee en soledad. Parte de lo que estos libros cargan llega distinto cuando se dice en voz alta, en una sala llena de gente que vino a escucharlo. Miskwa Kimiwan acepta invitaciones para dar charlas y lecturas, en persona y en línea.
            </p>
            <p>
              No esperes un espectáculo con respuestas que bajan desde el escenario. Una charla aquí se parece más a sentarse junto al fuego con gente que acabas de conocer: una historia, un silencio al que se le permite durar, y la pregunta que hay debajo de cada uno de los libros. ¿Qué hace falta para volverte más que lo que te pasó? La gente suele irse todavía con ella en las manos.
            </p>
          </div>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Conferencias y charlas</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Congresos, encuentros y jornadas profesionales. El trauma y lo que el cuerpo guarda, la memoria intergeneracional, la presencia y el trabajo lento de volver a ti.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Lecturas</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                De cualquiera de los libros, con tiempo después para preguntas. Librerías, bibliotecas, festivales y presentaciones.
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm tracking-[0.2em] uppercase text-glow">Conversaciones</dt>
              <dd className="mt-2 font-body text-body text-bone/70 leading-relaxed">
                Clubes de lectura, aulas, paneles, podcasts y entrevistas. Los grupos que leen juntos uno de los libros son especialmente bienvenidos.
              </dd>
            </div>
          </dl>

          <p className="mt-12 font-body text-body text-bone/70 leading-relaxed">
            Para extender una invitación, escribe con la fecha, el lugar, quiénes estarán en la sala y cuánto tiempo hay. Cada solicitud se lee.
          </p>
          <div className="mt-8">
            <Link href="/es/contact?topic=speaking" className="btn-primary">
              Enviar una invitación
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
