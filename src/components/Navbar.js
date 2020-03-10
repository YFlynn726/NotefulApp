import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Noteful</Link>
      </nav>
    );
  }
}

export default Navbar;
