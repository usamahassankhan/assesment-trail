
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import PrivateRoute from "./privateRoutes";
import Countries from "./pages/Dashboard/DashboardCountries"

function App() {
  return (
<div className="App">
<Routes>
  <Route path="/login" element={  <Login/>} />         
          <Route  path="/"  element={<PrivateRoute Component={Dashboard} />} />
          <Route  path="countries"  element={<PrivateRoute Component={Countries} />} />
</Routes>
</div>
  ); 
}

export default App;
