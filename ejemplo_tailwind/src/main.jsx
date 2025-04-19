import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/css/output.css'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import Index from './Pages/index'
const router = createBrowserRouter
([
  {
path :'/',
element: <Layout/>,
children: 
[{
  index: true,
  element: <Index />
}]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
