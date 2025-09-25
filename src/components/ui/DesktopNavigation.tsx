import { NAVIGATION_ITEMS } from '../../lib/constants'

interface DesktopNavigationProps {
  currentSection: number
}

export function DesktopNavigation({ currentSection }: DesktopNavigationProps) {
  return (
    <nav className="hidden lg:flex mt-3 w-[90%] items-stretch justify-center gap-3 sm:gap-4 lg:gap-6 rounded-full border border-white/40 bg-white/30 px-4 text-base shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 sm:mt-4 sm:px-6">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.sectionIndex === currentSection
        
        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault()
          const targetId = item.href.replace('#', '')
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={handleClick}
            className={`px-3 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap flex items-center justify-center h-full ${
              isActive 
                ? 'text-indigo-700 bg-white/60 shadow-sm' 
                : 'text-black hover:text-indigo-600 hover:bg-white/20'
            }`}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}