import React, { Component } from "react";
import "./Sidebar.css";
import STORE from "./dummy-store.js";
import { Link, Router, Route } from "react-router-dom";

// use the folder data to generate folder NavLinks
// attach each id of a folder to the NavLink

class Sidebar extends Component {
  render() {
    const folders = STORE.folders.map(folder => {
      return (
        <Link key={folder.id} to={`/folders/${folder.id}`}>
          {folder.name}
        </Link>
      );
    });

    return (
      <div className="sidebar">
        {folders}
        <input type="button" value="Add File" />
      </div>
    );
  }
}

export default Sidebar;
