import { useScrollSection } from '../../hooks/useScrollSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { AboutSection } from '../../components/sections/AboutSection'
import { TeamSection } from '../../components/sections/TeamSection'
import { CasesSection } from '../../components/sections/CasesSection'
import { ServicesSection } from '../../components/sections/ServicesSection'
import { ClientsSection } from '../../components/sections/ClientsSection'
import bg from '../../assets/background.png'
import { Header } from '../../components/layout/Header'
import { Z_INDEX } from '../../lib/constants'

export default function HomePage() {
  const currentSection = useScrollSection()

  return (
    <>
      {/* Fondo fijo */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, zIndex: Z_INDEX.BACKGROUND }}
      />

      {/* Header fijo */}
      <div className="fixed left-0 right-0 top-0" style={{ zIndex: Z_INDEX.HEADER }}>
        <Header />
      </div>

      {/* Contenedor con scroll-snap */}
      <div id="snap-scroll" className="relative h-screen overflow-y-scroll snap-y snap-proximity" style={{ zIndex: Z_INDEX.CONTENT }}>
        {/* Hero Section */}
        <HeroSection isVisible={currentSection === 0} />

        {/* About Section */}
        <AboutSection isVisible={currentSection === 1} />

        {/* Team Section */}
        <TeamSection isVisible={currentSection === 2} />

        {/* Services Section */}
        <CasesSection isVisible={currentSection === 3} />

        {/* Cases Section */}
        <ServicesSection isVisible={currentSection === 4} />

        {/* Clients Section */}
        <ClientsSection isVisible={currentSection === 5} />
      </div>
    </>
  )
}