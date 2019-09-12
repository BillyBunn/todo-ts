import React from "react";
import { Todo } from "../models";
import Form from "./Form";
import List from "./List";

type State = typeof initialState;

const initialState = Object.freeze({
  // Todo used as type
  todos: [] as null | Todo[]
  // todos: [{id: '1', done: false, description: 'foo'}]
});

class App extends React.Component<{}, State> {
  readonly state = initialState;
  handleTodoCreation = (text: string) => {
    const newTodo = Todo(text);
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <header>Todo list</header>
        <Form handleSubmit={this.handleTodoCreation} />
        <List todos={this.state.todos} />
      </>
    );
  }
}

export default App;
