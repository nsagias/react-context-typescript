import React, {createContext} from "react";
import Todo from "../models/todo";

interface ITodoContext {
  items: Todo[];
  addTodo: () => void;
  deleteTodo: (id: string) => void; 
}

const TodosContext = createContext<ITodoContext>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
});

export default TodosContext;