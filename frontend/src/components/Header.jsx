import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
        <Link to="/">Recipe App</Link>
        <ul className="nav-items">
            <Link to="/"><span>Home</span></Link>
            <Link to="/add-recipe"><span>Add Recipe</span></Link>
        </ul>
    </nav>
  );
}

export default Header;