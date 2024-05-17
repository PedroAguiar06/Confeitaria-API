import { FaArrowLeftLong } from 'react-icons/fa6'
import { ProductCard } from '../../components/product-card'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api/fetch-products'

export function ProductList() {
  const { data: result } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <div>
      <div className="flex items-center gap-4 py-2 mb-8">
        <Link to="/">
          <FaArrowLeftLong className="size-6 hover:text-emerald-500 transition-colors" />
        </Link>

        <h2 className="font-semibold text-zinc-100 text-xl">
          Listagem de Produtos
        </h2>
      </div>

      <ul>
        {result &&
          result.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                description={product.description}
                quantity={product.quantity}
                price={product.price}
              />
            )
          })}
      </ul>
    </div>
  )
}
