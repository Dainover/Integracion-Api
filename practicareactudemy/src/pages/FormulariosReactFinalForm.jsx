import { Link } from "react-router-dom"

const FormulariosReactFinalForm = () => {
  return (
    <>
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            React Final Form
          </li>
        </ol>
      </nav>
      <hr />
      <h3> React Final Form</h3>
    </>
  )
}

export default FormulariosReactFinalForm
