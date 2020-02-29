import React, { Component } from "react";
//import STORE from "./dummy-store.js";
import { Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";

// the id of the folder you're currently viewing
// can get accessed from the route params
// this.props.match.params
// filter through the notes using the folder id

class Folderpage extends Component {
  static contextType = NotefulContext;
  render() {
    const folderId = this.props.match.params.folder_id;
    // loop through notes from store and filter for the notes
    // that have a folder matching this folder id
    //const folderId = this.context;
    const notes = this.context.notes
      .filter(note => {
        return note.folderId === folderId;
      })
      .map(note => {
        return (
          <Link key={note.id} to={`/notes/${note.id}`}>
            <li>{note.name}</li>
          </Link>
        );
      });

    return (
      <div className="content">
        <ul>{notes}</ul>
      </div>
    );
  }
}

export default Folderpage;
