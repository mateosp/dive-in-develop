export const NAVIGATION_ITEMS = [
  { href: '#inicio', label: 'Inicio', sectionIndex: 0 },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros', sectionIndex: 1 },
  { href: '#equipo', label: 'Nuestro equipo', sectionIndex: 2 },
  { href: '#casos', label: 'Casos de Éxito', sectionIndex: 3 },
  { href: '#servicios', label: 'Servicios', sectionIndex: null },
  { href: '#clientes', label: 'Clientes', sectionIndex: null },
  { href: '#publicaciones', label: 'Publicaciones', sectionIndex: null },
  { href: '#contacto', label: 'Contáctanos', sectionIndex: null },
] as const

export const Z_INDEX = {
  BACKGROUND: 10,
  CONTENT: 20,
  HEADER: 30,
  MOBILE_MENU: 100,
} as const