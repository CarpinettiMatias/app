import React from 'react';
import './App.css';
//Components
import NavBar from './Components/NavBar/NavBar';
import 'semantic-ui-css/semantic.min.css'
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import ItemsCounts from './Components/ItemsCounts/ItemsCounts';



function App () {

        return (
                      <div className='App'>
                            <div>
                              <NavBar/>
                            </div>
                            <div>
                            <ItemsListContainer greeting='Futuros Productos'/>
                            </div>
                            <div>
                              <ItemsCounts/>
                            </div>
                      </div>

        );
}


export default App;
