// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const App = () => {
  const isAuthenticated = () => !!localStorage.getItem('jwtToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-task"
          element={isAuthenticated() ? <AddTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-task/:id"
          element={isAuthenticated() ? <EditTask /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;