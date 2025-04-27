import {Link} from 'react-router-dom'
import { useState } from 'react'



const HookUseState = () => {
    const [contador, setContador] = useState(0)



  return (
    <>
     //Manejamos las migas de pan para navegar entre las rutas en este caso A la ruta hook
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/hooks'>Hooks</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               Use State
            </li>
        </ol>
    </nav>
    <hr />

    <h3>Use state</h3>
    <hr />
    <p>Contador: {contador}</p>
    <button className='btn btn-primary' onClick={()=>{setContador(contador + 1)}}><i class="fa-solid fa-plus"></i>Incrementar</button>
    <button className='btn btn-danger' onClick={()=>{setContador(contador - 1)}} disabled={contador===0}><i class="fa-solid fa-minus"></i>Decrementar</button>
    
    </>
  )
}

export default HookUseState
