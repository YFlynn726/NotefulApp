import React, { Component } from "react";
import NotefulContext from "./NotefulContext";

class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    //console.log(event);
    this.context.addNote(this.state.name, this.state.content);
    // console.log(this.state.name);
    //console.log(this.state.content);
    console.log(this.context);
    //window.location.href = "/";
    //console.log("Content: ", content.value);
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name } = this.state;
    const { content } = this.state;
    console.log(this.state);
    return (
      <form className="content" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Content:
          <input
            name="content"
            type="text"
            value={content}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddNote;
