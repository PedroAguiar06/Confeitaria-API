import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'
import { FormLayout } from './pages/_layouts/form'
import { RegisterProducts } from './pages/app/register-products'
import { ProductList } from './pages/app/product-list'
import { AboutUs } from './pages/app/about-us'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <FormLayout />,
    children: [
      {
        path: '/register-products',
        element: <RegisterProducts />,
      },
      {
        path: '/products',
        element: <ProductList />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
])
