import {Link} from 'react-router-dom'

const HooksEventClick = () => {
  return (
    <>
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

    <button className='btn btn-primary'><i className="fa-regular fa-hand-pointer"></i>Click</button>
      
    </>
  )
}

export default HooksEventClick
