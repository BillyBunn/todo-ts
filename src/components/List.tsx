import React from "react";
import { Todo } from "../models";

type Props = {
  todos: Todo[];
  handleTodoCompletion: (id: string) => void;
  handleTodoDeletion: (id: string) => void;
};

class List extends React.Component<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.todos.map(({ id, text, done }) => (
          <li key={id} className={done ? "done" : ""}>
            <span onClick={() => this.props.handleTodoCompletion(id)}>
              {text}
            </span>
            <button onClick={() => this.props.handleTodoDeletion(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
