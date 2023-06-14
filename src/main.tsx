import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateEmployee } from './pages/CreateEmployee.tsx';
import { CreateProduct } from './pages/CreateProduct.tsx';
import { Products } from './pages/Products.tsx';
import { Checkout } from './pages/Checkout.tsx';
import { Layout } from './layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/employee",
        element: <CreateEmployee />,
      },
      {
        path: "/product",
        element: <CreateProduct />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
