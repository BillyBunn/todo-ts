import uuid from "uuid/v4";

export const Todo = (text: string) => ({
  id: uuid(),
  done: false,
  text
});

export interface Todo extends ReturnType<typeof Todo> {}
