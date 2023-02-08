import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [input, setInput] = useState<string>();
  const [toDoList, setToDoList] = useState<any>([]);
  console.log(toDoList);

  return (
    <div className="App">
      <header>
        <h1>UniToDo</h1>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setToDoList([...toDoList, input]);
              setInput("");
            }}
          >
            Criar
          </button>
        </div>
      </header>
      <div className="task-list">
        {toDoList.map((item: string) => (
          <Card task={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
