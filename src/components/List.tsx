import React from "react";
import { Todo } from "../models";

type Props = {
  todos: Todo[];
  handleTodoCompletion: (id: string) => void;
};

class List extends React.Component<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.todos.map(({ id, text, done }) => (
          <li key={id}>
            <span
              style={{ textDecoration: done ? "line-through" : "" }}
              onClick={() => this.props.handleTodoCompletion(id)}
            >
              {text}
            </span>
            <button>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
