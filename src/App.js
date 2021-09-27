import React, { Component } from "react";
import "./styles.css";

// Components
import NavBar from "./components/NavBar";

// + 1 elemento JSX retornado:
// envolver en un div o utilizar un Fragment <> </>
// Embeber codigo de js: entre {} llaves

const styles = {
  paragraph: {
    fontSize: 25,
    color: "orange",
    backgroundColor: "green"
  }
};

let name = "Daniel";
let city = "Buenos Aires";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={{ backgroundColor: "yellow", border: "5px solid black" }}>
          Nombre del usuario: {name}
        </h1>
        <p>Edad del usuario: {31 + 5}</p>
        <p style={styles.paragraph}>Ciudad de usuario: {city}</p>
      </div>
    );
  }
}

export default App;

