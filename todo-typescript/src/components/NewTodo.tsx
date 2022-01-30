import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from "./NewTodo.module.css";

interface IHandleSubmit {
  (event: React.FormEvent): void;
} 

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const INPUTREF_DEFAULT = null;
  const todoTextInputRef = useRef<HTMLInputElement>(INPUTREF_DEFAULT);

  const handleSubmit: IHandleSubmit= (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;  

    if (enteredText.trim().length === 0) {
      // throw error or reply error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  
  return  (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Enter Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Submit!</button>
    </form>
  );
};
export default NewTodo;