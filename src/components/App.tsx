import React from "react";
import Form from "./Form";
import List from "./List";
// Todo is both factory and type
import { Todo } from "../models";

type State = typeof initialState;

const initialState = Object.freeze({
  // Todo used as type
  todos: [] as Todo[]
});

class App extends React.Component<{}, State> {
  readonly state = initialState;

  handleTodoCreation = (text: string) => {
    // Todo used as factory
    const newTodo = Todo(text);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleTodoCompletion = (id: string) => {
    console.log(id, "completed");
    let todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <header>Todo list</header>
        <Form handleTodoCreation={this.handleTodoCreation} />
        <List
          todos={this.state.todos}
          handleTodoCompletion={this.handleTodoCompletion}
        />
      </>
    );
  }
}

export default App;
