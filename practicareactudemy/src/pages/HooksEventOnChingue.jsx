import {Link} from 'react-router-dom'
import { useState } from 'react'
// import { useState } from 'react' // Importamos el hook useState para manejar el estado del componente
const HooksEventOnChingue = () => {
    
    const [Nombre, setNombre] = useState('') // Inicializamos el estado con un string vacío
    const handleFormulario = (e) => {
        e.preventDefault() // Evita el comportamiento por defecto del formulario
        alert(Nombre) // Muestra el valor del estado Nombre en una alerta
    }

  return (
    <div>
        //Manejamos las migas de pan para navegar entre las rutas en este caso A la ruta hook
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/hooks'>Hooks</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               Evento onChangue
            </li>
        </ol>
    </nav>
    <hr />

    <h3>Evento onChangue</h3>
    <hr />
    <p>
        <input type="text" className='form-control' placeholder='Escribe algo' value={Nombre} onChange={(e)=>{setNombre (e.target.value)}} /> //onChange: Es un evento que
         se dispara cada vez que el valor del input cambia.
e.target.value: Obtiene el valor actual del input.
setNombre: Actualiza el estado Nombre con el nuevo valor del input.
    </p>
    <button className='btn btn-warning' onClick={handleFormulario}><i class="fa-brands fa-avianex"></i>Enviar</button>
      
    </div>
  )
}

export default HooksEventOnChingue
