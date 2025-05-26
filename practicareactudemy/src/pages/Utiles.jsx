import { Link } from "react-router-dom"

const Utiles = () => {
  return (
    <>
    <h1>Utiles</h1>
      <li>
            <Link to='/utiles/dayjs'>UtilesDayjs</Link>
        </li>
        <li>
            <Link to='/utiles/spinner'>Spinner</Link>
        </li>
         <li>
            <Link to='/utiles/swiper'>Swiper</Link>
        </li>
         <li>
            <Link to='/utiles/framer'>Framer motion</Link>
        </li>
        
    </>
  )
}

export default Utiles
