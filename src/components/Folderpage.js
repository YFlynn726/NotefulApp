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
    //console.log(this.context.notes);
    // console.log("Notes");
    const folderId = this.props.match.params.folder_id;
    // loop through notes from store and filter for the notes
    // that have a folder matching this folder id
    //const folderId = this.context;
    // console.log("Folder ID");
    console.log(folderId);
    const filteredNotes = this.context.notes.filter((note) => {
      //console.log(`${typeof folderId} vs ${typeof note.folder_id}`);
      // console.log(`${folderId} vs ${note.folder_id}`);
      //console.log(note);
      // eslint-disable-next-line eqeqeq
      return note.folder_id == folderId;
    });
    // console.log("Filtered notes");
    console.log(filteredNotes);
    const notes = filteredNotes.map((note, index) => {
      return (
        <Link key={index} to={`/notes/${note.note_id}`}>
          <li>{note.name}</li>
        </Link>
      );
    });
    console.log(notes);
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

export default Folderpage;
