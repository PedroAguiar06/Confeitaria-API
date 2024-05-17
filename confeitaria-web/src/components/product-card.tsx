interface ProductCardProps {
  id: string
  title: string
  description: string
  quantity: string
  price: string
}

export function ProductCard({
  id,
  title,
  description,
  quantity,
  price,
}: ProductCardProps) {
  return (
    <div>
      <li className="space-y-2">
        <p>ID do Produto: {id}</p>
        <p>Nome do Produto: {title}</p>
        <p>Descrição: {description}</p>
        <p>Quantidade: {quantity}</p>
        <p>Preço: {price}</p>
      </li>
    </div>
  )
}
