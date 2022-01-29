
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{items: Todo[]}> = (props) => {
  const {items} = props;

  return (
    <>
      {/* <ul>
        {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)}
        {!Array.isArray(props.items) && <div>empty todo list</div>}
      </ul> */}
      <TodoItem items={items}/>
    </>
  );
}
export default TodoList;