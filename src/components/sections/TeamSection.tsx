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
      className="relative w-full min-h-screen snap-start pt-24 md:pt-32 lg:pt-36 pb-16"
    >
      {/* Header fijo está en HomePage */}

      {/* Contenedor central para imágenes y botón */}
      <div
        className="container relative flex flex-col items-center justify-between min-h-[calc(90svh-220px)] md:min-h-[calc(105vh-220px)] pt-4 pb-6 px-4"
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
                      className="rounded-[24px] w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[200px] md:h-[300px] object-cover shadow-md transition-transform duration-300 ease-out group-hover:-translate-y-3 group-active:-translate-y-3 group-focus:-translate-y-3"
                    />
                    {/* Banner dentro de la foto, alineado al borde inferior */}
                    <img
                      src={member.banner}
                      alt={`${member.name} banner`}
                      className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100%] sm:w-[100%] md:w-[100%] rounded-[16px] shadow-lg"
                    />
                  </div>
                </div>

                {/* Descripción debajo de la foto, nunca encima */}
                <div className="absolute left-1/2 top-[200px] sm:top-[260px] md:top-[300px] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div 
                    className="w-[260px] sm:w-[320px] md:w-[380px] max-w-none rounded-2xl border border-white/30 px-3 py-2 text-[11px] sm:text-xs md:text-sm text-black shadow-lg backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.6) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    {member.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón ver más estilo "liquid glass" */}
        <button 
          className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm sm:text-base text-black shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.6) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          ver más
        </button>
      </div>

      {/* Overlay eliminado para mantener un fondo completamente uniforme */}
    </section>
  )
}


