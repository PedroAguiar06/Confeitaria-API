import { Outlet } from 'react-router-dom'

export function FormLayout() {
  return (
    <div className="bg-zinc-900 text-zinc-200 min-h-screen flex py-10 px-10">
      <Outlet />
    </div>
  )
}
