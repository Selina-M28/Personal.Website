import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
