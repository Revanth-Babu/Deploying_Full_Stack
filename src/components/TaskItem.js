import React from 'react';
import { Link } from 'react-router-dom';
import DeleteTask from './DeleteTask';
import '../styles/TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.due_date}</p>
      <p>Created Date: {task.created_date}</p>
      <Link to={`/edit/${task.id}`} className="edit-button">Edit Task</Link>
      <DeleteTask taskId={task.id} />
    </div>
  );
};

export default TaskItem;