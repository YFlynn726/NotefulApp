import React, { Component } from "react";
import "./Sidebar.css";
import "./dummy-store";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <NavLink to={this.props.folders.name}>File 1</NavLink>
        <NavLink to="">File 2</NavLink>
        <NavLink to="">File 3</NavLink>

        <input type="button" value="Add File" />
      </div>
    );
  }
}

export default Sidebar;
