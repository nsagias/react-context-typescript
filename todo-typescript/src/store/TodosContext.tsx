import React, {createContext, useState} from "react";
import Todo from "../models/todo";

interface ITodoContext {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void; 
}

export const TodosContext = createContext<ITodoContext>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
});


const TodosContextProvider: React.FC = (props) => {
  const INTITIAL_STATE: Todo[] = [];
  const [todos, setTodos] = useState<Todo[]>(INTITIAL_STATE);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    
    setTodos((currentTodos) =>  [...currentTodos, newTodo]);
  };

  const deleteTodoHander = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  const contextValue: ITodoContext = {
    items: todos, 
    addTodo: addTodoHandler, 
    deleteTodo: deleteTodoHander
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
};


export default TodosContextProvider;