
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{items: Todo[]}> = (props) => {
  const {items} = props;

  return (
    <>
      <TodoItem items={items}/>
    </>
  );
}
export default TodoList;