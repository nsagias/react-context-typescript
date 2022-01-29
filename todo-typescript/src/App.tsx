import './App.css';
import TodoList from './components/TodoList';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo("Code!"),
    new Todo("Code some more")
  ];

  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
