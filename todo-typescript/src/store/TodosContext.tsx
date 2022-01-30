import React, {createContext} from "react";
import Todo from "../models/todo";



const TodosContext = createContext({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
});

export default TodosContext;