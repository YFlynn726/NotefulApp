import React, { Component } from "react";
import "./App.css";
import Mainpage from "./Mainpage";
import Folderpage from "./Folderpage";
import Notepage from "./Notepage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import dummyStore from "./dummy-store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    notes: [],
    folders: []
  };
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Mainpage} />
            <Route path="/folders/:folder_id" component={Folderpage} />
            <Route path="/notes/:note_content" component={Notepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
