import React from "react";
import Todo from "./Todo";

const List = ({ todos }) => todos.map(todo => <Todo text={todo.text} />);

export default List;
