import React, { Component } from "react";
//import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";
//import config from "./config";
import "./notepage.css";

class Notepage extends Component {
  static contextType = NotefulContext;

  deleteNoteRequest = () => {
    this.context.deleteNote(this.props.match.params.note_id);
    this.props.history.push("/");
  };

  render() {
    //const noteId = this.context;
    const noteId = this.props.match.params.note_id;
    // loop through notes from store and filter for the notes
    // that have a note matching this note id
    console.log(this.props.match);
    console.log(this.context.notes);

    const notedetails = this.context.notes

      .filter(note => {
        return note.id === noteId;
      })
      .map(note => {
        return (
          <div key={note.id}>
            <li className="note_title">{note.name}</li>
            <p>
              {note.content}

              <br />
              <button
                className="delete_button"
                onClick={this.deleteNoteRequest}
              >
                Delete
              </button>
            </p>
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
