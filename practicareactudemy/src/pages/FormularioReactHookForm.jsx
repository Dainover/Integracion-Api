import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import Swal from "sweetalert2"
const FormularioReactHookForm = () => {

  const {register, formState:{errors}, handleSubmit} = useForm() //useForm es un hook que nos permite manejar formularios de manera sencilla
    function onSubmit(values) {
       Swal.fire({
        title: 'Formulario enviado',
        text: `Correo: ${values.correo} | Contraseña: ${values.password}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
       })
    }
      
    


    return (
    <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            React Hook Form
          </li>
        </ol>
      </nav>
      <hr />
      <h3>React Hook form</h3>

      {(errors.correo || errors.password ) && (
        <div className="alert alert-danger" role="alert">
          <ul>
            {errors.correo && <li>{errors.correo.message}</li>}
            {errors.password && <li>{errors.password.message}</li>}
          </ul>
        </div>
      )}
      <hr />

       <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password"  className="form-control" {...register('password',{
          required: 'campo requerido',
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'La contraseña debe tener al menos 8 caracteres, una letra y un número'
          }
        })}/>
         <hr />

        <label htmlFor="correo">E-mail</label>
        <input type="text" name="correo" id="correo"  className="form-control" {...register('correo', {
          required: 'Campo requerido',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Formato de correo inválido'
          }
        })}/>
         <hr />
         <button className="btn btn-warning"type="submit"><i className="fa-solid fa-lock"></i>Enviar</button>
       </form>
    </>
  
    )    
    
}

export default FormularioReactHookForm
