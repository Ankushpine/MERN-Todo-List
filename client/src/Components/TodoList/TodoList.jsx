import { useEffect } from "react";
import { getTodo } from "../../Redux/Actions/todoAction";
import { useDispatch, useSelector } from "react-redux";
import TodosComp from "../TodosComp/TodosComp";
import Tabs from "../Tabs/Tabs";
import { deleteTodo } from "../../Redux/Actions/todoAction";

import {
  ALL_TODO,
  ACTIVE_TODOS,
  DONE_TODOS,
} from "../../Redux/Actions/todoAction";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const getTods = () => {
    if (currentTab == ALL_TODO) {
      return todos;
    } else if (currentTab == ACTIVE_TODOS) {
      return todos.filter((value) => !value.done);
    } else if (currentTab == DONE_TODOS) {
      return todos.filter((value) => value.done);
    }
  };

  const removeDone = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {todos.some((value) => value.done) ? (
          <button onClick={removeDone} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>

      <ul>
        {getTods().map((value, i) => (
          <TodosComp key={i} todos={value} />
        ))}
      </ul>
    </article>
  );
}
