import React from "react";
import { NavLink } from "react-router-dom";

export function Hdp({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav class="navbar">
                <div class="navbar-container">
                    <h1>LYON</h1>
                </div>
            </nav>
        </>
    );
}