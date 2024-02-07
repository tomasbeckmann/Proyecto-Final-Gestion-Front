import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
/* import { Home } from "./views/home"; */
import { NewTask } from "./views/newtask";
import { Landing } from "./views/landing";
import { UserProfile } from "./views/userprofile";
import { Register } from "./views/register";
import { FileFolder } from "./views/filefolder";
import { FileUpload } from "./views/fileupload";
import { GraphicsChart } from "./views/charts";
import { Calendar } from "./views/calendar";
import { SignIn } from "./views/login"
import { TaskList } from "./views/tasklist";
import {CreateTask} from "./views/createtask"
 
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/createtask2" element={<CreateTask />} /> {/* 👈 Renders at /app/ */}
      <Route path="/tasklist" element={<TaskList />} /> {/* 👈 Renders at /app/ */}
      <Route path="/login" element={<SignIn />} /> {/* 👈 Renders at /app/ */}
        <Route path="/" element={<Landing />} /> {/* 👈 Renders at /app/ */}
        <Route path="/userprofile" element={<UserProfile />} /> {/* 👈 Renders at /app/ */}
        <Route path="/createtask" element={<NewTask />} />
        <Route path="/register" element={<Register/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/filefolder" element={<FileFolder />} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
        <Route path="/linecharts" element={<GraphicsChart />} /> {/* 👈 Renders at /app/ */}
        <Route path="/calendar" element={<Calendar />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  );
}

export default App;

