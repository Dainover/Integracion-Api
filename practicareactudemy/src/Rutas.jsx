import {BrowserRouter, Routes, Route}from "react-router-dom"
import Home from "./pages/Home"
import SobreNosotros from "./pages/SobreNosotros"
import Errores404 from "./pages/Errores404"

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-Nosotros" element={<SobreNosotros/>}/>
            <Route path="*" element={<Errores404/>}/>
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rutas
