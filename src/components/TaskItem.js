// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/TaskItem.css';

// const TaskItem = ({ task, setTasks, tasks }) => {
//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       const token = localStorage.getItem('jwtToken');
//       const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         // Update the tasks list after deletion without reloading the page
//         setTasks(tasks.filter((t) => t.id !== task.id));
//       } else {
//         alert('Failed to delete task');
//       }
//     }
//   };

//   return (
//     <div className="task-item">
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       <p>Due Date: {task.due_date}</p>
//       <p>Created Date: {task.created_date}</p>
//       <Link to={`/edit/${task.id}`} className="edit-button">Edit Task</Link>
//       <button className="delete-button" onClick={handleDelete}>Delete Task</button>
//     </div>
//   );
// };

// export default TaskItem;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TaskItem.css';

const TaskItem = ({ task, handleDelete }) => {
  return (
    <li className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.due_date}</p>
      <Link to={`/edit-task/${task.id}`} className="edit-task-button">Edit</Link>
      <button
        className="delete-task-button"
        onClick={() => handleDelete(task.id)} // Call the passed delete function
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
