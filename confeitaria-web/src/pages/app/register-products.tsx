import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useMutation } from '@tanstack/react-query'
import { registerProduct } from '../../api/register-product'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const registerProductForm = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  quantity: z.string(),
  price: z.string(),
})

type RegisterProductForm = z.infer<typeof registerProductForm>

export function RegisterProducts() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<RegisterProductForm>()

  const { mutateAsync: registerProductFn } = useMutation({
    mutationFn: registerProduct,
  })

  async function handleRegister(data: RegisterProductForm) {
    try {
      await registerProductFn({
        id: data.id,
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
      })

      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex items-center mx-auto">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col w-[420px] border border-zinc-700 px-8 py-4 rounded-lg"
      >
        <div className="flex items-center gap-4 py-2 mb-2">
          <Link to="/">
            <FaArrowLeftLong className="size-6 hover:text-emerald-500 transition-colors" />
          </Link>

          <h2 className="font-semibold text-zinc-100 text-xl">
            Cadastrar Produto
          </h2>
        </div>

        <div className="w-full bg-zinc-700 h-px mb-8" />

        <label className="text-sm mb-2">Nome do Produto</label>
        <input
          type="text"
          placeholder="Bolo de Cenoura"
          className="px-3 py-2 border-2 text-zinc-900 border-zinc-500 rounded-md focus:outline-none focus:border-zinc-500"
          {...register('name')}
        />

        <label className="mt-8 mb-2 text-sm">Descrição</label>
        <input
          type="text"
          placeholder="Bolo feito com massa de cenoura"
          className="px-3 py-2 border-2 text-zinc-900 border-zinc-500 rounded-md focus:outline-none focus:border-zinc-500"
          {...register('description')}
        />

        <label className="mt-8 mb-2 text-sm">Quantidade</label>
        <input
          type="text"
          placeholder="1"
          className="px-3 py-2 border-2 text-zinc-900 border-zinc-500 rounded-md focus:outline-none focus:border-zinc-500"
          {...register('quantity')}
        />

        <label className="mt-8 mb-2 text-sm">Preço</label>
        <input
          type="text"
          placeholder="59,90"
          className="px-3 py-2 border-2 text-zinc-900 border-zinc-500 rounded-md focus:outline-none focus:border-zinc-500"
          {...register('price')}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-emerald-600 mt-8 py-2 font-bold hover:bg-emerald-700 rounded-md text-zinc-50 transition-colors"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  )
}
