import gerenciaTerritorio from '../../assets/gerenciaTerritorio.png'
import urbanismoEspacioP from '../../assets/urbanismoEspacioP.png'
import desarrolloEconomicoT from '../../assets/desarrolloEconomicoT.png'
import finanzasPublicas from '../../assets/finanzasPublicas.png'

export interface ServiceItem {
  id: string
  title: string
  description: string
  image: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'gerencia-territorio',
    title: 'Gerencia de Territorio',
    description:
      'Metodología de trabajo gerencial que busca acompañar a los entes territoriales para mejorar sus indicadores de gestión y buscar eficiencia en las labores de la administración pública, enfocado en proyectos emblemáticos, contratación, presupuesto, área financiera y jurídica.',
    image: gerenciaTerritorio
  },
  {
    id: 'urbanismo-espacio-publico',
    title: 'Urbanismo y Espacio público',
    description:
      'Acompañamiento a entes territoriales para planear, priorizar y ejecutar intervenciones urbanas que mejoren la habitabilidad y el uso eficiente del espacio público con criterios de sostenibilidad y participación ciudadana.',
    image: urbanismoEspacioP,
  },
  {
    id: 'desarrollo-economico-turismo',
    title: 'Desarrollo Económico y Turismo',
    description:
      'Diseño e implementación de estrategias para dinamizar la actividad económica, fortalecer sectores productivos y posicionar destinos turísticos, articulando actores públicos y privados.',
    image: desarrolloEconomicoT,
  },
  {
    id: 'finanzas-publicas',
    title: 'Finanzas Públicas',
    description:
      'Gestión financiera integral para maximizar recursos, mejorar recaudo, optimizar el gasto y fortalecer la sostenibilidad fiscal con transparencia y buen gobierno.',
    image: finanzasPublicas,
  },
  {
    id: 'urbanismo-espacio-publico-2',
    title: 'Urbanismo y Espacio público',
    description:
      'Acompañamiento a entes territoriales para planear, priorizar y ejecutar intervenciones urbanas que mejoren la habitabilidad y el uso eficiente del espacio público con criterios de sostenibilidad y participación ciudadana.',
    image: urbanismoEspacioP,
  },
  {
    id: 'desarrollo-economico-turismo-2',
    title: 'Desarrollo Económico y Turismo',
    description:
      'Diseño e implementación de estrategias para dinamizar la actividad económica, fortalecer sectores productivos y posicionar destinos turísticos, articulando actores públicos y privados.',
    image: desarrolloEconomicoT,
  },
  {
    id: 'finanzas-publicas-2',
    title: 'Finanzas Públicas',
    description:
      'Gestión financiera integral para maximizar recursos, mejorar recaudo, optimizar el gasto y fortalecer la sostenibilidad fiscal con transparencia y buen gobierno.',
    image: finanzasPublicas,
  },
]


