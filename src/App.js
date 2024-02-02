import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./views/home";
import {NewTask } from "./views/newtask";
import { Tasks } from "./views/tasks";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/createtask" element={<NewTask />} />
        <Route path="/tasks" element={< Tasks/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;