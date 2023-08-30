import { useState } from "react";
import { addTodo } from "../../Redux/Actions/todoAction";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          value={text}
          placeholder="Enter New Todo...."
          type="text"
          className="inputText"
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
}
