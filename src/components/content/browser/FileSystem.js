import React, { Component } from "react";
// import FileTree from "react-filetree-electron";

export default class FileSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesystem: {}
    };
  }

  render() {
    //
    return <div className="FileSystem m-2" />;
  }
}
