import { Outlet } from "react-router-dom"
import './Layout.css'
export const Layout = () => {

    return <>
        <nav className="navbar">
            <p>Fotobunta</p>
            <div className="navbar__search-container">
                <input type="navbar__search-container__text" className="" placeholder="Search.." />
                <button type="submit">Search</button>
            </div>       
            <button>Mis fotos</button>     
        </nav>
       
        <Outlet/>

        <footer className="footer">
            <p>Grupo T</p>
        </footer>

    </>
}