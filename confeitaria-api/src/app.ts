import cors from '@fastify/cors'
import fastify from 'fastify'

import { inventoryRoutes } from '@/http/routes'

export const app = fastify()

app.register(inventoryRoutes)
app.register(cors, {
  origin: '*',
})
