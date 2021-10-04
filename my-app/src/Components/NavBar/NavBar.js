import React from 'react';
import { Menu } from 'semantic-ui-react'
import img from './logoLuna.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {

    return (
        <div className='NavBar'>
            <div className='MenuD'>
            <Menu stackable>
                    <Menu.Item>
                    <img src={img}/>
                    </Menu.Item>

                    <Menu.Item
                    name='Home'>
                    Home
                    </Menu.Item>

                    <Menu.Item
                    name='Productos'>
                    Productos
                    </Menu.Item>

                    <Menu.Item
                    name='Contacto'>
                    Contacto
                    </Menu.Item>

                    <Menu.Item
                    name='Ayuda'>
                    Ayuda
                    </Menu.Item>
                </Menu>
            </div>
            <div className='MenuCar'>
                <CartWidget />
            </div>
        </div>
    )
};

export default NavBar;