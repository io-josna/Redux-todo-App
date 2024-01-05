import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./Actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a ToDo"
            className="toDo-input"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="toDo-button">
            Go
          </button>
        </form>
        <ul className="alltodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singletodo">
                <span className="todo-text">{t.todo}</span>
                <button
                  className="list-todo-button"
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
