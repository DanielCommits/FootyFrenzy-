import React, { useState, useEffect } from "react";
import styles from "/components/header.module.css";
import { Link } from "react-router-dom";

import {
  FaFutbol,
  FaBars,
  FaSearch,
  FaToggleOn,
  FaAddressCard,
  FaHouseUser,
} from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar when a link is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the saved dark mode state from localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert saved value to boolean
  });

  
  const changeColor = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new mode to localStorage
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Initial setup for dark mode
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://api.searchbar.org/v1/widget/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjBiYWU0MzMyY2ZkMWIzOTFjNTk5NCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTcxNDMwODMwNiwiZXhwIjoxNDMyODcwODMwNn0.fqsQ303Th7LHPkUapmJcHxT4l3U-9MEB3xQiINQtWrA/" +
      (navigator.language || navigator.userLanguage);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="d-flex align-items-center">
            <FaFutbol className="me-2" size={24} />
            <div className={styles.sitename}>FootyFrenzy</div>
          </Link>

          <nav className="nav-list d-none d-md-block">
            <ul className="nav" style={{ display: "flex", gap: "20px" }}>
              <li className="nav-item">
                <Link to="/" className={styles.customnavlink}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={styles.customnavlink}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/livescore" className={styles.customnavlink}>
                  LiveScores
                </Link>
              </li>
            </ul>
          </nav>

          <div className="specialNav d-flex align-items-center">
            <FaToggleOn size={24} className="me-3" onClick={changeColor} />
            <div id="sb-search-example" className="me-3">
              <div className="sb-search-icon" id="myCustomSearchButtonID">
                <FaSearch size={24} />
              </div>
            </div>
            <div className="menu-btn d-md-none" onClick={toggleSidebar}>
              <FaBars size={24} />
            </div>
          </div>
        </div>

        <div
          className={`${styles.sidebar} d-md-none ${
            isSidebarOpen ? styles.open : ""
          }`}
          id="sidebar"
        >
          <Link  onClick={closeSidebar} to="/" className="d-flex align-items-center">
            <FaFutbol className="me-2" size={24} />
            <div className={styles.sitename}>FootyFrenzy</div>
          </Link>

          <ul className="list-unstyled">
            <li  onClick={closeSidebar}>
              <Link to="/" className="d-flex align-items-center">
                <FaHouseUser className="me-2" size={20} /> Home
              </Link>
            </li>
            <li  onClick={closeSidebar}>
              <Link to="/contact" className="d-flex align-items-center">
                <FaAddressCard className="me-2" size={20} /> Contact
              </Link>
            </li>
            <li  onClick={closeSidebar}>
              <Link to="/livescore" className="d-flex align-items-center">
                <FaCircleDot className="me-2" size={20} /> LiveScores
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
