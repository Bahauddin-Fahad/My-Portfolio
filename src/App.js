import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Navbar from "./pages/Shared/Navbar";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className=" bg-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
