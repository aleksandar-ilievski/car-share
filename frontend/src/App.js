import React from "react";
import "./App.css";
import About from "./components/About/About";
import CarList from "./components/Car/CarList";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/carlist" exact component={CarList} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  );
}

export default App;
