import { Link, Form, data, useActionData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

import Validaciones from "../components/Validaciones";
//esto es un componente de react que se encarga de mostrar los errores

import { atributos, categoriasProductos } from "../Data/datos";
export async function action({ request }) {
  //esto es un action, se ejecuta antes de que se renderice el componente
  //siempre los action deben retornar algo, si no la aplicacion se rompe
  const formData = await request.formData(); //esto es un objeto iterable
    const datos = Object.fromEntries(formData); //esto convierte el objeto iterable en un objeto normal
  

  let errores=[]

  if (formData.get("categoria") === "0") {//si no se selecciona una categoria


     errores.push('debe seleccionar una categoria')//agregamos el error al arreglo de errores
  }
  if (Object.values(datos).includes("")) {//si hay un campo vacio
    errores.push("debe llenar todos los campos"); //agregamos el error al arreglo de errores
  }
  let expresion_precio= new RegExp("[0-9]")//esto es una expresion regular para validar que el precio sea un numero
  if (!expresion_precio.test(formData.get("precio"))) {//si el precio no es un numero
    errores.push("el precio debe ser un numero")//agregamos el error al arreglo de errores
  }

  if (Object.keys(errores).length){//si hay errores
    return errores//retornamos los errores
  }







    //Recibir checkbox dinamicos
let arreglo=[]
let mensajeArreglo=""
atributos.map((atributo, i)=> {
         
if (formData.get ("atributo_"+atributo.id)!=null) {//si el atributo existe
 
   arreglo[i]=atributo.id;//agregamos el id del atributo al arreglo
    mensajeArreglo = mensajeArreglo + atributo.nombre + " ,";//concatenamos el nombre del atributo al mensaje

  }
  

})

  return Swal.fire({//esto es un objeto de sweetalert2
    icon: "success",//estilo de la alerta
    title: "Formulario enviado",//obtenemos el valor del input categoria
    text: `Nombre: ${formData.get("nombre")} | Nombre: ${//obtenemos el valor del input nombre
      data.nombre
    }| Peligroso: ${formData.get("peligroso")}| Atributos: ${mensajeArreglo}`,//obtener el valor del input peligroso
  });
}
const FormularioUseActionData = () => {
  const [peligroso, setPeligroso] = useState(false);

  const handlePeligroso = () => {
    setPeligroso(!peligroso);
  };
  const errores = useActionData(); //esto es un hook que nos permite obtener los datos del action
   //ejemplo validacion asincrona
   const [name, setName] = useState("");
   async function handleBlur(name) {//esto es un evento que se ejecuta cuando el input pierde el foco
    //esto es una validacion asincrona
    if (name=='Elkin'){
      return Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "El nombre no puede ser Elkin",
      });
      setName("");
    }
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

         {errores?.length && <Validaciones errores={errores} />}//esto es un componente que se encarga de mostrar los errores
      <Form method="POST" noValidate>
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
            value={name}
            onChange={(e) => {setName(e.target.value)}}//esto es un evento que se ejecuta cuando el input cambia
            onBlur={(e) => {handleBlur(e.target.value)}}//esto es un evento que se ejecuta cuando el input pierde el foco
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
          <label htmlFor="destacado">
            <strong>Destacado</strong>
          </label>
          <div className="form-check">
            <input
              type="radio"
              name="destacado"
              value="si"
              id="destacado1"
              className="form-check-input"
            />
            <label htmlFor="destacado1">SI</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="destacado"
              value="si"
              id="destacado2"
              className="form-check-input"
            />
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
            <input
              type="checkbox"
              name="peligroso"
              id="peligroso"
              value={peligroso}
              onChange={handlePeligroso}
              className="form-check-input"
            />
          </div>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="atributos">Atributos</label>
          {atributos.map((atributo) => (
            <div className="form-check" key={atributo.id}>
              <input
                type="checkbox"
                name={`atributo_${atributo.id}`}
                id={`atributo_${atributo.id}`}
                value={atributo.id}
                className="form-check-input"
              />
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
