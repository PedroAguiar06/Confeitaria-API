import { api } from '../lib/axios'

export interface RegisterProductBody {
  id: string
  name: string
  quantity: string
  description: string
  price: string
}

export async function registerProduct({
  id,
  name,
  quantity,
  description,
  price,
}: RegisterProductBody) {
  await api.post('/register-products', {
    id,
    name,
    quantity,
    description,
    price,
  })
}
