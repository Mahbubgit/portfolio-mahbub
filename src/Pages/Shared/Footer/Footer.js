import React from 'react';
import { Link } from 'react-router-dom';
import copyright from './../../../Images/copyright.png';
import facebook from '../../../Images/social/facebook-48.png';
import google from '../../../Images/social/google-plus-48.png';
import github from '../../../Images/social/github-48.png';
import instagram from '../../../Images/social/instagram-48.png';
import linkedin from '../../../Images/social/linkedin-48.png';
import twitter from '../../../Images/social/twitter-48.png';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer className="footer footer-center p-10 bg-stone-400 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/home">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src={facebook} alt="facebook" /></a>
                        <a href="https://www.google.com/" rel="noreferrer" target="_blank"><img src={google} alt="google" /></a>
                        <a href="https://www.github.com/" rel="noreferrer" target="_blank"><img src={github} alt="github" /></a>
                        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><img src={instagram} alt="instagram" /></a>
                        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>
                <div className="items-center grid-flow-col">
                    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <span>Copyright <img className='inline' style={{ width: "15px", height: "15px" }} src={copyright} alt="copyright" /> {year}, All Rights Reserved  </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;