import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className="persistent-header">
      <h1>Selina Mena</h1>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Contact">Contact</Link>
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;