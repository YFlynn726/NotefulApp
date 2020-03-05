import React, { Component } from "react";
import "./App.css";
import Mainpage from "./Mainpage";
import Folderpage from "./Folderpage";
import Notepage from "./Notepage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import config from "./config";
//import dummyStore from "./dummy-store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import NotefulContext from "./NotefulContext";

class App extends Component {
  state = {
    notes: [],
    folders: [],
    addNote: this.addNote,
    addFolder: this.addFolder
    //deleteNote: this.handleSubmit
  };
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  //need to update state for folders
  addFolder = folder => {
    console.log(folder);
    const newFolder = {
      //id: this.state.folders.length,
      name: folder
    };
    console.log(newFolder);

    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        auth: "1234"
      },
      body: JSON.stringify({ newFolder })
    })
      .then(function(data) {
        console.log("Request success: ", data);
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });

    console.log(newFolder);

    this.setState({ folders: [...this.state.folders, newFolder] });

    console.log(this.state.folders);
  };

  //need to update state for notes
  addNote = (note, content) => {
    console.log(note, content);
    const newNote = {
      id: this.state.notes.length,
      name: note,
      content: content
    };

    this.setState({ notes: [...this.state.notes, newNote] });
  };

  render() {
    const contextValue = {
      //does this need to be this.context
      notes: this.state.notes,
      folders: this.state.folders,
      addNote: this.addNote,
      //deleteNote: this.deleteNote,
      addFolder: this.addFolder
    };
    return (
      <Router>
        <div className="App">
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
        </div>
      </Router>
    );
  }
}

export default App;
