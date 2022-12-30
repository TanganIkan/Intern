import React, { FC, ChangeEvent, useState } from "react";
import "./app1.css";
import TodoTask from "../Components/TodoTask";

const App2: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("");
  const [todoList, setTodoList] = useState<MyTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(String(event.target.value));
    }
  };

  const addTask = (): void => {
    if(!task){
      alert("Type your task first!")
    } 
    else if (!deadline){
      alert("Select a number to continue!")
    }
      else{
         const newTask = { taskName: task, deadline: deadline };
         setTodoList([...todoList, newTask]);
         setTask("");
         setDealine("");
      }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="title">
        <h1>Task Project</h1>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: MyTask, key: number ) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App2;
