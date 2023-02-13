import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [input, setInput] = useState<string>();
  const [toDoList, setToDoList] = useState<any>([]);
  const [countDone, setCountDone] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const toDoListDone = toDoList.filter((item: any) => item.done === true)
  const toDoListNotDone = toDoList.filter((item: any) => item.done === false)

  useEffect(() => {
    setCount(toDoList.length);
    setCountDone(toDoList.filter((item: any) => item.done === true).length);
  }, [toDoList]);

  const handleDelete = (id: number) => {
    setToDoList(toDoList.filter((item: any) => item.id !== id));
  };

  const handleChange = (id: number) => {
    setToDoList(
      toDoList.map((item: any) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <header>
        <div className="black-bg-unitodo">
          <h1 id="main-text">uniToDo</h1>
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
              setToDoList([
                ...toDoList,
                {
                  id: count,
                  task: input,
                  done: false,
                },
              ]);
              setInput("");
            }}
          >
            Criar
          </button>
        </div>
        <div className="created-concluded">
          <p id="created-tasks">
            Tarefas Criadas <span>{count}</span>
          </p>
          <p id="concluded-tasks">
            Concluídas <span>{countDone} de {count}</span>
          </p>
        </div>
      </header>
      <div className="task-list">
        {toDoListNotDone.map((item: { id: number; task: string; done: boolean }) => (
          <Card
            key={item.id}
            task={item.task}
            isChecked={item.done}
            onCheck={() => {
              handleChange(item.id);
            }}
            onDelete={() => {
              handleDelete(item.id);
            }}
          />
        ))}
        {toDoListDone.map((item: { id: number; task: string; done: boolean }) => (
          <Card
            key={item.id}
            task={item.task}
            isChecked={item.done}
            onCheck={() => {
              handleChange(item.id);
            }}
            onDelete={() => {
              handleDelete(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
