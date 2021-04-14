import React from "react";
import "./App.css";
import About from "./components/About/About";
import CarList from "./components/Car/CarList";
import Car from "./components/Car/Car";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Rental from "./components/Rentals/Rental";
import Mapp from "./components/Map/Map";

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/carlist" exact component={CarList} />
          <Route path="/car/:id" exact component={Car} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/register" exact component={Register} />
          <Route path="/rental" exact component={Rental} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/map" exact component={Mapp} />
      </div>
    </Router>
  );
}

export default App;
