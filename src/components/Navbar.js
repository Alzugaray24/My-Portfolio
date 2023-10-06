import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-text">
                <h3>My Portfolio</h3>
            </div>

            <div className="Log-In">
                <Link className="navbar-link-item" to="/login">
                    <FontAwesomeIcon icon={faLock} /> Log In
                </Link>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <Link className="navbar-link-item" to="/">
                            <FontAwesomeIcon icon={faHome} /> Homepage
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-link-item" to="/about">
                            <FontAwesomeIcon icon={faUser} /> About Me
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-link-item" to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;