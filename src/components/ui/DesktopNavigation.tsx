import { NAVIGATION_ITEMS } from '../../lib/constants'

interface DesktopNavigationProps {
  currentSection: number
}

export function DesktopNavigation({ currentSection }: DesktopNavigationProps) {
  return (
    <nav className="hidden lg:flex mt-3 w-[90%] items-center justify-between rounded-full border border-white/40 bg-white/30 px-4 py-2 text-base shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 sm:mt-4 sm:px-6">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = item.sectionIndex === currentSection
        
        return (
          <a
            key={item.href}
            href={item.href}
            className={`px-2 py-1 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
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