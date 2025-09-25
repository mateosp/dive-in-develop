import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logoPotencia.png'

interface NavigationBarProps {
  currentSection: number
}

export default function NavigationBar({ currentSection }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '#inicio', label: 'Inicio', isActive: currentSection === 0 },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros', isActive: currentSection === 1 },
    { href: '#equipo', label: 'Nuestro equipo' },
    { href: '#casos', label: 'Casos de Éxito' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#publicaciones', label: 'Publicaciones' },
    { href: '#contacto', label: 'Contáctanos' },
  ]

  return (
    <header className="relative z-30 py-4 md:py-6">
      <div className="container relative flex items-center justify-between px-4 pt-8 md:pt-12 lg:pt-14">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img src={logo} alt="Potencia" className="h-8 w-auto sm:h-10 md:h-12" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-6 py-2 text-sm shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 xl:text-base">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1 font-medium transition-colors duration-200 ${
                item.isActive ? 'text-indigo-700' : 'text-black hover:text-indigo-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden rounded-full border border-white/40 bg-white/30 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 transition-all duration-200 hover:bg-white/40"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-black" />
          ) : (
            <Menu className="h-5 w-5 text-black" />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-4 lg:hidden">
            <nav className="rounded-2xl border border-white/40 bg-white/30 py-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-6 py-3 font-medium transition-colors duration-200 ${
                    item.isActive 
                      ? 'text-indigo-700 bg-white/20' 
                      : 'text-black hover:text-indigo-600 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}