import React from 'react'
import Footer from "../ui/Footer"
import {Headers} from "../ui/Headers"
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <div>
     <Headers/>
<Outlet/>
     <Footer/> 
    </div>
  )
}

export default AppLayout
