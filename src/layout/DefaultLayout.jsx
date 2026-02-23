import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
Outlet

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column" style={{minHeight:"100vh"}}>
      <Header/>

      <main className="flex-grow-1">
        <Outlet/>
      </main>
      
      <Footer/>
    </div>
  )
}