import { FastifyInstance } from 'fastify'

// import { z } from 'zod'
import * as InventoryController from '@/http/inventory-controller'
import { Product } from '@/type/product'

// const productId = z.object({
//   id: z.string().uuid(),
// })

export async function inventoryRoutes(app: FastifyInstance): Promise<void> {
  // Rota para criar um novo item no estoque
  app.post('/register-products', async (request, reply) => {
    const { name, quantity, description, price } = request.body as Product
    const newItem = await InventoryController.registerProductOnInventory({
      name,
      quantity,
      description,
      price,
    })

    reply.send(newItem)
  })

  // Rota para buscar todos os itens do estoque
  app.get('/products', async (request, reply) => {
    const allItems = await InventoryController.getAllProductsFromInventory()

    reply.send(allItems)
  })

  // // Rota para buscar um item específico do estoque
  // app.get('/:id', async (request, reply) => {
  //   const { id } = productId.parse(request.params)
  //   const item = await InventoryController.getProductInventoryById(id)

  //   reply.send(item)
  // })

  // // Rota para atualizar um item do estoque
  // app.patch('/:id', async (request, reply) => {
  //   const { id } = productId.parse(request.params)
  //   const { name, quantity, description, price } = request.body as Product
  //   const updatedItem = await InventoryController.updateProductOnInventory(id, {
  //     name,
  //     quantity,
  //     description,
  //     price,
  //   })

  //   reply.send(updatedItem)
  // })

  // // Rota para deletar um item do estoque
  // app.delete('/:id', async (request, reply) => {
  //   const { id } = productId.parse(request.params)
  //   await InventoryController.deleteProductInventory(id)

  //   reply.send({ message: 'Item deletado com sucesso!' })
  // })
}
