import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  toggleTodo,
  updateTodo,
  deleteTodo,
} from "../../Redux/Actions/todoAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function TodosComp({ todos }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todos.data);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(todos._id, text));
    setEdit(false);
  };

  const handleClick = () => {
    setEdit((prevState) => !prevState);
    setText(todos.data);
  };

  return (
    <li className="task">
      <span
        className="taskFeild"
        onClick={() => dispatch(toggleTodo(todos._id))}
        style={{
          textDecoration: todos.done ? "line-through" : "",
          color: todos.done ? "rgb(161, 157, 157)" : "white",
          display: edit ? "none" : "",
        }}
      >
        {todos.data}
      </span>

      <form
        className="editTodoForm"
        style={{ display: edit ? "" : "none" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          className="editTodo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="pen icon">
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleClick} />
      </span>

      <span
        className="trash icon"
        onClick={() => dispatch(deleteTodo(todos._id))}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}
