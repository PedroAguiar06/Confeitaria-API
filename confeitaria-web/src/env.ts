import { z } from 'zod'

const envSchema = z.object({
  CONFEITARIA_API: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
