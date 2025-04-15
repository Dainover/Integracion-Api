import Basicos from "./components/Basicos"
import ComponenteDeClase from "./components/ComponenteDeClase"
import ComponenteFuncional from "./components/ComponenteFuncional"

function App() {
  
  return (

    <>
    {/*Esto es un componente que le inyectamos a otro componente */}
      <Basicos/>
     
     <ComponenteFuncional/>
    </>
  )   
}

export default App
