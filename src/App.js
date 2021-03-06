import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personnages from "./containers/Personnages";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Header from "./components/Header";
import Perso from "./containers/Perso";
import Register from "./containers/Register";

import "./App.css";

function App() {
  // search - debut
  const [dataLogin, setDataLogin] = useState({});
  const [dataComics, setDataComics] = useState({});
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  let locationUrl;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // recherche differente selon la page characters ou comics
    if (location === "/comics") {
      locationUrl = "/comics?titleStartsWith=";
    }
    if (location === "/personnages") {
      locationUrl = "/characters?nameStartsWith=";
    }

    const response = await axios.get(
      `https://gateway.marvel.com/v1/public${locationUrl}${search}&ts=1&apikey=63d48fb669cb6f20dde29bcaa0cc0be0&hash=3f705632315a5f5825baff31f0bde09c`
    );

    setDataLogin(response.data);
    setDataComics(response.data);
    setSearch("");
    console.log("app.js", "ligne 44");
  };
  // search - fin

  return (
    <div id="marvel">
      <Router>
        <Switch>
          <Route path="/personnages">
            <Header
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              search={search}
            />
            <Personnages
              dataLogin={dataLogin}
              setDataLogin={setDataLogin}
              setLocation={setLocation}
            />
          </Route>
          <Route path="/perso/:id">
            <Header
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              search={search}
            />
            <Perso />
          </Route>
          <Route path="/comics">
            <Header
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              search={search}
            />
            <Comics
              dataComics={dataComics}
              setDataComics={setDataComics}
              setLocation={setLocation}
            />
          </Route>
          <Route path="/favoris">
            <Header
              handleSearch={handleSearch}
              handleSubmit={handleSubmit}
              search={search}
            />
            <Favoris />
          </Route>
          <Route path="/register">
            <Register />
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
