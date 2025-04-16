import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'

import Home from "./pages/Home.jsx"
import SobreNosotros from "./pages/SobreNosotros.jsx"
import Rutas from './pages/Rutas.jsx'
import RutasPath from './pages/RutasPath.jsx'
import RutasQuryString from './pages/RutasQuryString.jsx'
import ErroresPersonalizados from './pages/ErroresPersonalizados.jsx'
import Errores404 from "./pages/Errores404.jsx"
const router = createBrowserRouter(
   [
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/sobre-nosotros',
          element: <SobreNosotros/>
        },
        {
          path: '/Rutas',
          element: <Rutas/>
        },
        {
          path: '/rutas/path/:id/:slug',
          element: <RutasPath/>
        }
        ,
        {
          path: '/rutas/query-string',
          element: <RutasQuryString/>,
          errorElement: <ErroresPersonalizados/>
        }
      ]
    }
   ]

);

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}></RouterProvider>
   
  </StrictMode>,
)
