import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useState } from "react";
import { addTask, deleteTask, updateTask } from "./store/reducer";

function App() {
  const dispatch = useDispatch();
  const tasksArr = useSelector((state) => state.tasks.tasksArr);

  const [taskInput, setTaskInput] = useState("");
  const [updateTaskInputs, setUpdateTaskInputs] = useState([]);
  let [taskToUpdateInput, setTaskToUpdateInput] = useState("");

  
  const [selectedTask, setSelectedTask] = useState("");

  const handleSelectChange = (e) => {
    setSelectedTask(e.target.value);
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleAddTask = () => {
    if (taskInput) {
      dispatch(addTask(taskInput));
    }
    setTaskInput("");
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const index = tasksArr.indexOf(selectedTask);
    if (index !== -1 && updateTaskInputs[index]) {
      dispatch(updateTask({ id: index, task: updateTaskInputs[index] }));
      setTaskToUpdateInput("");
      setUpdateTaskInputs((prevInputs) => {
        let newArr = [...prevInputs];
        newArr[index] = "";
        
        return newArr;
      });
    }
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-add-container">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="input-box"
            placeholder="Enter task"
          />
          <button onClick={handleAddTask} type="submit" className="add-button">
            Add
          </button>
        </div>

        <div className="header-update-container">
          <select value={selectedTask} onChange={handleSelectChange}>
            <option value="">Select a task</option>
            {tasksArr.map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
          <input
            value={taskToUpdateInput}
            onChange={(e) => {
              const newInputs = [...updateTaskInputs];
              const index = tasksArr.indexOf(selectedTask);
              if (index !== -1) {
                newInputs[index] = e.target.value;
                setUpdateTaskInputs(newInputs);
                setTaskToUpdateInput(e.target.value);
              }
            }}
          />

          <button onClick={handleUpdateTask}>Update</button>
        </div>
      </div>

      <div className="list-container">
        <ul className="tasks-list">
          {tasksArr.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
