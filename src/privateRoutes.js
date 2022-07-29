import React,{useEffect} from "react";
import {  Outlet, useNavigate } from "react-router-dom";

// function PrivateRoute({ isLogged }) {
//   return isLogged ? <Outlet /> : <Navigate to="/" />;
// }
function PrivateRoute(props) {
  const {Component}=props;
  const navigate=useNavigate();
    useEffect( ()=>{
   let login=localStorage.getItem("token");
   if(!login){
    navigate("/")
   }
 });
  // return isLogged ? <Outlet /> : <Navigate to="/" />;
  return(
    <div><Component/></div>
  )
}


export default PrivateRoute;