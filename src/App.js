import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './component/Home';
import Event from './component/Event'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavbarPage from './component/Navigasi';
// import Checkout from './component/Checkout';
// import Thumbnail from './component/Thumbnail';import {MDBRow} from 'mdbreact';


class App extends Component{
  render(){
    return(
      <div>
        <NavbarPage />
      </div>
    )
  }
} 

export default App;


// const App = () => {
  // return (
    {/*<div id="wrapper">*/}

      {/*// Navigasi Menu*/}
    {/*  <NavbarPage />*/}

      {/*// Card Thumbnail*/}
     {/* <MDBRow className="no-gutters">
        <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
        <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
        <Thumbnail title="Tokyo Ghoul" desc="transformasi kaneki menjadi ghoul" btn="Submit"/>
        <Thumbnail />
      </MDBRow>*/}

      {/*Checkout*/}
      {/*<Checkout />*/}

    // </div>
  // );
// }

// export default App;