import { prisma } from '@/lib/prisma'
import { Product } from '@/type/product'

// Criar novo produto no estoque
export async function registerProductOnInventory(
  productData: Product,
): Promise<Product> {
  const newProduct = await prisma.product.create({
    data: productData,
  })

  return newProduct
}

// Buscar todos os produtos do estoque
export async function getAllProductsFromInventory(): Promise<Product[]> {
  const allProducts = await prisma.product.findMany()

  return allProducts
}

// // Buscar um produto específico no estoque
// export async function getProductInventoryById(
//   id: string,
// ): Promise<Product | null> {
//   const product = await prisma.product.findUnique({
//     where: {
//       id,
//     },
//   })

//   return product
// }

// // Atualizar um produto no estoque
// export async function updateProductOnInventory(
//   id: string,
//   newData: Product,
// ): Promise<Product | null> {
//   const updatedProduct = await prisma.product.update({
//     where: {
//       id,
//     },
//     data: newData,
//   })

//   return updatedProduct
// }

// // Deletar um produto no estoque
// export async function deleteProductInventory(id: string): Promise<void> {
//   await prisma.product.delete({
//     where: {
//       id,
//     },
//   })
// }
