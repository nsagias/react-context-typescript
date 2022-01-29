import React, { useRef } from "react";

interface IHandleSubmit {
  (event: React.FormEvent): void;
} 

const NewTodo: React.FC = () => {

  const INPUTREF_DEFAULT = null;
  const todoTextInputRef = useRef<HTMLInputElement>(INPUTREF_DEFAULT);

  const handleSubmit: IHandleSubmit= (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;  

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  
  return  (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Enter Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Submit!</button>
    </form>
  );
};
export default NewTodo;