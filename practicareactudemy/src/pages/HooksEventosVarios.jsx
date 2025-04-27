import {Link} from 'react-router-dom'
import Fotito from '../assets/Fotito.jpg'; // Ajusta la ruta según la ubicación de tu archivo
const HooksEventosVarios = () => {

    const mover = (e) => {
        alert('Me has movido!')
    }
    const salir = (e) => {
        alert('Me has sacado el raton!')
    }
  return (
    <>
      //Manejamos las migas de pan para navegar entre las rutas en este caso A la ruta hook
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/hooks'>Hooks</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               EventosVarios
            </li>
        </ol>
    </nav>
    <hr />
           <h3>Evento varios</h3>
           <hr />
           <img src={Fotito} onMouseMove={mover} onMouseOut={salir} style={{ width: '150px', height: '150px' }}/>
    </>
  )
}

export default HooksEventosVarios
