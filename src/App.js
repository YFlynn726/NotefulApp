import React, { Component } from "react";
import "./App.css";
import Mainpage from "./components/Mainpage";
import Folderpage from "./components/Folderpage";
import Notepage from "./components/Notepage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import config from "./config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFolder from "./components/AddFolder";
import AddNote from "./components/AddNote";
import NotefulContext from "./components/NotefulContext";
import BoundaryError from "./components/BoundaryError";

class App extends Component {
  state = {
    notes: [],
    folders: [],
    addNote: this.addNote,
    addFolder: this.addFolder,
    deleteNote: this.deleteNote,
  };

  // deleteNote = (noteId) => {
  //   console.log("i made it here");

  //   const newNotes = this.state.notes.filter((note) => {
  //     //console.log(note.note_id.toString(), noteId.toString());
  //     return note.note_id.toString() !== noteId.toString();
  //   });
  //   console.log(newNotes);
  //   fetch(`${config.API_ENDPOINT}api/notes/:note_id`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newNotes),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Request success: ", data);

  //       this.setState({
  //         notes: newNotes,
  //       });
  //       console.log(this.state);
  //     })
  //     .catch((error) => {
  //       console.log("Request failure: ", error);
  //     });
  // };

  deleteNote = (noteId) => {
    console.log("i made it here");

    const newNotes = this.state.notes.filter((note) => {
      //console.log(note.note_id.toString(), noteId.toString());
      return note.note_id.toString() !== noteId.toString();
    });
    console.log(newNotes);
    fetch(`${config.API_ENDPOINT}api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(this.state);
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });
    this.setState({
      notes: this.state.notes.filter((note) => +note.note_id !== +noteId),
    });
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}api/notes`),
      fetch(`${config.API_ENDPOINT}api/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        //console.log(notes);
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  //need to update state for folders
  addFolder = (folder) => {
    console.log(folder);
    const newFolder = {
      name: folder,
    };
    console.log(newFolder);

    fetch(`${config.API_ENDPOINT}api/folders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFolder),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);
        this.setState({
          id: Response.id,
          folders: [...this.state.folders, data],
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });

    console.log(newFolder);

    console.log(this.context);
  };

  //need to update state for notes
  addNote = (note, content, folder_id) => {
    console.log(note, content);
    const newNote = {
      name: note,
      content: content,
      folder_id,
    };
    console.log(newNote);
    fetch(`${config.API_ENDPOINT}api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Request success: ", data);

        this.setState({
          notes: [...this.state.notes, data],
          note_id: Response.note_id,
          folder_id: Response.folder_id,
          modified: Response.modified,
        });
      })
      .catch((error) => {
        console.log("Request failure: ", error);
      });

    console.log(newNote);
    console.log(this.state.notes);
  };
  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
    };
    return (
      <Router>
        <div className="App">
          <BoundaryError>
            <NotefulContext.Provider value={contextValue}>
              <Navbar />
              <Sidebar />
              <Switch>
                <Route path="/" exact component={Mainpage} />
                <Route path="/folders/:folder_id" component={Folderpage} />
                <Route path="/notes/:note_id" component={Notepage} />
                <Route path="/AddFolder" exact component={AddFolder} />
                <Route path="/AddNote" exact component={AddNote} />
              </Switch>
            </NotefulContext.Provider>
          </BoundaryError>
        </div>
      </Router>
    );
  }
}

export default App;
