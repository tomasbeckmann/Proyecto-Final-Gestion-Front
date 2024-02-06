import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Landing } from "./views/landing";
import { Register } from "./views/register";
import {Login} from "./components/application/login";
import { FileFolder } from "./views/filefolder";
import { FileUpload } from "./views/fileupload";
import { GraphicsChart } from "./views/charts";
import { Calendar } from "./views/calendar";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Register/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/login" element={<Login/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/filefolder" element={<FileFolder />} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
        <Route path="/linecharts" element={<GraphicsChart />} /> {/* 👈 Renders at /app/ */}
        <Route path="/calendar" element={<Calendar />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
