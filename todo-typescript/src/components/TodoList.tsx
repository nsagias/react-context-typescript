const TodoList: React.FC<{items: string[]}> = (props) => {
  return (
    <div>
      <ul>
        {Array.isArray(props.items) && props.items.map((item, index) => <li key={index}>{item}</li>)}
        {!Array.isArray(props.items) && <div>empty todo list</div>}
      </ul>
    </div>
  );
}
export default TodoList;