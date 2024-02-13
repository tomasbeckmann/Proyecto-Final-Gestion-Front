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
import { LayoutUser } from "./components/application/layout";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/layouttest" element={<LayoutUser> <UserProfile/> </LayoutUser>} /> 
      <Route path="/tasklist" element={<TaskList />} /> 
      <Route path="/tasklistuser" element={<TaskListUser />} /> 
      <Route path="/login" element={<SignIn />} /> 
      <Route path="/" element={<Landing />} /> 
      <Route path="/home" element={<UserProfile />} /> 
      <Route path="/createtask" element={<CreateTask />} />
      <Route path="/register" element={<Register/>} /> 
      <Route path="/filefolder" element={<FileFolder />} /> 
      <Route path="/fileupload" element={<FileUpload />} /> 
      <Route path="/linecharts" element={<GraphicsChart />} /> 
      <Route path="/calendar" element={<Calendar />} /> 
      <Route path="/usercalendar" element={<UserCalendar />} /> 
      <Route path="/usermanagement" element={<UserManagement />} /> 
      </Routes>
    </Router>
  );
}

export default injectContext(App);

