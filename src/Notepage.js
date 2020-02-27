import React, { Component } from "react";
import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";

class Notepage extends Component {
  render() {
    const noteId = this.props.match.params.note_id;
    // loop through notes from store and filter for the notes
    // that have a note matching this note id
    const notedetails = STORE.notes
      .filter(note => {
        return note.content === noteId;
      })
      .map(note => {
        return (
          <Link key={note.id} to={`/notes/${note.content}`}>
            <p>{note.content}</p>
          </Link>
        );
      });

    return (
      <div className="content">
        <ul>{notedetails}</ul>
      </div>
    );
  }
}

export default Notepage;
