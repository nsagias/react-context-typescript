
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/TodosContext";
import classes from "./TodoList.module.css";
import { useContext } from "react";

const TodoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {/* {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)} */}
      {Array.isArray(todosCtx.items) && todosCtx.items.map(item => 
        <TodoItem 
          key={item.id} 
          text={item.text} 
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}  
        /> 
      )}
        
      {!Array.isArray(todosCtx.items) && <div>empty todo list</div>}  
    </ul>
  );
}
export default TodoList;