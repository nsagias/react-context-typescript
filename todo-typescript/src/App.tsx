import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo("Code!"),
    new Todo("Code some more")
  ];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
