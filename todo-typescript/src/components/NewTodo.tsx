interface IhandleSubmit {
  (event: any): void;
} 

const NewTodo: React.FC = (props) => {

  const handleSubmit: IhandleSubmit = (event) => {
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