import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { MoonIcon, SunIcon, HamburgerIcon  } from "@chakra-ui/icons";
import { useColorMode, Button, IconButton } from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <nav className="navbar-container">

            <div className="navbar-text">
                <Link className="navbar-link-item" to="/">
                    <h3>My Portfolio</h3>
                </Link>
            </div>

            <div className="signup">
                <Link className="navbar-link-item signup" to="/signup">
                    <FontAwesomeIcon icon={faLock} /> Sign Up
                </Link>
            </div>

            <div className="showMenu" style={{ display: 'none' }}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <Link to="/">
                            <MenuItem>
                                <FontAwesomeIcon icon={faHome} />{" "}
                                <span style={{ marginLeft: "8px" }}>Homepage</span>
                            </MenuItem>
                        </Link>
                        <Link to="/about">
                            <MenuItem>
                                <FontAwesomeIcon icon={faUser} />{" "}
                                <span style={{ marginLeft: "8px" }}>About Me</span>
                            </MenuItem>
                        </Link>
                        <Link to="/contact">
                            <MenuItem>
                                <FontAwesomeIcon icon={faEnvelope} />{" "}
                                <span style={{ marginLeft: "8px" }}>Contact</span>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
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

            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

        </nav>
    );
}

export default Navbar;