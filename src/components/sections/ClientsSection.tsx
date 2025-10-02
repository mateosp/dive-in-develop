import { Z_INDEX } from '../../lib/constants'
import { useState, useEffect } from 'react'
import { clientsData } from '../../features/clients/clientsData'

interface ClientsSectionProps {
  isVisible: boolean
}

// Data de clientes importada

export function ClientsSection({ isVisible }: ClientsSectionProps) {
  const [showAllLogos, setShowAllLogos] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // En móvil solo mostrar los primeros 8 logos, en desktop mostrar todos
  const visibleLogos = isMobile && !showAllLogos ? clientsData.slice(0, 8) : clientsData
  const hasMoreLogos = isMobile && clientsData.length > 8

  return (
    <section id="clientes" className="relative w-full min-h-[80svh] md:min-h-screen snap-start pt-[calc(var(--header-height)-80px)] md:pt-[calc(var(--header-height)+68px)] pb-8">
      <div className="container relative px-4" style={{ zIndex: Z_INDEX.CONTENT }}>

        {/* Grid de logos */}
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
            {visibleLogos.map((client, index) => (
              <div
                key={index}
                className="group relative w-full max-w-[120px] aspect-square flex items-center justify-center p-3 md:p-4 rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/35"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.6) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  loading="lazy"
                />
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Botón ver más/ver menos - solo visible en móvil */}
        {hasMoreLogos && (
          <div className="flex justify-center mt-14 md:hidden">
            <button
              onClick={() => setShowAllLogos(!showAllLogos)}
              className="inline-block rounded-full border border-white/30 px-6 py-3 text-sm text-black shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.6) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              {showAllLogos ? 'ver menos' : 'ver más'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
