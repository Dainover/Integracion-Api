import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import "./../public/css/blog.css"

import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'

import Home from "./pages/Home.jsx"
import SobreNosotros from "./pages/SobreNosotros.jsx"
import Rutas from './pages/Rutas.jsx'
import RutasPath from './pages/RutasPath.jsx'
import RutasQuryString from './pages/RutasQuryString.jsx'
import ErroresPersonalizados from './pages/ErroresPersonalizados.jsx'
import Errores404 from "./pages/Errores404.jsx"
import Hooks from './pages/Hooks.jsx'
import HooksEventClick from './pages/HooksEventClick.jsx'
import HookUseState from './pages/HookUseState.jsx'
import HooksEventOnChingue from './pages/HooksEventOnChingue.jsx'
import HooksEventosVarios from './pages/HooksEventosVarios.jsx'
import HooksUseEffect from './pages/HooksUseEffect.jsx'

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
        },
        {
          path: '*',
          element: <Errores404/>
        },
        {
          path: '/hooks',
          element: <Hooks/>
        },
        {
          path: '/hooks/evento-click',
          element: <HooksEventClick/>
        },
        {
          path: '/hooks/usestate',
          element: <HookUseState/>
        },
        {
          path: '/hooks/onChangue',
          element: <HooksEventOnChingue/>
          
        },
        {
          path: '/hooks/eventos-varios',
          element: <HooksEventosVarios/>
          
          
        }
        ,
        {
          path: '/hooks/useEffect',
          element: <HooksUseEffect/>
          
          
          
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
