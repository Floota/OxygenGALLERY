import { Outlet, Link, useLocation } from "react-router-dom";
import './Layout.css';

export const Layout = () => {
    const location = useLocation(); // Get the current location (URL path)

    // Conditionally set the button text and link based on the current path
    const renderPageButton = () => {
        if (location.pathname === "/misfotos") {
            return (
                <Link to="">
                <button className="navbar__page__button">Buscador</button>
                </Link>
                         );
        } else {
            return (

                <Link to="/misfotos">
                <button className="navbar__page__button">Mis Fotos</button>
                </Link>   
            );
        }
    };

    return (
        <>
            <nav className="navbar">
                <p className="navbar__title">Fotobunta</p>
                <div className="navbar__search-container">
                    <input type="text" className="navbar__search-container__input" placeholder="Search.." />
                    <button type="submit" className="navbar__search-container__button">˅</button>
                </div>
                {renderPageButton()} {/* Dynamically render the button based on the current route */}
            </nav>

            <Outlet />

            <footer className="footer">
                <div className="footer__text">
                    <p>Created using Unsplash API</p>
                    <p>All rights go to their respective owners</p>
                    <p>MMXXIV</p>
                </div>
                <div className="footer__creator">
                    <p>Created by Max</p>
                    <a href="https://github.com/Floota">
                        <img className="footer__logos" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/maxwell-redondo-435689314/">
                        <img className="footer__logos" src="https://img.icons8.com/ios11/512/linkedin.png" />
                    </a>
                </div>
            </footer>
        </>
    );
}