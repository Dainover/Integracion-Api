import { Link } from "react-router-dom"
import { useRef, useState } from "react"
const HooksUseRef = () => {
    const [texto, setTexto] = useState("")
    const inputRef = useRef()//creamos una referencia al input
      const colorRef = useRef(null)//creamos una referencia a la clase
    const imprimirValor = () => {
    
        setTexto(inputRef.current.value)//accedemos al valor del input
        console.log(inputRef.current.value)//accedemos al valor del input
        inputRef.current.focus()//ponemos el foco en el input
        inputRef.current.value = ""//limpiamos el input
    }
    const cambiarColor = () => {
        colorRef.current.className = "clase_azul"//cambiamos el color de la clase
    }
  
  
    return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            EventosVarios
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Useref</h3>
       
       <input type="text" className="form-control" ref={inputRef}/>
         <hr />
         <button onClick={imprimirValor}>Motrar</button>
         <hr />
         <div className="clase_roja" ref={colorRef} id="colorRef">
               <h4>Valor del input: {texto}</h4>
         </div>
            <hr />
         <button onClick={cambiarColor}>Cambiar color</button>
            
    </div>
  )
}

export default HooksUseRef
