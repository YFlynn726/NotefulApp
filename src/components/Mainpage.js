import React, { Component } from "react";
import "./Mainpage.css";
//import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";

class Mainpage extends Component {
  static contextType = NotefulContext;

  render() {
    //how do i use context instead of the prop
    const notes = this.context.notes.map((note, index) => {
      return (
        <Link key={index} to={`/notes/${note.note_id}`}>
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
