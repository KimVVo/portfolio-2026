import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-[#FFF9E6] pb-24">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Floating Navbar rendered on all pages */}
      <Navbar />
    </div>
  );
}

export default App;
