import React, { Component } from "react";
import "./Mainpage.css";
import "./dummy-store";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

class Mainpage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="content">
            <ul>
              <Link>
                <li>Note 1</li>{" "}
              </Link>
              <Link>
                <li>Note 2</li>{" "}
              </Link>
              <Link>
                <li>Note 3</li>{" "}
              </Link>
              <Link>
                <li>Note 4</li>{" "}
              </Link>
              <Link>
                <li>Note 5</li>{" "}
              </Link>
            </ul>
            <input className="add-note" type="button" value="Add Note" />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Mainpage;
