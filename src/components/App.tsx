import React from "react";
import Form from "./Form";
import List from "./List";
// Todo is both factory and type
import { Todo } from "../models";

import "./styles.scss";

const initialState = Object.freeze({
  // Todo used as type
  todos: [
    { id: "1", text: "a task", done: false },
    { id: "2", text: "another task", done: false },
    { id: "3", text: "do this thing", done: true },
    { id: "4", text: "another thing to do", done: false }
  ] as Todo[]
});
type State = typeof initialState;

class App extends React.Component<{}, State> {
  readonly state = initialState;

  handleTodoCreation = (text: string) => {
    // Todo used as factory
    const newTodo = Todo(text);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleTodoCompletion = (id: string) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    });
  };

  handleTodoDeletion = (id: string) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <>
        <h1>Todo List</h1>
        <Form handleTodoCreation={this.handleTodoCreation} />
        <List
          todos={this.state.todos}
          handleTodoCompletion={this.handleTodoCompletion}
          handleTodoDeletion={this.handleTodoDeletion}
        />
      </>
    );
  }
}

export default App;
