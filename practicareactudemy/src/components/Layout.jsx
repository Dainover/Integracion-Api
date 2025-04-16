import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Titulo para todas las paginas</h1>

      <Outlet/>
    </div>
  )
}

export default Layout
