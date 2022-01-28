
import Todo from "../models/todo";

const TodoList: React.FC<{items: Todo[]}> = (props) => {
  return (
    <div>
      <ul>
        {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)}
        {!Array.isArray(props.items) && <div>empty todo list</div>}
      </ul>
    </div>
  );
}
export default TodoList;