import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Students from "./components/students";
import Home from "./components/home";
import Profile from "./components/profile";
import Register from "./components/register";
import Error from "./components/error";
import Details from "./components/details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/students/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;