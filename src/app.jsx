import React from "react";
import NavBar from "./component/navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/content/home";
import Calculator from "./component/content/calculator";
import Login from "./component/content/login";
import Register from "./component/content/register";
import Notfound from "./component/content/notFound";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
