import React from "react";

class Form extends React.Component {
  state = {
    newTodo: ""
  };
  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.handleSubmit(this.state.newTodo);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
