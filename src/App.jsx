import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-Header">
          <SiteNav />
          <div>Welcome to my Site!</div>
        </header>
        <jumbo />
        <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
        <Route path="/Content" exact={true} component={Content}></Route>
        <Route path="/Register" exact={true} component={Register}></Route>
        <Route path="/Login" exact={true} component={Login}></Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
