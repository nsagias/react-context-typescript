
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{items: Todo[]}> = (props) => {
  const {items} = props;

  return (
    <>
     
      {/* {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)} */}
      {Array.isArray(props.items) 
          && props.items.map(item => <TodoItem key={item.id} text={item.text} />)}

      {!Array.isArray(props.items) && <div>empty todo list</div>}
    </>
  );
}
export default TodoList;