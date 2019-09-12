import React from "react";
import Todo from "./Todo";

class Form extends React.Component {
  state = {
    newTodo: ""
  };
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
