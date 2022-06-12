import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Navbar from "./pages/Shared/Navbar";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./pages/Shared/Footer";
import ProjectInfo from "./pages/Home/ProjectInfo";

function App() {
  return (
    <div className=" bg-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectInfo />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
