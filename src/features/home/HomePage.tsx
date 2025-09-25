import bigLogo from '../../assets/logoPotenciaTransparente.png'
import bg from '../../assets/background.png'
import { useState, useEffect } from 'react'
import NavigationBar from '../../shared/components/NavigationBar'

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Determinar qué sección está visible
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY

      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection(0) // Hero section
      } else {
        setCurrentSection(1) // About section
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        id="inicio"
        className={`fixed inset-0 w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out ${
          currentSection === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Header dentro del hero */}
        <NavigationBar currentSection={currentSection} />
        
        {/* Logo grande - responsive */}
        <img
          src={bigLogo}
          alt="Potencia marca"
          className="pointer-events-none absolute bottom-0 right-0 z-20 select-none opacity-70 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
        />

        {/* Contenido principal */}
        <div className="container relative z-30 flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
          <div className="max-w-xl text-left text-white drop-shadow-md">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              El crecimiento de las
              <br />
              ciudades es
              <br />
              <span className="font-extrabold">POTENCIA</span> infinita.
            </h1>
          </div>
        </div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 to-transparent" />
      </section>

      {/* About Section */}
      <section
        id="sobre-nosotros"
        className={`fixed inset-0 w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out ${
          currentSection === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Header */}
        <NavigationBar currentSection={currentSection} />

        {/* About Content - Responsive */}
        <div className="container relative z-30 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
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

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 to-transparent" />
      </section>

      {/* Spacer para permitir scroll */}
      <div className="h-[200vh]" />
    </>
  )
}