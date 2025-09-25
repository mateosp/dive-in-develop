import sample1 from '../../assets/background.png'
import granMalecon from '../../assets/granMalecon.png'
import parqueCentral from '../../assets/parqueCentral.png'
import corredorVerde from '../../assets/corredorVerde.png'
import puertaDeOro from '../../assets/puertaDeOro.png'
import siembraBarranquilla from '../../assets/siembraBarranquilla.png'
import ecoparqueMallorquin from '../../assets/ecoparqueMallorquin.png'
import TodosalParque from '../../assets/TodosalParque.png'

export interface CaseItem {
  id: string
  image: string
  title: string
  description: string
  subtitle: string
}

export const casesData: CaseItem[] = [
  {
    id: 'gran-malecon',
    image: granMalecon,
    title: 'GRAN MALECÓN',
    description:
      'Proyecto de revitalización urbana a lo largo del río Magdalena, incluye un paseo peatonal de 5.5 km, áreas recreativas, culturales y gastronómicas. Ha transformado la relación de la ciudad con el río, convirtiéndose en un icono turístico y de esparcimiento para los barranquilleros y visitantes.',
    subtitle: '(Urbanismo y Espacio Público)',
  },
  {
    id: 'parque-central',
    image: ecoparqueMallorquin,
    title: 'ECOPARQUE DE LA CIÉNAGA DE MALLORQUÍN',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia. Cras aliquet, orci at posuere dictum, turpis tellus volutpat arcu, ut facilisis augue eros a nunc.',
    subtitle: '(Intervención Urbana)',
  },
  {
    id: 'corredor-verde',
    image: siembraBarranquilla,
    title: 'PROYECTO SIEMBRA BARRANQUILLA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non magna vitae mi varius mattis. Suspendisse id posuere sapien. Integer viverra ipsum in arcu aliquam, non aliquet erat rutrum.',
    subtitle: '(Movilidad Sostenible)',
  },
  {
    id: 'parque-central',
    image: TodosalParque,
    title: 'PROGRAMA TODOS AL PARQUE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et sapien ut nibh dictum lacinia. Cras aliquet, orci at posuere dictum, turpis tellus volutpat arcu, ut facilisis augue eros a nunc.',
    subtitle: '(Intervención Urbana)',
  },
  {
    id: 'corredor-verde',
    image: puertaDeOro,
    title: 'PUERTA DE ORO, EMPRESA DE DESARROLLO CARIBE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non magna vitae mi varius mattis. Suspendisse id posuere sapien. Integer viverra ipsum in arcu aliquam, non aliquet erat rutrum.',
    subtitle: '(Movilidad Sostenible)',
  },
]


