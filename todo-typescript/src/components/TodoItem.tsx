import React, {useContext} from "react";
import classes from "./TodoItem.module.css"
import { TodosContext } from "../store/TodosContext";


const TodoItem: React.FC<{text: string; onDeleteTodo: () => void }>= (props) => {
  const todoCtx = useContext(TodosContext)
  
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>
     {props.text}
    </li>
  );
};

export default TodoItem;