import "./styles.css";

import TodoHeader from "./components/TodoHeader";
import Todos from "./components/Todos";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <div className="Todo_main_container">
        <TodoHeader />
        <Todos />
        <Button />
      </div>
    </div>
  );
}
