import React, { useState, useEffect } from 'react';

const TaskList = ({ tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterText, setFilterText] = useState('');


  useEffect(() => {
    const filterTasks = () => {
      const filtered = tasks.filter(task =>
        task.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredTasks(filtered);
    };

    filterTasks();
  }, [filterText, tasks]);


  const handleFilterChange = event => {
    setFilterText(event.target.value);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Filter tasks"
        value={filterText}
        onChange={handleFilterChange}/>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.name}</li>))}
      </ul>

    </div>
  );
};

export default TaskList;