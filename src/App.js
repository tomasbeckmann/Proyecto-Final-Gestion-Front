import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Landing } from "./views/landing";
import {Sidebar} from "/workspaces/Proyecto-Final-Gestion-Front/src/components/application/sidebar.js"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/home" element={<Sidebar/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  );
}

export default App;

