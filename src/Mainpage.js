import React, { Component } from "react";
import "./Mainpage.css";
import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";

class Mainpage extends Component {
  render() {
    const notes = STORE.notes.map(note => {
      return (
        <Link key={note.id} to={`/notes/${note.id}`}>
          <li>{note.name}</li>
        </Link>
      );
    });

    return (
      <div className="content">
        <ul>{notes}</ul>
        <Link to={"/AddNote"}>
          <input type="button" value="Add Note" />
        </Link>
      </div>
    );
  }
}

export default Mainpage;
