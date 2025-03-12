import React, { useState } from 'react';
import './App.css';


function App() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(''); // State for new task input

  // Handle change in input
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Clear input after adding
    }
  };

  // Handle removing a task
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="App">
      <h1>Task Reminder App</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks yet! Add some tasks to stay organized.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button onClick={() => removeTask(task)} className="remove-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
