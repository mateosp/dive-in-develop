import { Menu, X } from 'lucide-react'

interface MobileMenuButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden absolute right-4 top-0 md:right-2 md:top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/40 bg-white/30 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/25 transition-all duration-200 hover:bg-white/40 flex items-center justify-center"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
      ) : (
        <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
      )}
    </button>
  )
}