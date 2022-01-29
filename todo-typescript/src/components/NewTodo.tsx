import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

interface IHandleSubmit {
  (event: React.FormEvent): void;
} 

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

  const INPUTREF_DEFAULT = null;
  const todoTextInputRef = useRef<HTMLInputElement>(INPUTREF_DEFAULT);

  const handleSubmit: IHandleSubmit= (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;  

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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