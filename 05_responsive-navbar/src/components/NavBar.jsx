import React, { useState } from "react";

const navLinks = ["Home", "About Us", "Contact Us", "Our Team", "Settings"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="navbar-wrapper">
        <ul>
          {navLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <div className="avatar">AS</div>
        </ul>
      </div>
      {!isOpen && (
        <div className="btn-wrapper">
          <button className="toggle-navbar-btn" onClick={handleSidebarToggle}>
            open
          </button>
        </div>
      )}

      {isOpen && (
        <div className="responsive-navbar-wrapper">
          <div className="responsive-navbar">
            <div className="btn-wrapper">
              <button
                className="toggle-navbar-btn"
                onClick={handleSidebarToggle}
              >
                ❌
              </button>
            </div>
            <div className="avatar-wrapper">
              <div className="avatar">AS</div>
            </div>
            <ul>
              {navLinks.map((item) => (
                <li key={item} className="responsive-navItems">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
