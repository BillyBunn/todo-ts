import React from "react";

type Props = {
  handleSubmit: (text: string) => void;
};
type State = {
  newTodo: string;
};

class Form extends React.Component<Props, State> {
  state = {
    newTodo: ""
  };
  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.props.handleSubmit(this.state.newTodo);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="New todo item"
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Form;
