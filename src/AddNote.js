import React, { Component } from "react";
import NotefulContext from "./NotefulContext";

class AddNote extends Component {
  //constructor(props) {
  //super(props);
  //this.state = { value: "" };

  //this.handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);
  //}
  static contextType = NotefulContext;

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="content" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddNote;
