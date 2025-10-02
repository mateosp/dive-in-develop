import { servicesData } from '../../features/services/servicesData'
import { Z_INDEX } from '../../lib/constants'
import { useEffect, useRef, useState } from 'react'

interface ServicesSectionProps {
  isVisible: boolean
}

export function ServicesSection({ isVisible }: ServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [itemHeight, setItemHeight] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [index, setIndex] = useState<number>(0)

  const VISIBLE_COUNT = 4
  const GAP_PX = 16

  const updateHeights = () => {
    const container = containerRef.current
    if (!container) return
    const firstItem = container.querySelector('[data-service-item]') as HTMLElement | null
    if (!firstItem) return
    const h = Math.round(firstItem.getBoundingClientRect().height)
    if (h > 0) {
      setItemHeight(h)
      setContainerHeight(VISIBLE_COUNT * h + (VISIBLE_COUNT - 1) * GAP_PX)
    }
  }

  useEffect(() => {
    updateHeights()
    window.addEventListener('resize', updateHeights)
    return () => window.removeEventListener('resize', updateHeights)
  }, [])

  const handleWheelNative = (e: WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    
    if (window.innerWidth < 768) {
      // Para móvil: navegación de 2 en 2
      if (e.deltaY > 0) {
        setIndex((i) => Math.min(servicesData.length - 1, i + 2))
      } else if (e.deltaY < 0) {
        setIndex((i) => Math.max(0, i - 2))
      }
    } else {
      // Para desktop: navegación normal
      if (e.deltaY > 0) {
        setIndex((i) => Math.min(servicesData.length - 1, i + 1))
      } else if (e.deltaY < 0) {
        setIndex((i) => Math.max(0, i - 1))
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener('wheel', handleWheelNative, { passive: false })
    return () => container.removeEventListener('wheel', handleWheelNative)
  }, [])

  const scrollToIndex = (targetIndex: number) => {
    const scroller = containerRef.current
    if (!scroller) return
    
    if (window.innerWidth < 768) {
      // Para móvil: scroll horizontal por grupos de 2
      const containerWidth = scroller.clientWidth
      const groupIndex = Math.floor(targetIndex / 2)
      const offset = groupIndex * containerWidth
      scroller.scrollTo({ left: offset, behavior: 'smooth' })
    } else {
      // Para desktop: scroll vertical
      if (itemHeight === 0) return
      const offset = targetIndex * (itemHeight + GAP_PX)
      scroller.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToIndex(index)
  }, [index, itemHeight])

  return (
    <section id="servicios" className="relative w-full min-h-[80svh] md:min-h-screen snap-start pt-[calc(var(--header-height)+30px)] md:pt-[calc(var(--header-height)+16px)] pb-24 md:pb-8">
      <div className="container relative px-4" style={{ zIndex: Z_INDEX.CONTENT }}>
        {/* Versión móvil: carrusel horizontal de 2 en 2 */}
        <div className="md:hidden">
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-stretch" style={{ gap: '16px' }}>
              {Array.from({ length: Math.ceil(servicesData.length / 2) }, (_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex-shrink-0 snap-start w-full"
                >
                  <div className="flex flex-col gap-4 h-[600px]">
                    {/* Primera carta */}
                    <div className="h-[290px] rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/45 p-4">
                      <div className="flex flex-col items-center text-center gap-3 h-full">
                        {/* Foto/Logo */}
                        <div className="w-[80px] h-[80px] flex items-center justify-center">
                          <img src={servicesData[groupIndex * 2].image} alt={servicesData[groupIndex * 2].title} className="w-full h-full object-contain" />
                        </div>
                        {/* Título */}
                        <h3 className="text-lg font-gotham-bold text-custom-blue">{servicesData[groupIndex * 2].title}</h3>
                        {/* Texto */}
                        <p className="text-sm leading-relaxed opacity-80 text-black flex-1 font-gotham-book">
                          {servicesData[groupIndex * 2].description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Segunda carta (si existe) */}
                    {servicesData[groupIndex * 2 + 1] ? (
                      <div className="h-[290px] rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/45 p-4">
                        <div className="flex flex-col items-center text-center gap-3 h-full">
                          {/* Foto/Logo */}
                          <div className="w-[80px] h-[80px] flex items-center justify-center">
                            <img src={servicesData[groupIndex * 2 + 1].image} alt={servicesData[groupIndex * 2 + 1].title} className="w-full h-full object-contain" />
                          </div>
                          {/* Título */}
                          <h3 className="text-lg font-gotham-bold text-custom-blue">{servicesData[groupIndex * 2 + 1].title}</h3>
                          {/* Texto */}
                          <p className="text-sm leading-relaxed opacity-80 text-black flex-1 font-gotham-book">
                            {servicesData[groupIndex * 2 + 1].description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-[290px]"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador de posición para móvil */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: Math.ceil(servicesData.length / 2) }, (_, groupIndex) => (
              <button
                key={groupIndex}
                type="button"
                aria-label={`Ir al grupo ${groupIndex + 1}`}
                onClick={() => setIndex(groupIndex * 2)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${Math.floor(index / 2) === groupIndex ? 'bg-white/80' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Versión desktop: layout vertical original */}
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="overflow-y-auto scrollbar-hide snap-y snap-mandatory"
            style={{ height: containerHeight ? `${containerHeight}px` : undefined, rowGap: `${GAP_PX}px`, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-col" style={{ gap: `${GAP_PX}px` }}>
              {servicesData.map((srv) => (
                <div
                  key={srv.id}
                  data-service-item
                  className="snap-start w-[90%] mx-auto first:mt-14 sm:first:mt-12 md:first:mt-16 lg:first:mt-20 rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/45 p-2 sm:p-3 md:p-5 overflow-hidden max-h-[64px] md:max-h-[140px]"
                >
                  <div className="grid grid-cols-[48px_1fr] md:grid-cols-[88px_1fr] gap-2.5 md:gap-4 items-center">
                    <div className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] flex items-center justify-center">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-left text-black">
                      <h3 className="text-sm md:text-lg font-gotham-bold mb-0.5 md:mb-1 text-custom-blue">{srv.title}</h3>
                      <p className="text-[10px] md:text-sm leading-tight md:leading-relaxed opacity-80 font-gotham-book">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador vertical de posición para desktop */}
          <div className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none">
            {servicesData.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al servicio ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`transition-colors duration-200 w-2 h-2 rounded-full ${i === index ? 'bg-white/80' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


