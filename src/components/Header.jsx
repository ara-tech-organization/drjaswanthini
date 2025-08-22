import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={
        styles.header +
        " d-flex justify-content-between align-items-center px-4 py-3"
      }
    >
      <div className="d-flex align-items-center">
        <Link to="/">
          <img
            src="assets/images/Logo.jpg"
            alt="Clinic Logo"
            style={{ height: "80px", width: "auto", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="d-none d-md-block">
        <ul
          className={
            styles.navList +
            " d-flex gap-4 list-unstyled mb-0 align-items-center"
          }
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Desktop Button */}
      <button
        className="btn fw-semibold rounded-pill px-4 py-2 d-none d-md-block"
        style={{ backgroundColor: "#00b89f", color: "#fff", border: "none" }}
        onClick={() => navigate("/contact")}
      >
        <i className="fas fa-calendar-check me-2"></i>Book Appointment
      </button>

      {/* Mobile Hamburger */}
      <div className="d-md-none">
        <button
          className="btn btn-outline-secondary rounded-circle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="d-md-none position-absolute top-100 start-0 w-100 bg-white shadow">
          <ul className={styles.navList + " list-unstyled m-0 p-3"}>
            <li>
              <NavLink to="/" className={styles.navLink + " d-block py-2"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.navLink + " d-block py-2"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={styles.navLink + " d-block py-2"}
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={styles.navLink + " d-block py-2"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
