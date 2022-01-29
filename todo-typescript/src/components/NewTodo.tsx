interface IhandleSubmit {
  (event: any): void;
} 

const NewTodo: React.FC = (props) => {

  const handleSubmit: IhandleSubmit = (event) => {
    event.preventDefault();
  };
  
  return  (
    <form onSubmit={handleSubmit}>
      <label>Enter Todo:</label>
      <input type="text" />
      <button>Submit!</button>
    </form>
  );
};
export default NewTodo;