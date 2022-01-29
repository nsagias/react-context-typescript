import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo("Code!"),
    new Todo("Code some more")
  ];

  const addTodoHandler = (todoText: string) => {

  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
