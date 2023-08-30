import "./App.css";
import { Provider } from "react-redux";

//Redux Store
import { store } from "./Redux/Store";

//Components
import Header from "./Components/Header/Header";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
