import { Link } from "react-router-dom"
import '../../public/css/spinner.css'
const UtilesSpinner = () => {
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
      <h1>Spinner</h1>
      <hr />
      <span className="loader"></span>
        <span className="loader loader2"></span>
    </>
  )
}

export default UtilesSpinner
