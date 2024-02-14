import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Landing } from "./views/landing";
import { UserProfile } from "./views/userprofile";
import { Register } from "./views/register";
import { FileFolder } from "./views/filefolder";
import { FileUpload } from "./views/fileupload";
import { GraphicsChart } from "./views/charts";
import { Calendar } from "./views/calendar";
import { SignIn } from "./views/login"
import { TaskList } from "./views/tasklist";
import { CreateTask } from "./views/createtask"
import { UserManagement } from "./views/usermanagement"
import { UserCalendar } from "./views/calendaruser";
import { TaskListUser } from "./views/tasklistuser";
import injectContext from "./store/appcontext"
import { LayoutUser } from "./components/application/layoutuser";
import { Layout } from "./components/application/layout";
import { UpdateUser } from "./views/updateuser";
import {Help} from "./views/help";
import {HelpUser} from "./views/helpuser";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<SignIn />} />
        <Route element={<LayoutUser />}>
          <Route path="/home" element={<UserProfile />} />
          <Route path="/usercalendar" element={<UserCalendar />} />
          <Route path="/tasklistuser" element={<TaskListUser />} />
          <Route path="/help" element={<Help />} />
      </Route>

        <Route element={<Layout />}>
        <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/register" element={<Register />} />
          <Route path="/filefolder" element={<FileFolder />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/linecharts" element={<GraphicsChart />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/helpadmin" element={<HelpUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default injectContext(App);

