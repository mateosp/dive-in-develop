import { Z_INDEX } from '../../lib/constants'
import { casesData } from '../../features/cases/casesData'
import { useEffect, useRef, useState } from 'react'

interface CasesSectionProps {
  isVisible: boolean
}

export function CasesSection({ isVisible }: CasesSectionProps) {
  const [index, setIndex] = useState(0)
  const total = casesData.length

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [slideWidth, setSlideWidth] = useState<number>(0)

  const updateSlideWidth = () => {
    const container = containerRef.current
    if (!container) return
    const width = container.clientWidth
    // Una sola carta visible al centro: 100% del contenedor
    setSlideWidth(Math.round(width))
  }

  useEffect(() => {
    updateSlideWidth()
    window.addEventListener('resize', updateSlideWidth)
    return () => window.removeEventListener('resize', updateSlideWidth)
  }, [])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    if (e.deltaY > 0) {
      setIndex((i) => Math.min(total - 1, i + 1))
    } else if (e.deltaY < 0) {
      setIndex((i) => Math.max(0, i - 1))
    }
  }

  const handleWheelNative = (e: WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    if (e.deltaY > 0) {
      setIndex((i) => Math.min(total - 1, i + 1))
    } else if (e.deltaY < 0) {
      setIndex((i) => Math.max(0, i - 1))
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Añadir listener nativo para capturar el evento antes
    container.addEventListener('wheel', handleWheelNative, { passive: false })
    
    return () => {
      container.removeEventListener('wheel', handleWheelNative)
    }
  }, [total])

  const scrollToSlide = (slideIndex: number) => {
    const scroller = containerRef.current
    if (!scroller || slideWidth === 0) return
    const gap = 16
    const offset = slideIndex * (slideWidth + gap)
    scroller.scrollTo({ left: offset, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToSlide(index)
  }, [index, slideWidth])

  return (
    <section id="casos" className="relative w-full min-h-screen snap-start pt-[180px] pb-16">
      <div className="container relative px-4" style={{ zIndex: Z_INDEX.CONTENT }}>
        {/* Contenedor del carrusel con botones externos */}
        <div className="relative flex items-center gap-4">

          {/* Carrusel */}
          <div
            ref={containerRef}
            className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            onWheel={handleWheel}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-stretch" style={{ gap: '16px' }}>
              {casesData.map((item, i) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 snap-start"
                  style={{ width: `${slideWidth}px` }}
                >
                  <div className="w-full rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/45 p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Imagen */}
                      <div className="w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full aspect-[16/11] object-cover rounded-[28px]"
                        />
                      </div>

                      {/* Texto */}
                      <div className="text-left text-black">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{item.title}</h2>
                        <p className="text-sm md:text-base leading-relaxed opacity-80 whitespace-pre-line">{item.description}</p>
                        <p className="text-xs md:text-sm mt-4 italic opacity-70">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Indicador de posición */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {casesData.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-white/80' : 'bg-white/30'}`}
            />
          ))}
        </div>

        {/* Botón ver más */}
        <div className="flex justify-center mt-6">
          <button className="inline-block rounded-full border border-white/40 bg-white/30 px-6 py-3 text-sm sm:text-base text-black shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 hover:bg-white/40 transition-all duration-300">
            ver más
          </button>
        </div>
      </div>
    </section>
  )
}


