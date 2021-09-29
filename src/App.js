import React from "react";
//importando
import NavBar from './Component/NavBar.js'
<<<<<<< HEAD
import ItemsListContainer from "./Component/ItemsListContainer/ItemsListContainer.js";
=======
import itemListContainer from "./Component/itemListContainer/itemListContainer.js";
>>>>>>> e8ec7edb2c9b92780cff36c5d49132058602471f


function App() {
  return (
    <div>
          <div>
              <div>
                  <NavBar/>
              </div>
              <div>
<<<<<<< HEAD
              <ItemsListContainer greeting='pepe' />
              </div>
              </div>
=======
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
>>>>>>> e8ec7edb2c9b92780cff36c5d49132058602471f
    </div>
  );
}

export default App;
