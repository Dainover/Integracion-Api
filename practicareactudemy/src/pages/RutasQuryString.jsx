import { useLocation } from "react-router-dom"

const RutasQuryString = () => {
    const search = useLocation().search;
    let id = new URLSearchParams(search).get('id')
    let slug = new URLSearchParams(search).get('slug')
  return (
    <div>
      <h2>Ejemplo parametros query string</h2>
      <ul>
        <li>ID: {id}</li>
        <li>SLUG: {slug}</li>
      </ul>
    </div>
  )
}

export default RutasQuryString
