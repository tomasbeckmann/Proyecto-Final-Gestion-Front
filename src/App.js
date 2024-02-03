import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./views/home";
import {NewTask } from "./views/newtask";
import { Tasks } from "./views/tasks";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./views/landing";
import { Login } from "./components/application/login";
import { FileUpload } from "./views/fileupload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/createtask" element={<NewTask />} />
        <Route path="/tasks" element={< Tasks/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  );
}

export default App;

