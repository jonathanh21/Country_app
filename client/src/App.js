import React from "react";
import { Route } from "react-router-dom";

import './App.css';
import Initial from './containers/Initial/Initial.jsx'
import Main from './containers/Main/Main.jsx'
import NavBar from './containers/NavBar/NavBar.jsx'
import CountryDetail from './containers/CountryDetail/CountryDetail.jsx'
import CreateActivity from './containers/CreateActivity/CreateActivity.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path="/"component={Initial} />
      <Route path="/main"component={NavBar} />
      <Route exact path="/main"component={Main} />
      <Route exact path="/main/country/:id"component={CountryDetail} />
      <Route exact path="/main/newActivity"component={CreateActivity} />
    </div>
  );
}

export default App;
