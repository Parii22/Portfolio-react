import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">PG.</div>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#journey">Journey</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;