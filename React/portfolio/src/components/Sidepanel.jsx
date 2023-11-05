import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidepanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <button onClick={toggleSidebar}>☰</button>
      <ul>
        <li>
          <Link to="/Navabar">Dashboard</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidepanel;