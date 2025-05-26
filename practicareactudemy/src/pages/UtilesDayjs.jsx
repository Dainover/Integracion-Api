import { Link } from "react-router-dom"

import dayjs from "dayjs"


const UtilesDayjs = () => {
    let fecha = new Date() 
    
  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/utiles'>day js</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               Dayjs
            </li>
        </ol>
    </nav>
    <hr />

    <h1>Dayjs</h1>
       <h3>formatear feccha</h3>
       <ul>
        <li>Fecha: {fecha.toString()}</li>
        <li>Fecha: {dayjs(fecha).format('dddd')} {dayjs(fecha).format('DD')} 
              de  {dayjs(fecha).format('MMMM')} de {dayjs(fecha).format('YYYY')}
             A las {dayjs(fecha).format('HH:mm:ss')}</li>
       
       <li> Short date: {dayjs(fecha).format('DD/MM/YY')}</li>
      
       </ul>
       <h3>Calculos con fecha</h3>
         <ul>
          <li>Fecha actual: {dayjs().format('DD/MM/YYYY')}</li>
          <li>Fecha actual + 1 mes: {dayjs().add(1, 'month').format('DD/MM/YYYY')}</li>
          <li>Fecha actual - 1 mes: {dayjs().subtract(1, 'month').format('DD/MM/YYYY')}</li>
          <li>Fecha actual + 10 dias: {dayjs().add(10, 'day').format('DD/MM/YYYY')}</li>
          <li>Fecha actual - 10 dias: {dayjs().subtract(10, 'day').format('DD/MM/YYYY')}</li>
      </ul>
    </>
  )
}

export default UtilesDayjs
