import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default class App extends Component {
  render() {
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
