import alcaldiaMonteria from '../../assets/alcaldiaMonteria.png'
import BID from '../../assets/BID.png'
import clienteAlcaldiaCartagena from '../../assets/clienteAlcaldiaCartagena.png'
import clienteAlcaldiaValledupar1 from '../../assets/clienteAlcaldiaValledupar1.png'
import clienteArgos from '../../assets/clienteArgos.png'
import clienteBancoDesarrollo from '../../assets/clienteBancoDesarrollo.png'
import clienteCamaraSantaMarta from '../../assets/clienteCamaraSantaMarta.png'
import clienteFetivalVallenato from '../../assets/clienteFetivalVallenato.png'
import clienteGobernacionArchipielago from '../../assets/clienteGobernacionArchipielago.png'
import clienteGobernacionAtlantico from '../../assets/clienteGobernacionAtlantico.png'
import clienteGobernacionCesar from '../../assets/clienteGobernacionCesar.png'
import clientePuertaDeOro from '../../assets/clientePuertaDeOro.png'
import clienteRepublicaDominicana from '../../assets/clienteRepublicaDominicana.png'
import clienteSantaCruz from '../../assets/clienteSantaCruz.png'
import clienteSantoDomingo from '../../assets/clienteSantoDomingo.png'
import gobernacionCordoba from '../../assets/gobernacionCordoba.png'
import trasLaPerla from '../../assets/trasLaPerla.png'

export interface ClientItem {
  id: string
  name: string
  image: string
  description?: string
}

export const clientsData: ClientItem[] = [
  { id: 'alcaldia-monteria', name: 'Alcaldía de Montería', image: alcaldiaMonteria },
  { id: 'bid', name: 'BID', image: BID },
  { id: 'alcaldia-cartagena', name: 'Alcaldía de Cartagena', image: clienteAlcaldiaCartagena },
  { id: 'alcaldia-valledupar', name: 'Alcaldía de Valledupar', image: clienteAlcaldiaValledupar1 },
  { id: 'argos', name: 'Argos', image: clienteArgos },
  { id: 'banco-desarrollo', name: 'Banco de Desarrollo', image: clienteBancoDesarrollo },
  { id: 'camara-santa-marta', name: 'Cámara de Comercio Santa Marta', image: clienteCamaraSantaMarta },
  { id: 'festival-vallenato', name: 'Festival Vallenato', image: clienteFetivalVallenato },
  { id: 'gobernacion-archipielago', name: 'Gobernación del Archipiélago', image: clienteGobernacionArchipielago },
  { id: 'gobernacion-atlantico', name: 'Gobernación del Atlántico', image: clienteGobernacionAtlantico },
  { id: 'gobernacion-cesar', name: 'Gobernación del Cesar', image: clienteGobernacionCesar },
  { id: 'puerta-de-oro', name: 'Puerta de Oro', image: clientePuertaDeOro },
  { id: 'republica-dominicana', name: 'República Dominicana', image: clienteRepublicaDominicana },
  { id: 'santa-cruz', name: 'Santa Cruz', image: clienteSantaCruz },
  { id: 'santo-domingo', name: 'Santo Domingo', image: clienteSantoDomingo },
  { id: 'gobernacion-cordoba', name: 'Gobernación de Córdoba', image: gobernacionCordoba },
  { id: 'tras-la-perla', name: 'Tras la Perla', image: trasLaPerla },
]


