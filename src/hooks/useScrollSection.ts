import { useState, useEffect } from 'react'

export function useScrollSection() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const container = document.getElementById('snap-scroll') || window
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = visible[0].target.getAttribute('id')
          if (id === 'inicio') setCurrentSection(0)
          else if (id === 'sobre-nosotros') setCurrentSection(1)
          else if (id === 'equipo') setCurrentSection(2)
          else if (id === 'casos') setCurrentSection(3)
          else if (id === 'servicios') setCurrentSection(4)
          else if (id === 'clientes') setCurrentSection(5)
        }
      },
      {
        root: container instanceof Window ? null : (container as Element),
        threshold: [0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return currentSection
}