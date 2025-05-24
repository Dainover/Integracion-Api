import { Link } from "react-router-dom"
import {useFormik} from 'formik'
import Swal from "sweetalert2"
import { use } from "react"
const FormulariosFormik = () => {

    const {handleSubmit, handleChange, values}= useFormik({//useFormik es un hook que nos permite manejar formularios de manera sencilla
        initialValues: {

            correo: '',
            password: '',
        },
        onSubmit: async function (values) {

          let mensaje=''
          if (!values.correo){
            mensaje = mensaje + '<li>El campo correo es obligatorio</li>'
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)){//expresion regular para validar el correo
            mensaje = mensaje + '<li>El campo correo no es valido</li>'

          }
          if (!values.password){
            mensaje = mensaje + '<li>El campo contraseña es obligatorio</li>'
          }
          if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(values.password)){//expresion regular para validar la contraseña
            mensaje = mensaje + '<li>La contraseña debe tener al menos 1 numero, una mayuscula, y un largo entre 6 y 20 caracteres.</li>'

          }

          if (mensaje!=''){
             
            Swal.fire({
                title: 'Error',
                
                icon: 'error',
                confirmButtonText: 'Aceptar',
                html: `<ul>${mensaje}</ul>`
                
            })
                 return
          }else{
          
             Swal.fire({
                title: 'Formulario enviado',
                text: `Correo: ${values.correo} | Contraseña: ${values.password}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            return
          }
            
        }

    })




  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            Formik
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formik</h3>

       <form onSubmit={handleSubmit}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" onChange={handleChange} value={values.password} className="form-control"/>
         <hr />
        <label htmlFor="correo">E-mail</label>
        <input type="text" name="correo" id="correo" onChange={handleChange} value={values.correo}  className="form-control"/>
         <hr />
         <button className="btn btn-warning"type="submit"><i class="fa-solid fa-lock"></i>Enviar</button>
       </form>
    </>
  )
}

export default FormulariosFormik
