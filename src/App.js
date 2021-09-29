import React from "react";
//importando
import NavBar from './Component/NavBar.js'
import itemListContainer from "./Component/itemListContainer/itemListContainer.js";


function App() {
  return (
    <div>
          <div>
              <div>
                  <NavBar/>
              </div>
              <div>
                <itemListContainer greating="Producto"/>
                  <ul>
                    <li>Producto</li>
                    <li>Productos</li>
                    <li>Producto</li>
                    <li>Producto</li>
                    <li>Producto</li>
                    <li>Producto</li>
                    <li>Producto</li>
                    <li>Producto</li>
                  </ul>
              </div>
             
          </div>
    </div>
   
  );
}

export default App;
