import bg from '../../assets/background.png'
import { Header } from '../layout/Header'
import { Z_INDEX } from '../../lib/constants'
import { teamMembers } from '../../features/team/teamData'

interface TeamSectionProps {
  isVisible: boolean
}

export function TeamSection({ isVisible }: TeamSectionProps) {
  return (
    <section
      id="equipo"
      className={`fixed inset-0 w-full h-screen overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header con logo y navegación persistentes */}
      <Header />

      {/* Contenedor central para imágenes y botón */}
      <div
        className="container relative flex flex-col items-center justify-between h-[calc(100vh-160px)] pt-4 pb-6 px-4"
        style={{ zIndex: Z_INDEX.CONTENT }}
      >
        {/* Grid de miembros centrada verticalmente entre navbar y final de sección */}
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-[24px] w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[300px] object-cover shadow-md"
                />
                <div className="mt-2 text-white text-sm opacity-90 max-w-[200px] hidden md:block">
                  {member.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón ver más estilo "liquid glass" */}
        <button className="w-full max-w-xs rounded-full border border-white/40 bg-white/30 px-6 py-3 text-sm sm:text-base text-black shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 hover:bg-white/40 transition-all duration-300">
          ver más
        </button>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
        style={{ zIndex: Z_INDEX.BACKGROUND }}
      />
    </section>
  )
}


