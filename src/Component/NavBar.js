import React from "react";
import CartWidget from "./CartWidget/CartWidget";
//importando css
import './NavBar.css'

const NavBar = () => {
    return( 
        <div className='NavBar'>
            <h1><a href="#">Luna</a></h1>
                <ul className='menu'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
                <CartWidget/>
        </div>
    );
}
export default NavBar;