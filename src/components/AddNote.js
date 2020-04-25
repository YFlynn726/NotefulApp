import React, { Component } from "react";
import NotefulContext from "./NotefulContext";
import ValidationError from "./ValidateError";

class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      //folder_id: "",
      error: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // validate and update the state if there is an error
    const isValid = this.validateName();
    if (!isValid.error) {
      this.addNote();
    } else {
      this.updateError(isValid.value);
    }
  };

  addNote = () => {
    this.context.addNote(
      this.state.name,
      this.state.content,
      this.state.folder_id
    );
    this.props.history.push("/");
  };

  updateError = (err) => {
    this.setState({
      error: err,
    });
  };

  validateName = () => {
    const name = this.state.name.trim();
    const result = { error: false, value: name };
    if (name.length <= 2) {
      result.error = true;
      result.value = "Name must be at least 3 characters long";
    }

    return result;
  };

  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFolderChange = (event) => {
    this.setState({ folder_id: event.target.value });
  };
  render() {
    const { error } = this.state;
    const validationError = error ? <ValidationError message={error} /> : "";

    const { name } = this.state;
    const { content } = this.state;
    //console.log(this.state);

    let options = this.context.folders.map((folder) => {
      return (
        <option key={folder.id} value={folder.id}>
          {folder.name}
        </option>
      );
    });
    return (
      <form className="content" onSubmit={this.handleSubmit}>
        <label>
          Select folder:
          <select onChange={this.handleFolderChange}>{options}</select>
        </label>

        <br />

        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            min="3"
            required
          />
          {validationError}
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
