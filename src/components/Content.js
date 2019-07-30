import React, { Component, Fragment } from "react";
import Browser from "./content/Browser";
import MDArea from "./content/MDArea";
import TextArea from "./content/TextArea";

export default class Content extends Component {
  render() {
    return (
      <div className="ContentInner">
        <div className="Browser">
          <Browser />
        </div>
        <div className="MDArea">
          <MDArea />
        </div>
        <div className="TextArea">
          <TextArea />
        </div>
      </div>
    );
  }
}
