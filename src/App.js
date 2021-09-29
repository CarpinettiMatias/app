import React from "react";
//importando
import NavBar from './Component/NavBar.js'
import ItemsListContainer from "./Component/ItemsListContainer/ItemsListContainer.js";


function App() {
  return (
    <div>
          <div>
              <div>
                  <NavBar/>
              </div>
              <div>
              <ItemsListContainer greeting='pepe' />
              </div>
              </div>
    </div>
  );
}

export default App;
