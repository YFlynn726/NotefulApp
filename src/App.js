import React, { Component } from "react";
import "./App.css";
import Mainpage from "./Mainpage";
import Folderpage from "./Folderpage";
import Notepage from "./Notepage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
//import dummyStore from "./dummy-store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import NotefulContext from "./NotefulContext";

class App extends Component {
  state = {
    notes: [],
    folders: []
  };
  componentDidMount() {
    //setTimeout(() => this.setState(dummyStore), 600);
  }
  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
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
