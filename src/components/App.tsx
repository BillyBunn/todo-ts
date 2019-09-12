import React from "react";
import uuid from "uuid/v4";
import Form from "./Form";
import List from "./List";

type Props = {};
type State = {
  todos: TodoItem[];
};
type TodoItem = {
  id: string;
  complete: boolean;
  text: string;
};

class App extends React.Component<Props, State> {
  state = {
    todos: [
      { text: "a thing", complete: false, id: "1" },
      { text: "another thing", complete: false, id: "2" }
    ]
  };

  handleSubmit = text => {
    const newTodo = {
      text,
      complete: false,
      id: uuid()
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <>
        <header>Todo list</header>
        <Form handleSubmit={this.handleSubmit} />
        <List todos={this.state.todos} />
      </>
    );
  }
}

export default App;
