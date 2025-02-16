import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditTask.css';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setDueDate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const task = await response.json();
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
        setDueDate(task.due_date);
      } else {
        alert('Failed to fetch task details');
      }
    };
    fetchTask();
  }, [id]);

  const handleEditTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    const response = await fetch(`https://deploy-backend-1-38gr.onrender.com/tasks/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, description, status, due_date: dueDate }),
    });
    if (response.ok) {
      navigate('/dashboard');
    } else {
      alert('Failed to update task');
    }
  };

  return (
    <div className="edit-task-container">
      <h2>Edit Task</h2>
      <form onSubmit={handleEditTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;