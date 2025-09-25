import carlosAcosta from '../../assets/carlosAcostaRectangular.png'
import juanManuel from '../../assets/juanManuelRectangular.png'
import ricardoPlata from '../../assets/ricardoPlataRectangular.png'
import ricardoVives from '../../assets/ricardoVivesRectangular.png'

export interface TeamMember {
  id: string
  name: string
  photo: string
  description: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'juan-manuel',
    name: 'Juan Manuel',
    photo: juanManuel,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
  {
    id: 'carlos-acosta',
    name: 'Carlos Acosta',
    photo: carlosAcosta,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
  {
    id: 'ricardo-plata',
    name: 'Ricardo Plata',
    photo: ricardoPlata,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
  {
    id: 'ricardo-vives',
    name: 'Ricardo Vives',
    photo: ricardoVives,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia.',
  },
]


