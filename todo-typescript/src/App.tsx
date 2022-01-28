import './App.css';
import TodoList from './components/TodoList';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo("Code"),
    new Todo("code some more")
  ];

  return (
    <div className="App">
      <TodoList items={["get this done", "get it done yesterday"]}/>
    </div>
  );
}

export default App;
