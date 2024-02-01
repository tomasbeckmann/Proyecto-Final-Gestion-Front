import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./views/home";
import { CreateTask } from "./views/createtask";
import { ListTasks } from "./views/listtasks";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/listtasks" element={< ListTasks/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;