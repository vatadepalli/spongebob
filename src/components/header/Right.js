import React, { Component } from "react";

export default class Right extends Component {
  render() {
    return (
      <div className="HeaderRight">
        <button className="btn-sm btn-theme mr-1 shadow">Live</button>
        <button className="btn-sm btn-theme mr-1">
          View
          <i className="fas fa-binoculars ml-1" />
        </button>
        <button className="btn-sm btn-theme mr-1">
          Publish <i className="fas fa-upload ml-1" />
        </button>
        <button className="btn-sm btn-theme mr-1">
          <i className="fas fa-cog" />
        </button>
      </div>
    );
  }
}
