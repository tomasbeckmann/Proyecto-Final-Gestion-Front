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
import {UserManagement} from "./views/usermanagement"
import { UserCalendar } from "./views/calendaruser";
import { TaskListUser } from "./views/tasklistuser";
import  injectContext from "./store/appcontext"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/tasklist" element={<TaskList />} /> {/* 👈 Renders at /app/ */}
      <Route path="/tasklistuser" element={<TaskListUser />} /> {/* 👈 Renders at /app/ */}
      <Route path="/login" element={<SignIn />} /> {/* 👈 Renders at /app/ */}
        <Route path="/" element={<Landing />} /> {/* 👈 Renders at /app/ */}
        <Route path="/home" element={<UserProfile />} /> {/* 👈 Renders at /app/ */}
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/register" element={<Register/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/filefolder" element={<FileFolder />} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
        <Route path="/linecharts" element={<GraphicsChart />} /> {/* 👈 Renders at /app/ */}
        <Route path="/calendar" element={<Calendar />} /> {/* 👈 Renders at /app/ */}
        <Route path="/usercalendar" element={<UserCalendar />} /> {/* 👈 Renders at /app/ */}
        <Route path="/usermanagement" element={<UserManagement />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  );
}

export default injectContext(App);

