import { BsCake2Fill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-center py-8 flex-col gap-4 border-b border-zinc-700">
      <div className="flex gap-8 items-center">
        <BsCake2Fill className="size-10" />
        <strong className="text-3xl">Sistema de Gestão de Estoque</strong>
      </div>

      <ul className="flex gap-10 text">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/register-products">Cadastro de Produto</Link>
        </li>
        <li>
          <Link to="/products">Lista de Produtos</Link>
        </li>
        <li>
          <Link to="/about-us">Quem somos</Link>
        </li>
      </ul>
    </header>
  )
}
