import React from "react";
import Todo from "./Todo";

const List = ({ todos }) =>
  todos.map((todo, idx) => <Todo text={todo.text} key={idx} />);

export default List;
