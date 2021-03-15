import React from "react";
import "./App.css";
import About from "./components/About";
import CarList from "./components/CarList";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/carlist" exact component={CarList} />
          <Route path="/register" exact component={Register} />
      </div>
    </Router>
  );
}

export default App;
