import { useState, useEffect } from 'react'

export function useScrollSection() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY

      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection(0) // Hero section
      } else if (scrollPosition < windowHeight * 1.5) {
        setCurrentSection(1) // About section
      } else {
        setCurrentSection(2) // Team section
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return currentSection
}