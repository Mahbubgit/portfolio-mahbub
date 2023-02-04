import React from 'react';
import './Services.css';
import softwareImage from '../../Images/service/1-software-development.jpg';
import webImage from '../../Images/service/1-web-development.jpeg';
import seoImage from '../../Images/service/1-seo.webp';
import SoftwareDevelopment from './SoftwareDevelopment/SoftwareDevelopment';
import WebDevelopment from './WebDevelopment/WebDevelopment';
import Seo from './SEO/Seo';

const Services = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-heading">
                    <h2>My Services</h2>
                </div>
                <div className="services">
                    <div className="all-services">
                        <div className="service">
                            <div className="service-image">
                                <img src={softwareImage} alt="Software Development" />
                            </div>
                            <SoftwareDevelopment></SoftwareDevelopment>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={webImage} alt="Web Development" />
                            </div>
                            <WebDevelopment></WebDevelopment>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={seoImage} alt="SEO Development" />
                            </div>
                            <Seo></Seo>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;