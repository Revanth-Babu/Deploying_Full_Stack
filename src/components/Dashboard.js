// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const token = localStorage.getItem('jwtToken');
//       const response = await fetch('http://localhost:3000/tasks', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setTasks(data);
//       } else if (response.status === 401) {
//         navigate('/login');
//       }
//     };
//     fetchTasks();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('jwtToken');
//     navigate('/login');
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Task Dashboard</h2>
//       <button onClick={handleLogout} className="logout-button">Logout</button>
//       <Link to="/add-task" className="add-task-button">Add Task</Link>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className="task-item">
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Status: {task.status}</p>
//             <p>Due Date: {task.due_date}</p>
//             <Link to={`/edit-task/${task.id}`} className="edit-task-button">Edit</Link>
//             <button className="delete-task-button">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://deploy-backend-sec-1.onrender.com/tasks', {
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

  const handleDelete = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`https://deploy-backend-sec-1.onrender.com/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        // Remove the task from the list without reloading the page
        setTasks(tasks.filter((task) => task.id !== taskId));
      } else {
        alert('Failed to delete task');
      }
    }
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
            <button
              className="delete-task-button"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
