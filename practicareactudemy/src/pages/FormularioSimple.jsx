import { Link } from "react-router-dom";
import { useState } from "react";

import Swal from "sweetalert2";
const FormularioSimple = () => {
  const [nombre, setNombre] = useState("");
  const handleSubmit = (e) => {
    // Función para manejar el envío del formulario

    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    // Aquí puedes manejar el envío del formulario
    //console.log("Nombre:", nombre);


    // Mostrar una alerta con el nombre ingresado
    Swal.fire({
      title: "Nombre ingresado",
      text: `El nombre ingresado es: ${nombre}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            Formularios simples
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario simple</h3>

      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          // Cambia el valor del estado nombre al escribir en el input
        </div>
        <hr />
        <button className="btn btn-warning">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioSimple;
