import bg from '../../assets/background.png'
import { Header } from '../layout/Header'
import { Z_INDEX } from '../../lib/constants'

interface AboutSectionProps {
  isVisible: boolean
}

export function AboutSection({ isVisible }: AboutSectionProps) {
  return (
    <section
      id="sobre-nosotros"
      className="relative w-full min-h-screen snap-start pt-24 md:pt-32 lg:pt-36 pb-16"
    >

      {/* About Content - Responsive */}
      <div className="container relative flex flex-col items-center justify-center min-h-[calc(105vh-220px)] px-4" style={{ zIndex: Z_INDEX.CONTENT }}>
        {/* Content Box - Responsive width and padding */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/40 bg-white/30 p-4 sm:p-6 md:p-8 text-black shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-left">
            Metodología Potencia
          </h1>
          <div className="text-left space-y-3 md:space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              En Potencia, acompañamos a nuestros clientes en procesos de desarrollo territorial sostenible. Combinamos visión estratégica con capacidad de ejecución, conectando lo público y lo privado para transformar ideas en realidades. Creemos en el potencial de América Latina y queremos verlo realizado.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Somos un equipo de hacedores con experiencia comprobada. Trabajamos con gobiernos, empresas y organizaciones en la estructuración, ejecución y mantenimiento de proyectos duraderos que cambian ciudades y, sobre todo, la vida de sus ciudadanos.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              En un entorno de desconfianza, polarización y lentitud institucional, Potencia se presenta como un actor confiable, técnico, rápido y con resultados visibles.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Creemos en el poder de la colaboración, en la planificación con propósito y en la acción con resultados. Hacemos que el desarrollo avance, que la inversión genere transformación y que cada proyecto deje una huella positiva y sostenible en el territorio y las personas que lo habitan.
            </p>
          </div>
        </div>

        {/* Ver Más Button - Responsive */}
        <button className="w-full max-w-xs rounded-full border border-white/40 bg-white/30 px-6 py-3 text-sm sm:text-base text-black shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 hover:bg-white/40 transition-all duration-300">
          ver más
        </button>
      </div>

      {/* overlay decorativo removido aquí porque el fondo es fijo en HomePage */}
    </section>
  )
}