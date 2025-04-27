import {Link} from 'react-router-dom'


const HooksEventClick = () => {
   
  const handlePresioname = () => {
    alert('Me has presionado!')
  }

  const handlePresionameConArgumento = (e) => {
    alert('Me has presionado! ' + e)
  }






  return (
    <>
    //Manejamos las migas de pan para navegar entre las rutas en este caso A la ruta hook
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/hooks'>Hooks</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               Evento click
            </li>
        </ol>
    </nav>
    <hr />

    <h3>click</h3>

    <button className="btn btn-primary" onClick={handlePresioname}><i className="fas fa-hand-point-up"></i>Click</button>
     <hr />
    <button className="btn btn-danger" onClick={()=>{handlePresioname()}}><i className="fas fa-hand-point-up"></i>Click con funcion </button>
      <hr />
    <button className="btn btn-success" onClick={()=>{handlePresionameConArgumento('Elkin')}}><i className="fas fa-hand-point-up"></i>Click con argumento </button>
    </>
  )
}

export default HooksEventClick
