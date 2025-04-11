import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="persistent-header">
        <h1>Selina Mena</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          {/* <Link to="/About">About</Link> */}
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>
  )
}

export default Header