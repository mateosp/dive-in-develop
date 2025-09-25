import { NavLink } from 'react-router-dom'
import logo from '../../assets/logoPotencia.png'

interface NavigationBarProps {
  currentSection: number
}

export default function NavigationBar({ currentSection }: NavigationBarProps) {
  return (
    <header className="relative z-30 py-6">
      <div className="container relative flex flex-col items-center gap-4 pt-12 sm:pt-14">
        <NavLink to="/" className="absolute left-0 top-0 inline-flex items-center sm:left-2 sm:top-1">
          <img src={logo} alt="Potencia" className="h-10 w-auto sm:h-12" />
        </NavLink>
        <nav
          className="mt-3 flex w-[90%] items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-2 text-base shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 sm:mt-4 sm:px-6"
        >
          <a href="#inicio" className={`font-medium ${currentSection === 0 ? 'text-indigo-700' : 'text-black'}`}>
            Inicio
          </a>
          <a href="#sobre-nosotros" className={`font-medium ${currentSection === 1 ? 'text-indigo-700' : 'text-black'}`}>
            Sobre Nosotros
          </a>
          <a href="#equipo" className="text-black">
            Nuestro equipo
          </a>
          <a href="#casos" className="text-black">
            Casos de Éxito
          </a>
          <a href="#servicios" className="text-black">
            Servicios
          </a>
          <a href="#clientes" className="text-black">
            Clientes
          </a>
          <a href="#publicaciones" className="text-black">
            Publicaciones
          </a>
          <a href="#contacto" className="text-black">
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  )
}