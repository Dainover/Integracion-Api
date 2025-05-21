import { Link , useLoaderData} from "react-router-dom"
import { paises } from "./../Data/datos"

export function loader() {//es una funcion que se ejecuta antes de cargar el componente
    //se puede hacer una peticion a una api o a un archivo json
    const countys= paises;//es un array de objetos traido de paises.js
    return countys;
}

const HooksLouderData = () => {
const countrys = useLoaderData();

  return (
    <>
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
          <h3>Use Louder Data</h3>

          <div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dominio</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {countrys.map((country) => (
                    <tr key={country.id}>
                        <td>{country.id}</td>
                        <td>{country.nombre}</td>
                        <td>{country.dominio}</td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
    </>
  )
}

export default HooksLouderData
