# Potencia-Liquid-Glass

Una aplicación web moderna con efectos de glassmorphism y navegación fluida, construida con React, TypeScript y Tailwind CSS.

## 🚀 Stack Tecnológico

- **React 18** - Biblioteca de UI con Hooks y Suspense
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de CSS utility-first
- **React Router** - Routing del lado del cliente
- **TanStack Query** - Manejo de estado del servidor
- **Lucide React** - Biblioteca de iconos

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Configuración de la aplicación
│   ├── router.tsx         # Configuración de rutas
│   └── ui/
│       └── RootLayout.tsx # Layout principal
├── components/            # Componentes reutilizables
│   ├── layout/           # Componentes de layout
│   │   └── Header.tsx    # Header principal
│   ├── pages/            # Páginas específicas
│   │   └── NotFound.tsx  # Página 404
│   ├── sections/         # Secciones de página
│   │   ├── HeroSection.tsx
│   │   └── AboutSection.tsx
│   └── ui/               # Componentes de UI base
│       ├── Logo.tsx
│       ├── DesktopNavigation.tsx
│       ├── MobileNavigation.tsx
│       └── MobileMenuButton.tsx
├── features/             # Features por dominio
│   ├── home/
│   │   └── HomePage.tsx
│   └── about/
│       └── AboutPage.tsx
├── hooks/                # Hooks personalizados
│   ├── useScrollSection.ts
│   └── useMobileMenu.ts
├── lib/                  # Utilidades y constantes
│   └── constants.ts
└── assets/               # Recursos estáticos
    ├── background.png
    ├── logoPotencia.png
    └── logoPotenciaTransparente.png
```

## 🎨 Características de Diseño

### Glassmorphism
- Efectos de cristal líquido con `backdrop-blur`
- Transparencias controladas con CSS variables
- Bordes semitransparentes para profundidad

### Responsive Design
- Mobile-first approach
- Navegación adaptativa (desktop/mobile)
- Tipografía y espaciado escalables
- Imágenes responsivas con `object-fit`

### Navegación Inteligente
- Detección automática de sección activa
- Transiciones suaves entre secciones
- Menú hamburguesa para móviles
- Estados visuales claros (activo/hover)

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Formateo de código
npm run format
```

## 📱 Funcionalidades

### Navegación por Scroll
- Detección automática de la sección visible
- Actualización del estado de navegación
- Transiciones fluidas entre secciones

### Menú Móvil
- Botón hamburguesa con animación
- Dropdown con fondo sólido
- Z-index optimizado para evitar superposiciones
- Cierre automático al navegar

### Optimizaciones
- Lazy loading de rutas
- Componentes altamente reutilizables
- Hooks personalizados para lógica compartida
- Constantes centralizadas para mantenimiento

## 🎯 Buenas Prácticas Implementadas

1. **Separación de Responsabilidades**
   - Componentes pequeños y enfocados
   - Hooks para lógica reutilizable
   - Constantes centralizadas

2. **Accesibilidad**
   - Etiquetas aria-label apropiadas
   - Navegación por teclado
   - Contraste de colores optimizado

3. **Performance**
   - Code splitting automático
   - Lazy loading de rutas
   - Optimización de imágenes

4. **Mantenibilidad**
   - TypeScript para tipado
   - Estructura de carpetas clara
   - Nomenclatura consistente

---

## Editar el Proyecto

**Usar Lovable (Recomendado)**

Visita el [Proyecto en Lovable](https://lovable.dev/projects/bdca592f-af62-4546-9372-df512bceb767) y comienza a usar prompts.

**Usar tu IDE preferido**

```sh
# Clonar el repositorio
git clone <TU_URL_GIT>

# Navegar al directorio
cd <NOMBRE_DEL_PROYECTO>

# Instalar dependencias
npm i

# Iniciar servidor de desarrollo
npm run dev
```

## Deployment

Abre [Lovable](https://lovable.dev/projects/bdca592f-af62-4546-9372-df512bceb767) y haz clic en Share -> Publish.
