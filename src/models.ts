import uuid from "uuid/v4";

export const Todo = (description: string) => ({
  id: uuid(),
  done: false,
  description
});

export interface Todo extends ReturnType<typeof Todo> {}
