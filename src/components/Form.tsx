import React from "react";

type Props = {
  handleTodoCreation: (text: string) => void;
};
type State = {
  newTodo: string;
};

class Form extends React.Component<Props, State> {
  state = {
    newTodo: ""
  };
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ newTodo: e.currentTarget.value });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    this.state.newTodo && this.props.handleTodoCreation(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="newTodo"
          onChange={this.handleChange}
          placeholder="New todo item"
          type="text"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Form;
