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
      <div className="container relative flex flex-col items-center gap-4 pt-8 md:pt-12 lg:pt-14">
        {/* Logo - Posición original (absoluta) */}
        <NavLink to="/" className="absolute left-4 top-0 inline-flex items-center md:left-2 md:top-1">
          <img src={logo} alt="Potencia" className="h-8 w-auto sm:h-10 md:h-12" />
        </NavLink>

        {/* Desktop Navigation - Posición original centrada */}
        <nav className="hidden lg:flex mt-3 w-[90%] items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-2 text-base shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 sm:mt-4 sm:px-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-2 py-1 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                item.isActive 
                  ? 'text-indigo-700 bg-white/60 shadow-sm' 
                  : 'text-black hover:text-indigo-600 hover:bg-white/20'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Cuadrado con bordes curvos */}
        <button
          onClick={toggleMenu}
          className="lg:hidden absolute right-4 top-0 md:right-2 md:top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/40 bg-white/30 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 transition-all duration-200 hover:bg-white/40 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
          )}
        </button>

        {/* Mobile Dropdown Menu - Fondo blanco sólido */}
        {isMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-4 lg:hidden z-50">
            <nav className="rounded-2xl border border-gray-200 bg-white py-4 shadow-xl">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-6 py-3 font-medium transition-colors duration-200 ${
                    item.isActive 
                      ? 'text-indigo-700 bg-indigo-50' 
                      : 'text-gray-800 hover:text-indigo-600 hover:bg-gray-50'
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