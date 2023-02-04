import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import Dashboard from "./scense/dashboard";
//import Login from './Login'

const root = ReactDOM.createRoot(document.getElementById("root"));
// var value = sessionStorage.getItem("data")
// console.log(value);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Dashboard/> */}
    {/* <Login/> */}
     <App /> 
    </BrowserRouter>
  </React.StrictMode>
);
