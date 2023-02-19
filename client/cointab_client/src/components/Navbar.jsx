import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/")}>
        <img src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_white-1.png" />
      </h3>
    </div>
  );
};

export default Navbar;
