import './App.css';
import React, { useReducer, useState, useRef } from 'react'
import { reducer, initialState } from './reducer';

function App() {

  let [taskList, dispatch] = useReducer(reducer, initialState)

  let [taskInput, setTaskInput] = useState('')
  let taskInputRef = useRef(null);


  let handleAddTask = (e) => {
    e.preventDefault()
    if (taskInput) {
      dispatch({ type: 'Add', payload: taskInput })
      setTaskInput('')
    }
  }

  let handleMarkTaskDone = (e, index) => {
    e.preventDefault()

    let updateTask = taskList.tasks[index]
    dispatch({ type: 'Done', payload: updateTask })

  }

  let handleDeleteTask = (e, index) => {
    e.preventDefault()

    let deleteTask = taskList.tasks[index]
    dispatch({ type: 'Delete', payload: deleteTask })

  }

  let handleUndoneTask = (e, index) => {
    e.preventDefault()
    let undoneTask = taskList.doneTasks[index]
    dispatch({ type: 'Undone', payload: undoneTask })
  }


  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='todo-container'>
          <span>To-Do List</span>
          <i class="fa-solid fa-list" style={{color: '#eb5e28', fontSize: '30px'}}/>
        </div>

        <form className="row">
          <input id="input-box"
            ref={taskInputRef}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="form-control" placeholder="Add your task"/>
          <button onClick={handleAddTask} type="submit">Add</button>
        </form>

        <div className='main-container'>
          <div className="tasks list-container">
            <h3>Tasks</h3>
            {taskList.tasks.map((task, index) => (
            <div key={index} className="task">
              <div className='task-container'>
                <span>{task}</span>
                <div className='task-icons-container'>
                  <i onClick={(e) => handleMarkTaskDone(e, index)} type="submit" className="fa-regular fa-circle" style={{color: '#eb5e28', fontSize: '30px'}}/>
                  <i onClick={(e) => handleDeleteTask(e, index)} type="submit" className="fa-solid fa-trash" style={{color: '#eb5e28', fontSize: '30px'}}/>
                </div>
              </div>  
            </div>))}
          </div>

          
          <div className="tasks list-container">
            <h3>Done Tasks</h3>
            <div className="task-list">
              {taskList.doneTasks.map((task, index) => (
                <div key={index} className="task">
                <div className='task-container'>
                  <span>{task}</span>
                  <i onClick={(e) => handleUndoneTask(e, index)} type="submit" className="fa-solid fa-circle-check" style={{color: '#eb5e28', fontSize: '30px'}}/>
                </div>
              </div>))}
            </div>
          </div>
        
        </div>
      
      </div>
    </div>
  );
}

export default App;