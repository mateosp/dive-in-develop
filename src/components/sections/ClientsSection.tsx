import { Z_INDEX } from '../../lib/constants'

interface ClientsSectionProps {
  isVisible: boolean
}

// Lista de logos de clientes
const clientLogos = [
  { name: 'Alcaldía de Montería', src: '/src/assets/alcaldiaMonteria.png' },
  { name: 'BID', src: '/src/assets/BID.png' },
  { name: 'Alcaldía de Cartagena', src: '/src/assets/clienteAlcaldiaCartagena.png' },
  { name: 'Alcaldía de Valledupar', src: '/src/assets/clienteAlcaldiaValledupar1.png' },
  { name: 'Argos', src: '/src/assets/clienteArgos.png' },
  { name: 'Banco de Desarrollo', src: '/src/assets/clienteBancoDesarrollo.png' },
  { name: 'Cámara de Comercio Santa Marta', src: '/src/assets/clienteCamaraSantaMarta.png' },
  { name: 'Festival Vallenato', src: '/src/assets/clienteFetivalVallenato.png' },
  { name: 'Gobernación del Archipiélago', src: '/src/assets/clienteGobernacionArchipielago.png' },
  { name: 'Gobernación del Atlántico', src: '/src/assets/clienteGobernacionAtlantico.png' },
  { name: 'Gobernación del Cesar', src: '/src/assets/clienteGobernacionCesar.png' },
  { name: 'Puerta de Oro', src: '/src/assets/clientePuertaDeOro.png' },
  { name: 'República Dominicana', src: '/src/assets/clienteRepublicaDominicana.png' },
  { name: 'Santa Cruz', src: '/src/assets/clienteSantaCruz.png' },
  { name: 'Santo Domingo', src: '/src/assets/clienteSantoDomingo.png' },
  { name: 'Gobernación de Córdoba', src: '/src/assets/gobernacionCordoba.png' },
  { name: 'Tras la Perla', src: '/src/assets/trasLaPerla.png' },
]

export function ClientsSection({ isVisible }: ClientsSectionProps) {
  return (
    <section id="clientes" className="relative w-full min-h-[80svh] md:min-h-screen snap-start pt-[calc(var(--header-height)+68px)] pb-8">
      <div className="container relative px-4" style={{ zIndex: Z_INDEX.CONTENT }}>

        {/* Grid de logos */}
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                 className="group relative w-full max-w-[120px] aspect-square flex items-center justify-center p-3 md:p-4 rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/35"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.6) 100%)',
                   backdropFilter: 'blur(10px)',
                   WebkitBackdropFilter: 'blur(10px)',
                 }}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  loading="lazy"
                />
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
