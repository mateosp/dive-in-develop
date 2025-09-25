import bigLogo from '../../assets/logoPotenciaTransparente.png'
import bg from '../../assets/background.png'
import { Header } from '../layout/Header'
import { Z_INDEX } from '../../lib/constants'

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className={`fixed inset-0 w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <Header />
      
      {/* Logo grande - responsive */}
      <img
        src={bigLogo}
        alt="Potencia marca"
        className="pointer-events-none absolute bottom-0 right-0 select-none opacity-70 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
        style={{ zIndex: Z_INDEX.CONTENT }}
      />

      {/* Contenido principal */}
      <div className="container relative flex items-center justify-center min-h-[calc(100vh-200px)] px-4" style={{ zIndex: Z_INDEX.CONTENT }}>
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" style={{ zIndex: Z_INDEX.BACKGROUND }} />
    </section>
  )
}