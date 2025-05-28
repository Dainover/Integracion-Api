import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Drawer from "./Drawer"
const Layout = () => {
  return (
    <div>
      <Drawer/>
      <Outlet/>
      
    </div>
  )
}

export default Layout
