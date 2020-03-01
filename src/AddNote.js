import React, { Component } from "react";
//import NotefulContext from "./NotefulContext";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //static contextType = NotefulContext;
  }

  handleSubmit = event => {
    event.preventDefault();
    //const { name, content } = this.handleSubmit;
    const data = this.context;
    console.log(data);
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
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddNote;
