// src/components/AddTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddTask.css';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleAddTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    const response = await fetch('https://deploy-backend-1-38gr.onrender.com/tasks', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, description, due_date: dueDate }),
    });
    if (response.ok) {
      navigate('/dashboard');
    } else {
      alert('Failed to add task');
    }
  };

  return (
    <div className="add-task-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleAddTask}>
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
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;