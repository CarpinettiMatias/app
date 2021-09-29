import React from "react";
import CartWidget from "./CartWidget/CartWidget";
//importando css
import './NavBar.css'
import img from './img/logoLuna.png'


const NavBar = () => {
    return( 
        <div className='NavBar'>
<<<<<<< HEAD
            <h1><a href="#">Luna</a></h1>
                <ul className='menu'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
                <CartWidget/>
=======
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
>>>>>>> e8ec7edb2c9b92780cff36c5d49132058602471f
        </div>
    );
}
export default NavBar;