export default function TodoList() {
  let todos = ["Go to the gym", "Eat more vegs", "Study"];
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex}>
                {todo}
                <i className="fa-regular fa-pen-to-square"></i>
          </li>
        );
      })}
    </ul>
  );
}
