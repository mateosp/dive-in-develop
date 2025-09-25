import logo from '../assets/logoPotenciaTransparente.png';

interface NavigationBarProps {
  currentSection: number;
}

export default function NavigationBar({ currentSection }: NavigationBarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-30 py-6">
      <div className="container relative flex flex-col items-center gap-4 pt-12 sm:pt-14">
        <a href="#inicio" className="absolute left-0 top-0 inline-flex items-center sm:left-2 sm:top-1">
          <img src={logo} alt="Potencia" className="h-10 w-auto sm:h-12 opacity-80" />
        </a>
        <nav className="mt-3 flex w-[90%] items-center justify-between rounded-full glass-effect px-4 py-2 text-base shadow-glass sm:mt-4 sm:px-6">
          <a 
            href="#inicio" 
            className={`font-medium transition-all duration-300 ${
              currentSection === 0 ? 'text-primary' : 'text-text-on-glass hover:text-primary'
            }`}
          >
            Inicio
          </a>
          <a 
            href="#sobre-nosotros" 
            className={`font-medium transition-all duration-300 ${
              currentSection === 1 ? 'text-primary' : 'text-text-on-glass hover:text-primary'
            }`}
          >
            Sobre Nosotros
          </a>
          <a href="#equipo" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Nuestro equipo
          </a>
          <a href="#casos" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Casos de Éxito
          </a>
          <a href="#servicios" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Servicios
          </a>
          <a href="#clientes" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Clientes
          </a>
          <a href="#publicaciones" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Publicaciones
          </a>
          <a href="#contacto" className="text-text-on-glass hover:text-primary transition-all duration-300">
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
}