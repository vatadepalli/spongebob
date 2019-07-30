import React, { Component } from "../node_modules/react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
// import { View, TitleBar } from "react-desktop/macOs";

export default class App extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }

  render() {
    return (
      <div className="App">
        {/* <TitleBar
          title="untitled text 5"
          controls
          isFullscreen={this.state.isFullscreen}
          onCloseClick={() => console.log("Close window")}
          onMinimizeClick={() => console.log("Minimize window")}
          onMaximizeClick={() => console.log("Mazimize window")}
          onResizeClick={() =>
            this.setState({ isFullscreen: !this.state.isFullscreen })
          }
        />*/}
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
