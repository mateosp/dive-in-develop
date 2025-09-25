import { useScrollSection } from '../../hooks/useScrollSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { AboutSection } from '../../components/sections/AboutSection'
import { TeamSection } from '../../components/sections/TeamSection'

export default function HomePage() {
  const currentSection = useScrollSection()

  return (
    <>
      {/* Hero Section */}
      <HeroSection isVisible={currentSection === 0} />

      {/* About Section */}
      <AboutSection isVisible={currentSection === 1} />

      {/* Team Section */}
      <TeamSection isVisible={currentSection === 2} />

      {/* Spacer para permitir scroll */}
      <div className="h-[300vh]" />
    </>
  )
}