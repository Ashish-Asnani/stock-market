import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Converter from "./components/converter.js";
import MainScreen from './components/mainscreen.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CryptoScreen from'./components/crypto/cryptoData';
import UpcomingScreen from './components/upcomingOnes/upcomingones';
import FirstPage from'./components/firstPage/firstPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Converter />
        <Switch>
          <Route exact path='/' component={FirstPage}></Route>
          <Route exact path='/data' component={MainScreen}></Route>
          <Route exact path='/crypto' component={CryptoScreen}></Route>
          <Route exact path='/upcoming' component={UpcomingScreen}></Route>
        
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
