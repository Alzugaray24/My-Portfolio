import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de las redes sociales que necesitas
import "./Footer.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer-container">
            <div className="social-medias">
                <label>
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                    <a href="https://www.linkedin.com/in/matias-alzugaray-piven-29863a213/">Linkedin</a>
                </label>
                <label>
                    <FontAwesomeIcon icon={faGithub} />{" "}
                    <a href="https://github.com/Alzugaray24">Github</a>
                </label>
                <label>
                    <FontAwesomeIcon icon={faInstagram} />{" "}
                    <a href="https://www.instagram.com/matias_alzugaray/">Instagram</a>
                </label>
            </div>
            <div className="biography">
                <label>Welcome to my portfolio. I'm
                    passionate about web development and creating user-friendly interfaces. I love to learn new technologies and
                    collaborate on exciting projects.</label>
            </div>
            <div className="contact-info">
                <label>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    <a href="mailto:alzugaray1997@gmail.com">Email</a>
                </label>
                {/* Agrega ícono de Instagram aquí */}
            </div>
            <div className="skills">
                <h5>Some of my skills</h5>
                <label>HTML, CSS, JavaScript, React, Github, Wordpress</label>
            </div>
            <div className="copyright">
                <label>Copyright © 2023 Matias Alzugaray</label>
            </div>
        </div>
    );
}

export default Footer;