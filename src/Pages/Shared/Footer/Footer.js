import React from 'react';
// import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { Link } from 'react-router-dom';
import copyright from './../../../Images/copyright.png';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content justify-items-center">
                <div>
                    <span className="footer-title">Quick Link</span>
                    <Link to="/home">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div>
                    <span className="footer-title">Quick Link</span>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
                <div className="md:place-self-center md:justify-self-end">
                    <p>
                        <span>Copyright <img className='inline' style={{ width: "15px", height: "15px" }} src={copyright} alt="copyright" /> {year}, All Rights Reserved  </span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;