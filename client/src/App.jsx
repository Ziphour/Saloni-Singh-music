import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Music from "./pages/Music";
import Sidebar from "./components/Sidebar";
import MainContent from "./pages/maincontent";
import RightPanel from "./components/Rightpanel";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <RightPanel />
      </div>
    </Router>
  );
}

export default App;
