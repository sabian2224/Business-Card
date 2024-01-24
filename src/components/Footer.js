import React from "react"
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import linkedinIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";

export default function Footer () {
    return (
        <footer className="footer">
            <img src={facebookIcon} className="social--link" alt="social-link"/>
            <img src={instagramIcon} className="social--link" alt="social-link"/>
            <img src={linkedinIcon} className="social--link" alt="social-link"/>
            <img src={githubIcon} className="social--link" alt="social-link"/>
        </footer>
    )
}