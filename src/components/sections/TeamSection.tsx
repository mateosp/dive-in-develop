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
              <div
                key={member.id}
                className="group relative cursor-pointer w-[140px] sm:w-[180px] md:w-[200px] h-[260px] sm:h-[340px] md:h-[380px]"
                tabIndex={0}
              >
                {/* Contenedor de imagen con banner pegado al borde inferior */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[140px] sm:w-[180px] md:w-[200px]">
                  <div className="relative">
                    {/* Foto */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="rounded-[24px] w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[300px] object-cover shadow-md transition-transform duration-300 ease-out group-hover:-translate-y-2 group-active:-translate-y-2 group-focus:-translate-y-2"
                    />
                    {/* Banner dentro de la foto, alineado al borde inferior */}
                    <img
                      src={member.banner}
                      alt={`${member.name} banner`}
                      className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[85%] sm:w-[80%] md:w-[95%] rounded-[16px] shadow-lg"
                    />
                  </div>
                </div>

                {/* Descripción oculta, aparece con efecto glass */}
                <div
                  className="absolute inset-x-0 bottom-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-focus:opacity-100 transition-all duration-300"
                >
                  <div className="rounded-2xl border border-white/40 bg-white/30 px-3 py-2 text-[11px] sm:text-xs md:text-sm text-black shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25">
                    {member.description}
                  </div>
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


