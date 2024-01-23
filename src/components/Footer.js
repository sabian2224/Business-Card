import React from "react"
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import linkedinIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";

export default function Footer () {
    return (
        <footer className="footer">
            <img src={facebookIcon} className="social--icon" alt="facebook-link"/>
            <img src={instagramIcon} className="social--icon" alt="instagram-link"/>
            <img src={linkedinIcon} className="social--icon" alt="linkedin-link"/>
            <img src={githubIcon} className="social--icon" alt="github-link"/>
        </footer>
    )
}