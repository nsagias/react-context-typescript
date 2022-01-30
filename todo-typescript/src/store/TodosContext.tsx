import React, {createContext, useState} from "react";
import Todo from "../models/todo";

interface ITodoContext {
  items: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: string) => void; 
}

const TodosContext = createContext<ITodoContext>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
});


const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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


export default TodosContext;