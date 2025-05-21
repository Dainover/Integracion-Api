
import { Link, useLocation } from "react-router-dom"

const HooksUseLocation = () => {
    const location = useLocation()//hook que nos da la ruta actual
    console.log(location)
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
      <h3>UseLocatin</h3>
        <p>Ruta actual: {location.pathname}</p>
    </div>
  )
}

export default HooksUseLocation
