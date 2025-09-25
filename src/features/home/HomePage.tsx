import { useScrollSection } from '../../hooks/useScrollSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { AboutSection } from '../../components/sections/AboutSection'

export default function HomePage() {
  const currentSection = useScrollSection()

  return (
    <>
      {/* Hero Section */}
      <HeroSection isVisible={currentSection === 0} />

      {/* About Section */}
      <AboutSection isVisible={currentSection === 1} />

      {/* Spacer para permitir scroll */}
      <div className="h-[200vh]" />
    </>
  )
}