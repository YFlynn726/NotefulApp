import React, { Component } from "react";
import "./Sidebar.css";
//import STORE from "./dummy-store.js";
import NotefulContext from "./NotefulContext";
import { NavLink, Link } from "react-router-dom";

// use the folder data to generate folder NavLinks
// attach each id of a folder to the NavLink

class Sidebar extends Component {
  static contextType = NotefulContext;

  render() {
    const folders = this.context.folders.map((folder) => {
      return (
        <NavLink
          activeStyle={{
            background: "lightslategray",
            color: "white",
          }}
          key={folder.id}
          to={`/folders/${folder.id}`}
        >
          {folder.name}
        </NavLink>
      );
    });
    //console.log(folders);
    //console.log(this.context.folders);
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
