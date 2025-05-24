import { Link} from 'react-router-dom'

const Formularios = () => {
  return (
    <div>
        <ul>
      
        <li>
            <Link to='/formulario-simple'>Formulario simple</Link>
        </li>
         <li>
            <Link to='/formulario/useactiondata'>Formulario simple</Link>
        </li>
         <li>
            <Link to='/formulario/formik'>Formik</Link>
        </li>
        <li>
            <Link to='/formulario/hookform'>React hook form</Link>
        </li>
         <li>
            <Link to='/formulario/finalform'>React final form</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Formularios
