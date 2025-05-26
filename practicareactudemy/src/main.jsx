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
import CustomHooks from './pages/CustomHooks.jsx'
import HooksLouderData, {loader as paisesLouder} from './pages/HooksLouderData.jsx'
import HooksUseNavigate from './pages/HooksUseNavigate.jsx'
import HooksUseLocation from './pages/HooksUseLocation.jsx'
import HooksUseRef from './pages/HooksUseRef.jsx'


import Formularios from './pages/Formularios.jsx'
import FormularioSimple from './pages/FormularioSimple.jsx'
import FormularioUseActionData, {action as procesarFormularioActionData} from './pages/FormularioUseActionData.jsx'
import FormulariosFormik from './pages/FormulariosFormik.jsx'
import FormularioReactHookForm from './pages/FormularioReactHookForm.jsx'
import FormulariosReactFinalForm from './pages/FormulariosReactFinalForm.jsx'


import Utiles from './pages/Utiles.jsx'
import UtilesDayjs from './pages/UtilesDayjs.jsx'
import UtilesSpinner from './pages/UtilesSpinner.jsx'
import UltilesSwiper from './pages/UltilesSwiper.jsx'
import  FramerMotion from './pages/FramerMotion.jsx'


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
          
          
          
        } ,
        {
          path: '/hooks/customhook',
          element: <CustomHooks/>
          
          
          
        },
        {
          path: '/hooks/louderdata',
          element: <HooksLouderData/>,
          loader: paisesLouder
          
          
        }
        ,
        {
          path: '/hooks/usenavigate',
          element: <HooksUseNavigate/>
         
          
          
          
        },
        {
          path: '/hooks/uselocation',
          element: <HooksUseLocation/>
        
        },
        {
          path: '/hooks/useref',
          element: <HooksUseRef/>
          
        
        },
        {
          path: '/formularios',
          element: <Formularios/>
         
          
        
        },
        {
          path: '/formulario-simple',
          element: <FormularioSimple/>
         
          
        
        },
        {
          path: '/formulario/useactiondata',
          element: <FormularioUseActionData/>,
          action: procesarFormularioActionData
         
          
        
        },
        {
          path: '/formulario/formik',
          element: <FormulariosFormik/>

        },
        {
          path: '/formulario/hookform',
          element: <FormularioReactHookForm/>
         

        },
        {
          path: '/formulario/finalform',
          element: <FormulariosReactFinalForm/>
    
        },
        {
          path: '/utiles',
          element: <Utiles/>
          
    
        },
        {
          path: '/utiles/dayjs',
          element: <UtilesDayjs/>
          
    
        },
        {
          path: '/utiles/spinner',
          element: <UtilesSpinner/>
       
        },
        {
          path: '/utiles/swiper',
          element: <UltilesSwiper/>
       
        },
        {
          path: '/utiles/framer',
          element: <FramerMotion/>
       
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
