import { Link } from "react-router-dom"

const UtilesMapas = () => {
  return (
    <>
       <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                     <Link to='/utiles'>webcam</Link>
                  </li>
                  <li className='breadcrumb-item acitve' aria-current='page'> 
                     webcam
                  </li>
              </ol>
          </nav>
          <h1>Mapas clasicos</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.454734489054!2d-73.6374174!3d4.816806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ff83487413847%3A0x7befd2f561aa5950!2sGachet%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1748357171230!5m2!1ses-419!2sco" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default UtilesMapas
