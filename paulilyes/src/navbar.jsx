import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Protec from "./Protec";
import './Navbar.css'

export function Navbar({ fixed }) {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerwidth);

            if (window.innerwidth > 500) {
                setToggleMenu(false);
            };
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav>

                <ul className="liste">
                    <div className="logo">
                        <img href="/" src="logo.png" class="logo" />
                    </div>
                    <li className="items"><a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href="/protec"
                    >
                        <i className="fa-solid fa-comments text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Protection</span>
                    </a></li>
                    <li className="items"><a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href="/acces"
                    >
                        <i className="fa-solid fa-comments text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Accesoires</span>
                    </a></li>
                    <li className="items">
                        <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="/piece"
                        >
                            <i className="fa-solid fa-comments text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pièces détachées</span>
                        </a>
                    </li>
                    <li className="items">
                        <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="/contact"
                        >
                            <i className="fa-solid fa-comments text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contactez-nous!</span>
                        </a>
                    </li>
                    <li className="items">
                        <a
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            href="/panier"
                        >
                            <i className="fa-solid fa-comments text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Panier</span>
                        </a>
                    </li>
                </ul>


                <button onClick={toggleNavSmallScreen} className="btn">BTN</button>
            </nav>
        </>
    );
}

export default Navbar;