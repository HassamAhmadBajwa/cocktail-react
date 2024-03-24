import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/" className="logo">
          The <span>Cocktail</span> db
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="about" className="nav-link">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
