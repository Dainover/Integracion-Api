import { Link, Form, data } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

import { atributos, categoriasProductos } from "../Data/datos";
export async function action({ request }) {
  //esto es un action, se ejecuta antes de que se renderice el componente
  //siempre los action deben retornar algo, si no la aplicacion se rompe
  const formData = await request.formData(); //esto es un objeto iterable

  return Swal.fire({
    icon: "success",
    title: "Formulario enviado",
    text: `Nombre: ${formData.get("nombre")} | Nombre: ${data.nombre}| Peligroso: ${formData.get("peligroso")}`,
  });
}
const FormularioUseActionData = () => {

   const [peligroso, setPeligroso] = useState(false);

   const handlePeligroso = () => {
      setPeligroso(!peligroso);
   }
   
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            Formulario use action data
          </li>
        </ol>
      </nav>
      <hr />

      <h3>Formularios Use Action Data</h3>

      <Form method="POST">
        <div>
          <label htmlFor="categoria"> Categoria</label>
          <select name="categoria" id="categoria" className="form-select">
            <option value="0">Seleccione...</option>
            {categoriasProductos.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            min="0"
            id="precio"
            name="precio"
            className="form-control"
            placeholder="Precio"
          />
        </div>
        <hr />
           <div className="form-control">
                 <label htmlFor="destacado"><strong>Destacado</strong></label>
                 <div className="form-check">
                  <input type="radio" name="destacado" value='si' id="destacado1" className="form-check-input" />
                  <label htmlFor="destacado1">SI</label>
                 </div>
                 <div className="form-check">
                  <input type="radio" name="destacado" value='si' id="destacado2" className="form-check-input" />
                  <label htmlFor="destacado2">No</label>
                 </div>
           </div>
        <hr />
        <div className="form-group">
          <label htmlFor="descripcion">Descripcion</label>
          <textarea name="descripcion" id="descripcion"></textarea>
        </div>


        <hr />
        <div className="form-group">
         <label htmlFor="peligroso">Peligroso</label>
         <div className="form-Check">
            <input type="checkbox" name="peligroso" id="peligroso" value={peligroso} onChange={handlePeligroso} className="form-check-input" />
         </div>
        </div>
        <hr />
        <div className="form-group">
         <label htmlFor="atributos">Atributos</label>
         {atributos.map((atributo)=>(
            <div className="form-check" key={atributo.id}>
               <input type="checkbox"  name={`atributo_${atributo.id}`} id={`atributo_${atributo.id}`} value={atributo.id} className="form-check-input" />
               <label htmlFor="">{atributo.nombre}</label>
            </div>
         ))}
         
        </div>
        <hr />
        <button className="btn btn-warning">Enviar</button>
      </Form>
    </>
  );
};

export default FormularioUseActionData;
