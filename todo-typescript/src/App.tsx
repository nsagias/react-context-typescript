import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList items={["get this done", "get it done yesterday"]}/>
    </div>
  );
}

export default App;
