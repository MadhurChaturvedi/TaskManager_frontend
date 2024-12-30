import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        {/* Here i will make hero landing page */}
        {/* <Route  path="" element={'/'}/> */}

        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createForm" element={<TaskForm />} />

      </Routes>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
