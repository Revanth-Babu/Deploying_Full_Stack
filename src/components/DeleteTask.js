import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DeleteTask.css';

const DeleteTask = ({ taskId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const token = localStorage.getItem('jwtToken');
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      const response = await fetch(`https://deploy-backend-1-38gr.onrender.com/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      if (response.ok) {
        alert('Task deleted successfully');
        navigate('/dashboard');
      } else {
        alert('Failed to delete task');
      }
    }
  };

  return (
    <button className="delete-task-button" onClick={handleDelete}>
      Delete Task
    </button>
  );
};

export default DeleteTask;
