import React, { Component } from "react";
import FileSystem from "./browser/FileSystem";
import BrowserHead from "./browser/BrowserHead";

import "./Browser.css";

export default class Browser extends Component {
  render() {
    return (
      <div className="BrowserInner">
        <BrowserHead />
        <FileSystem />
      </div>
    );
  }
}
