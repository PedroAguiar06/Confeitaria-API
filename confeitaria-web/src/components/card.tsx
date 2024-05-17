import { IconType } from 'react-icons'

interface CardProps {
  icon: IconType
  title: string
}

export function Card({ icon: Icon, title }: CardProps) {
  return (
    <li className="flex items-center border px-8 py-6 rounded-lg gap-4 hover:bg-zinc-800 transition-colors">
      <Icon className="size-8" />
      <span className="text-lg">{title}</span>
    </li>
  )
}
