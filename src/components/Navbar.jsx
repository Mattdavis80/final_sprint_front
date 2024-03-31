import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

const Navbar = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/enter-numbers">Enter Numbers</Link>
        <Link to="/process-numbers">Process Numbers</Link>
        <Link to="/previous-trees">Previous Trees</Link>
      </div>
    </div>
  );
};

export default Navbar;
