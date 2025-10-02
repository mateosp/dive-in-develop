import { NAVIGATION_ITEMS, Z_INDEX } from '../../lib/constants'

interface MobileNavigationProps {
  currentSection: number
  isOpen: boolean
  onClose: () => void
}

export function MobileNavigation({ currentSection, isOpen, onClose }: MobileNavigationProps) {
  if (!isOpen) return null

  return (
    <div className={`absolute top-full left-4 right-4 mt-4 lg:hidden`} style={{ zIndex: Z_INDEX.MOBILE_MENU }}>
      <nav className="rounded-2xl border border-gray-200 bg-white py-4 shadow-xl">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = item.sectionIndex === currentSection
          
          return (
            <a
              key={item.href}
              href={item.href}
              className={`block px-6 py-3 font-gotham-book transition-colors duration-200 ${
                isActive 
                  ? 'text-custom-blue bg-indigo-50' 
                  : 'text-gray-800 hover:text-custom-blue hover:bg-gray-50'
              }`}
              onClick={onClose}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}