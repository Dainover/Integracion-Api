import { useParams } from "react-router-dom"

const RutasPath = () => {
    //Se hace la desestructuracion de las variables que vienen del link
const {id, slug}=useParams();

  return (
    <div>
      <h2>Ejemplo parametros path</h2>

      <ul>
        <li>ID: {id}</li>
        <li>SLUG: {slug}</li>
      </ul>
    </div>
  )
}

export default RutasPath
