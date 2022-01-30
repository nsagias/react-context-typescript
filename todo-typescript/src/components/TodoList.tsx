
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/TodosContext";
import classes from "./TodoList.module.css";
import { useContext } from "react";

const TodoList: React.FC<{items: Todo[]; onDeleteTodo: (id: string) => void}> = (props) => {
  const todosCtx = useContext(TodosContext);


  return (
    <ul className={classes.todos}>
      {/* {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)} */}
      {Array.isArray(props.items) && props.items.map(item => 
        <TodoItem 
          key={item.id} 
          text={item.text} 
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}  
        /> 
      )}
        
      {!Array.isArray(props.items) && <div>empty todo list</div>}  
    </ul>
  );
}
export default TodoList;