import Todo from "../models/todo";

const TodoItem: React.FC<{items: Todo[]}>= (props) => {
  return (
    <ul>
      {Array.isArray(props.items) && props.items.map(item => <li key={item.id}>{item.text}</li>)}
      {!Array.isArray(props.items) && <div>empty todo list</div>}
    </ul>
  );
};

export default TodoItem;