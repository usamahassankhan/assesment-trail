
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Login from './pages/login/Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from "./privateRoutes";
import { setUser} from "./redux/actons/authAction";

function App() {
  let user = useSelector((state) => state);
   const [isLogged, setIsLogged] = useState(user.user.auth);
  console.log(user.user.auth,"ddddddd")

//   useEffect( ()=>{
//     setIsLogged(user.user.auth)
//  }, [isLogged] );
  
  return (
<div className="App">
<Routes>
  <Route path="/" element={  <Login/>} />
  {/* {(user.user.auth || localStorage.getItem("token"))  && <Route path="dashboard" element={  <Dashboard /> } />} */}
  {/* <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
          <Route  path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
 
</Routes>
</div>
  );
}

export default App;
