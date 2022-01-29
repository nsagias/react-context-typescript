import { useState } from "react";

import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './models/todo';


function App() {
  // const todos = [
  //   new Todo("Code!"),
  //   new Todo("Code some more")
  // ];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    
    setTodos((currentTodos) =>  [...currentTodos, newTodo]);
  };

  const deleteTodoHander = () => {

  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todos} onDeleteTodo={}/>
    </div>
  );
}

export default App;
