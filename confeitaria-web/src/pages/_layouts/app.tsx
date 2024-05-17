import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

export function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-zinc-900 text-zinc-200 px-10">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
