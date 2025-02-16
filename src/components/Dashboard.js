import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://deploy-backend-1-38gr.onrender.com/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else if (response.status === 401) {
        navigate('/login');
      }
    };
    fetchTasks();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Task Dashboard</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <Link to="/add-task" className="add-task-button">Add Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.due_date}</p>
            <Link to={`/edit-task/${task.id}`} className="edit-task-button">Edit</Link>
            <button className="delete-task-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;