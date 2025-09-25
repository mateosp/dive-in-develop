import carlosAcosta from '../../assets/carlosAcostaRectangular.png'
import juanManuel from '../../assets/juanManuelRectangular.png'
import ricardoPlata from '../../assets/ricardoPlataRectangular.png'
import ricardoVives from '../../assets/ricardoVivesRectangular.png'
import bannerCarlosAcosta from '../../assets/carlosAcosta.png'
import bannerJuanAlvarado from '../../assets/juanAlvarado.png'
import bannerRicardoPlata from '../../assets/ricardoPlata.png'
import bannerRicardoVives from '../../assets/ricardoVives.png'

export interface TeamMember {
  id: string
  name: string
  photo: string
  banner: string
  description: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'juan-manuel',
    name: 'Juan Manuel',
    photo: juanManuel,
    banner: bannerJuanAlvarado,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
  {
    id: 'carlos-acosta',
    name: 'Carlos Acosta',
    photo: carlosAcosta,
    banner: bannerCarlosAcosta,
    description:
      'Ingeniero de la Universidad de Columbia en Nueva York y ex Gerente de Ciudad en Barranquilla, lideró proyectos urbanos transformadores como el Gran Malecón y un galardonado sistema de parques. Dirigió la plantación de 150,000 árboles y transformó Puerta de Oro de organizadora de eventos a también una estructuradora de proyectos.',
  },
  {
    id: 'ricardo-plata',
    name: 'Ricardo Plata',
    photo: ricardoPlata,
    banner: bannerRicardoPlata,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
  {
    id: 'ricardo-vives',
    name: 'Ricardo Vives',
    photo: ricardoVives,
    banner: bannerRicardoVives,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
]


