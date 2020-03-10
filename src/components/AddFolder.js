import React, { Component } from "react";
import NotefulContext from "./NotefulContext";
import ValidationError from "./ValidateError";

class AddFolder extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false
    };
  }

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validateName();
    if (!isValid.error) {
      this.addFolder();
    } else {
      this.updateError(isValid.value);
    }
  };

  addFolder = () => {
    this.context.addFolder(this.state.name);
    this.props.history.push("/");
  };

  updateError = err => {
    this.setState({
      error: err
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

  render() {
    const { error } = this.state;
    const validationError = error ? <ValidationError message={error} /> : "";

    const { name } = this.state;
    return (
      <form className="content" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddFolder;
