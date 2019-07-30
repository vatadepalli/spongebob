import React, { Component, Fragment } from "react";
import Browser from "./content/Browser";
import Panes from "./content/Panes";

import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="ContentInner">
        <div className="Browser">
          <Browser />
        </div>
        <div className="Panes">
          <Panes />
        </div>
      </div>
    );
  }
}
