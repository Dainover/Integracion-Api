import { Link } from "react-router-dom"

const UtilesMapas2 = () => {
  return (
    <div>
      <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                     <Link to='/utiles'>mapbox</Link>
                  </li>
                  <li className='breadcrumb-item acitve' aria-current='page'> 
                     Mapbox
                  </li>
              </ol>
          </nav>
          <h1>MapBox</h1>
    </div>
  )
}

export default UtilesMapas2
