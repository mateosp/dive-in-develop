import { NavLink } from 'react-router-dom'
import logo from '../../assets/logoPotencia.png'

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <NavLink to="/" className={`inline-flex items-center ${className}`}>
      <img src={logo} alt="Potencia" className="h-8 w-auto sm:h-10 md:h-12" />
    </NavLink>
  )
}