import { TableHead } from "./Components/TableHead";
import { useState } from "react";
import { toDoData } from "./toDoData";
import { ToDoTask } from "./Components/ToDoTask";
import { CreateNewTask } from "./Components/CreateNewTask";

function App() {
  const [toDo, setToDo] = useState(toDoData);

  return (
    <div className="App">
      <h1>To Do App</h1>
      <TableHead />
      {
        toDo.map((toDo, index) => (
          <ToDoTask
            index={index}
            toDo={toDo} />
        ))
      }

      <div>
        <CreateNewTask />
      </div>
    </div>
  );
}
export default App;
