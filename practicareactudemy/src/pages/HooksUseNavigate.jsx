import { Link, useNavigate } from "react-router-dom"

const HooksUseNavigate = () => {
    const navigate = useNavigate()
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
      <h3>UseNavigate</h3>
      <button className="btn btn-succes" onClick={()=>{navigate("/sobre-nosotros")}}>ir a sobre nosotros</button>
      <hr />
      <button className="btn btn-succes"onClick={()=>{navigate(-1)}}>Ir atras</button>
    </>
  )
}

export default HooksUseNavigate
