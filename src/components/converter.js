import React, { Component } from "react";
import "./marketer.css";
import { Link } from 'react-router-dom';
class StockMarket extends Component {
 

  render() {
    return (
      <div className="stockMarket">
      {/*  <nav className="upperNav black">
          <div className="nav-wrapper">
            <h6 className="brand-logo center ">Stock Market Analyzer</h6><br></br>
            <div>
            <span>A simple stock market API app</span></div>
            <Link  to='/crypto'>Crypto</Link>
            <div className="searchBox">
            <input
          id="searchParam"
          type="text"
          className="autocomplete"
          placeholder="Search"
          onChange={this.ChangeHandler}></input>
          <button class="btn waves-effect waves-light" type="submit" name="action">Load
    <i class="material-icons right">send</i>
  </button>
  </div>
          </div>
          
    </nav>*/}



        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Stock Market Analyzer</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li> <Link  to='/'>Search</Link></li>
        <li> <Link  to='/crypto'>Crypto</Link></li>
        <li> <Link  to='/upcoming'>Upcoming Iso's</Link></li>
        
      </ul>
    </div>
  </nav>

        
      </div>
    );
  }
}

export default StockMarket;
