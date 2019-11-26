import React, { Component } from 'react';
import Headnav from './component/Headnav';
import Navbar from './component/Navbar';
import VProduct from './view/VProduct';
import VFormUI from './component/VFormUI';
import VCart from './view/VCart';
import { Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Headnav />
        <Navbar />

        <Switch>
          <Route path="/" exact ><VFormUI /></Route>
          <Route path="/mycart"><VCart /></Route>
          <Route path="/login"><VProduct /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
