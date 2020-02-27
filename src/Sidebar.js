import React, { Component } from "react";
import "./Sidebar.css";
import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";

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
        <Link to={"/AddFolder"}>
          <input
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            type="button"
            value="Add Folder"
          />
        </Link>
      </div>
    );
  }
}

export default Sidebar;
