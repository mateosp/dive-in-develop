import { Z_INDEX } from '../../lib/constants'
import { useState } from 'react'

interface FooterSectionProps {
  isVisible: boolean
}

export function FooterSection({ isVisible }: FooterSectionProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para manejar el envío del email
    console.log('Email enviado:', email)
    setEmail('')
  }

  return (
    <section id="footer" className="relative w-full h-[30vh] snap-start overflow-hidden">
      {/* Bordeado curvo en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-blue-900">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-b-full"></div>
      </div>

      {/* Contenido principal del footer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: 'url(/src/assets/footerBG.png)',
          zIndex: Z_INDEX.CONTENT 
        }}
      >
        <div className="w-full px-4 py-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center h-full">
            
            {/* Lado izquierdo - Logo y formulario */}
            <div className="flex flex-col items-center md:items-start space-y-4 -mt-4">
              {/* Logo Potencia */}
              <div className="w-40 h-12 flex items-center justify-center">
                <img 
                  src="/src/assets/logoPotencia2.png" 
                  alt="Potencia Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Texto de suscripción */}
              <p className="text-white text-lg text-center md:text-left max-w-md font-gotham-book">
                Suscríbete para estar enterado <br/> de nuestras novedades
              </p>

              {/* Formulario de email */}
              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex rounded-full overflow-hidden shadow-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-gotham-book"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-gotham-book hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            {/* Lado derecho - Logo blanco posicionado completamente a la derecha */}
            <div className="relative h-full hidden md:flex items-center justify-end -mr-4">
              <div className="w-48 h-48 flex items-center justify-end">
                <img 
                  src="/src/assets/logoPotenciaBlanco.png" 
                  alt="Potencia Logo Blanco" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
