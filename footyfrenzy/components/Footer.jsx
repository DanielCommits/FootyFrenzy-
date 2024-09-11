import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-logo-container">
            <a href="index.html">
              <div className="sitename">
                <h1>
                  <i className="fa-solid fa-futbol"></i>FootyFrenzy
                </h1>
              </div>
            </a>
          </div>
          <p>
            FootyFrenzy provides a variety of information and resources related
            to football, including news, scores, statistics, and analysis.
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-menu">
            <p>
              copyright &copy;{" "}
              <a href="myportfolio/indexpage.html">Daniel Develops, 2024.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
