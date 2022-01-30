import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';



function App() {
  // const todos = [
  //   new Todo("Code!"),
  //   new Todo("Code some more")
  // ];


  return (
    <div className="App">
      <NewTodo />
      <TodoList/>
    </div>
  );
}

export default App;
