import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redirect the root path "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createForm" element={<TaskForm />} />
      </Routes>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
