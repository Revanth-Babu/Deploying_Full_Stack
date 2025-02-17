// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/TaskItem.css';

// const TaskItem = ({ task, handleDelete }) => {
//   return (
//     <li className="task-item">
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Status: {task.status}</p>
//       <p>Due Date: {task.due_date}</p>
//       <Link to={`/edit-task/${task.id}`} className="edit-task-button">Edit</Link>
//       <button
//         className="delete-task-button"
//         onClick={() => handleDelete(task.id)} // Call the passed delete function
//       >
//         Delete
//       </button>
//     </li>
//   );
// };

// export default TaskItem;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TaskItem.css';

const TaskItem = ({ task, handleDelete }) => {
  return (
    <li className="task-item" style={{ background: '#ffffff', width: '60%', padding: '20px' }}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-status">Status: {task.status}</p>
      <p className="task-due-date">Due Date: {task.due_date}</p>

      <div className="task-actions">
        <Link to={`/edit-task/${task.id}`} className="edit-task-button">
          Edit
        </Link>
        <button
          className="delete-task-button"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

