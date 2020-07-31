import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personnages from "./containers/Personnages";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Header from "./components/Header";
import Perso from "./containers/Perso";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/personnages">
            <Header />
            <Personnages />
          </Route>
          <Route path="/perso/:id">
            <Header />
            <Perso />
          </Route>
          <Route path="/comics">
            <Header />
            <Comics />
          </Route>
          <Route path="/favoris">
            <Header />
            <Favoris />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
