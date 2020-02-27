import React, { Component } from "react";
import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";

class Notepage extends Component {
  render() {
    const noteId = this.props.match.params.note_id;
    // loop through notes from store and filter for the notes
    // that have a note matching this note id
    console.log(this.props.match);
    const notedetails = STORE.notes

      .filter(note => {
        return note.id === noteId;
      })
      .map(note => {
        return (
          <div key={note.id}>
            <li>{note.name}</li>
            <li>{note.content}</li>
          </div>
        );
      });

    return (
      <div className="content">
        <ul>{notedetails}</ul>
        <Link to={"/"}>
          <input type="button" value="Go Back" />
        </Link>{" "}
      </div>
    );
  }
}

export default Notepage;
