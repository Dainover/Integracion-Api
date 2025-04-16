import { NavLink, Link } from "react-router-dom"
//NavLink y Link ayuda a que la pagina no se cargue cada vez que se aplica el enrutamiento y sea mas rapido
const Rutas = () => {

    let id = 12;
    let slug= "lo-que-sea"
  return (
    <div>
      <h1>rutas</h1>
      <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </li>
        <li>
            //Pasar parametros forma statica
            <Link to='/rutas/path/1/hola-mundo'>Parametros path</Link>
        </li>
        <li>
            //pasar parametros forma dinamica
            <Link to={`/rutas/path/${id}/${slug}`}>Parametros path</Link>
        </li>
        <li>
            //pasar parametros queryString
            <Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Parametros queryString</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Rutas
