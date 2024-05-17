import { api } from '../lib/axios'

interface FetchProductsResponse {
  products: {
    id: string
    name: string
    quantity: string
    description: string
    price: string
  }[]
}

export async function fetchProducts() {
  const response = await api.get<FetchProductsResponse['products']>('/products')

  return response.data
}
