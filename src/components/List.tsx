import React from "react";
import Todo from "./Todo";

const List = ({ todos }) => {
  return (
    todos &&
    todos.map((todo, idx) => <Todo text={todo.description} key={idx} />)
  );
};

export default List;
