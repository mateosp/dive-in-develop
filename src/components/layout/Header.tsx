import { Logo } from '../ui/Logo'
import { DesktopNavigation } from '../ui/DesktopNavigation'
import { MobileMenuButton } from '../ui/MobileMenuButton'
import { MobileNavigation } from '../ui/MobileNavigation'
import { useScrollSection } from '../../hooks/useScrollSection'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { Z_INDEX } from '../../lib/constants'

export function Header() {
  const currentSection = useScrollSection()
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <header className="relative py-4 md:py-6" style={{ zIndex: Z_INDEX.HEADER }}>
      <div className="container relative flex flex-col items-center gap-4 pt-8 md:pt-12 lg:pt-14">
        {/* Logo - Posición original (absoluta) */}
        <Logo className="absolute left-4 top-0 md:left-2 md:top-1" />

        {/* Desktop Navigation */}
        <DesktopNavigation currentSection={currentSection} />

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />

        {/* Mobile Navigation */}
        <MobileNavigation 
          currentSection={currentSection} 
          isOpen={isMenuOpen} 
          onClose={closeMenu} 
        />
      </div>
    </header>
  )
}