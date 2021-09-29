import React from "react";
//importando css
import './NavBar.css'
import img from './img/logoLuna.png'


const NavBar = () => {
    return( 
        <div className='NavBar'>
        <h1><a href="#"><img src={img} alt="Logo Luna" width="75px"/></a></h1>
        <ul className='menu'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Ayuda</a></li>
        </ul>
        <div>
            <cartWidget/>
        </div>
        </div>
    );
}
export default NavBar;