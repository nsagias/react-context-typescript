import React, { useRef } from "react";

interface IhandleSubmit {
  (event: React.FormEvent): void;
} 

const NewTodo: React.FC = () => {

  const INPUTREF_DEFAULT = null;
  const todoTextInputRef = useRef<HTMLInputElement>(INPUTREF_DEFAULT);

  const handleSubmit: IhandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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