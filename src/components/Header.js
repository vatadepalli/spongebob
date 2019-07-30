import React, { Component } from "react";

import Left from "./header/Left";
import Center from "./header/Center";
import Right from "./header/Right";

export default class Header extends Component {
  render() {
    return (
      <div className="HeaderInner shadow disable-select">
        <Left />
        <Center />
        <Right />
      </div>
    );
  }
}
