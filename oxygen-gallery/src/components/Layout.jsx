import { Outlet } from "react-router-dom"
import './Layout.css'
export const Layout = () => {

    return <>
        <nav className="navbar">
            <p className="navbar__title" >Fotobunta</p>
            <div className="navbar__search-container">
                <input type="text" className="navbar__search-container__input" placeholder="Search.." />
                <button type="submit" className="navbar__search-container__button">˅</button>
            </div>       
            <button className="navbar__page__button" >Mis fotos</button>     
        </nav>
       
        <Outlet/>

        <footer className="footer">
            <div className="footer__text">
                <p>Created using Unsplash API</p>
                <p>All rights go to their respective owners</p>
                <p>MMXXIV</p>
            </div>
        </footer>

    </>
}