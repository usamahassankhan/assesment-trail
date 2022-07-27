
import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
<div className="App">
<Routes>
  <Route path="/" element={  <Login/>} />
  <Route path="dashboard" element={  <Dashboard /> } />
</Routes>
</div>
  );
}

export default App;
