import React from "react";
import { Todo } from "../models";

type Props = {
  todos: Todo[];
  handleTodoCompletion: (id: string) => void;
  handleTodoDeletion: (id: string) => void;
  handleTodoEdit: (id: string) => void;
};

class List extends React.Component<Props, {}> {
  render() {
    return (
      <ul>
        {this.props.todos.map(({ id, text, done, editing }) => (
          <li key={id} className={done ? "done" : ""}>
            {/* <button onClick={() => this.props.handleTodoEdit(id)}>Edit</button> */}
            <input
              type="text"
              readOnly={!editing}
              value={text}
              onClick={() => this.props.handleTodoCompletion(id)}
            />
            <button onClick={() => this.props.handleTodoDeletion(id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
