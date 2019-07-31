import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

import * as fs from "fs";

class App extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }

  render() {
    fs.readdirSync("/").forEach(file => {
      console.log(file);
    });
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <Content />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
