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
        <div className = "black-bg-unitodo">
          <h1 id="main-text">uniTodo</h1>
        </div>
        <div className="input-group">
          <input
            placeholder="Adicione uma tarefa"
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
        <div className="created-concluded">
          <p id="created-tasks">Tarefas Criadas</p><p id="concluded-tasks">Concluídas</p>
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
