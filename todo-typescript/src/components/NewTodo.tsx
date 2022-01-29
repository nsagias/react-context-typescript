interface IhandleSubmit {
  (event: any): void;
} 

const NewTodo: React.FC = (props) => {

  const handleSubmit: IhandleSubmit = (event) => {
    event.preventDefault();
  };
  
  return  (
    <form onSubmit={handleSubmit}>

    </form>
  );
};
export default NewTodo;