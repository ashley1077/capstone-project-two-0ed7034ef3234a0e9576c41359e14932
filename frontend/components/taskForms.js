<input 
  type="date" 
  value={dueDate} 
  onChange={(e) => setDueDate(e.target.value)} 
/>
const newTask = { title, completed: false, dueDate };
await fetch("http://localhost:5000/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newTask),
});
