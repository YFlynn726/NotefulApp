import React, { Component } from "react";
//import NotefulContext from "./NotefulContext";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //static contextType = NotefulContext;
  }
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
            value={this.context.value}
            onChange={() => this.context.onChange}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={this.context.value}
            onChange={() => this.context.onChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={() => this.context.onSubmit}
        />
      </form>
    );
  }
}

export default AddNote;
