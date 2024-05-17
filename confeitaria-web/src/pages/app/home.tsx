import { LuPhoneCall } from 'react-icons/lu'
import { GoContainer } from 'react-icons/go'
import { FiMapPin } from 'react-icons/fi'
import { GrCertificate } from 'react-icons/gr'

import { Card } from '../../components/card'

export function Home() {
  return (
    <div className="px-10 py-10 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-8">Sobre o cliente:</h3>

      <div className="space-y-2 flex flex-col items-center">
        <p>
          Localizada na cidade de Itapecerica da Serra - SP, a Vanessa Lima
          Confeitaria traz para o mercado o que há de melhor a area da
          Confeitaria
        </p>
        <p>
          Nossa missão é: &quot;Proporcionar auto-estima e qualidade de vida aos
          clientes&ldquo;.
        </p>
        <p>
          O atendimento possui padrão de excelência e agilidade, garantindo
          qualidade e satisfação dos nossos clientes.
        </p>
      </div>

      <ul className="flex gap-12 pt-20">
        <Card icon={LuPhoneCall} title="Atendimento aos clientes" />
        <Card icon={GoContainer} title="Espaço diferenciado" />
        <Card icon={FiMapPin} title="Localização" />
        <Card icon={GrCertificate} title="Profissionais Qualificados" />
      </ul>
    </div>
  )
}
