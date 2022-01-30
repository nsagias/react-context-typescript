import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodosContextProvider from './store/TodosContext';



function App() {
  // const todos = [
  //   new Todo("Code!"),
  //   new Todo("Code some more")
  // ];


  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <TodoList/>
      </div>
    </TodosContextProvider>
  );
}

export default App;
