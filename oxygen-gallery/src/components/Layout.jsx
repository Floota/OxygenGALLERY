import { Outlet } from "react-router-dom"
import './Layout.css'
export const Layout = () => {

    return <>
        <nav>
            <input type="text" placeholder="Search.." />
        </nav>
       
        <Outlet/>

        <footer>
            <p>Grupo T</p>
        </footer>

    </>
}