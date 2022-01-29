import React, { useRef } from "react";

interface IhandleSubmit {
  (event: React.FormEvent): void;
} 

const NewTodo: React.FC = () => {

  const todoTextInputRef = useRef();

  const handleSubmit: IhandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  
  return  (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Enter Todo:</label>
      <input type="text" id="text" />
      <button>Submit!</button>
    </form>
  );
};
export default NewTodo;