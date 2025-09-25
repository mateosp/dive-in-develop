import { useState, useEffect } from 'react'

export function useScrollSection() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY

      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection(0) // Hero section
      } else {
        setCurrentSection(1) // About section
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return currentSection
}