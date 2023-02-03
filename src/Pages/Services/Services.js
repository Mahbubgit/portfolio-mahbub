import React from 'react';
import './Services.css';
import software from '../../Images/service/1-software-development.jpg';
import web from '../../Images/service/1-web-development.jpeg';
import seo from '../../Images/service/1-seo.webp';

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
                                <img src={software} alt="Software Development" />
                            </div>
                            <h2>Software Development</h2>
                            <p>

                                As a software developer, I'm responsible for designing, creating, testing, and maintaining software applications and systems. My role may include working with clients or stakeholders to gather requirements, designing software using programming languages and development tools, writing code, and testing the software to ensure it meets requirements and works correctly.

                                I'm also be responsible for deploying the software to production environments and providing ongoing maintenance and support to fix bugs, add new features, and improve performance.

                                The field of software development is constantly evolving, so staying current with new technologies and industry trends is important. As a software developer, I have expertise in more than one programming languages, and be familiar with various software development tools and frameworks.

                                I also have experience working in different software development methodologies and be able to work effectively in a team environment.

                                Depending on my level of experience, I am able to take on more leadership roles such as mentoring junior developers or leading development teams. I also have the opportunity to work on more complex projects and take on more responsibilities within the organization.

                                Overall, being a software developer is a challenging and rewarding career that offers opportunities for growth and advancement. It allows me to work with cutting-edge technologies, be part of a team that is solving complex problems and creating innovative solutions.
                            </p>
                            <button className="service-btn">Details</button>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={web} alt="Web Development" />
                            </div>
                            <h2>Web Development</h2>
                            <p>
                                As a full stack web developer, I have a unique set of skills that allow me to work on all aspects of web development, from the front-end to the back-end. I have a good understanding of web development technologies such as HTML, CSS, JavaScript, and front-end frameworks like React.

                                I also have experience with back-end technologies such as Node.js, and are familiar with databases such as MySQL, MongoDB, or SQL Server.

                                I am able to design and develop web applications and websites, work on the front-end and back-end, and be responsible for the overall look and functionality of the application. I am able to work with other developers, designers, and stakeholders to ensure that the application meets the requirements.

                                I also have experience with version control systems such as Git, and am familiar with agile software development methodologies.

                                As a Full Stack Developer I have knowledge of the entire web development process, and am able to work with different technologies and tools to create a complete web application. I'm also able to troubleshoot and debug issues that arise during development, and have experience with testing and quality assurance.

                                In addition, I have experience with cloud-based platforms such as AWS, Azure or Google Cloud, and be able to create and deploy web applications to these platforms.

                                Overall, being a full stack web developer is a challenging and rewarding career that allows me to work with a wide range of technologies and be involved in all aspects of web development. It provides opportunities for growth and advancement and allows me to be part of a team that is creating innovative solutions.

                            </p>
                            <button className="service-btn">Details</button>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={seo} alt="SEO Development" />
                            </div>
                            <h2>SEO Service</h2>
                            <p>
                                As an SEO service provider, I help businesses and organizations improve their visibility and ranking on search engines such as Google, Bing, and Yahoo. My role involves analyzing websites, identifying areas for improvement, and implementing SEO strategies to increase organic traffic and improve search engine rankings.

                                I have a good understanding of SEO best practices and am familiar with a range of SEO tools and techniques such as keyword research, link building, and on-page optimization. I'm able to analyze website metrics, perform competitor research, and identify opportunities to improve a website's visibility in search results.

                                I also have a good understanding of search engine algorithms and how they change over time, and am able to make changes to a website to comply with new algorithms.

                                I am able to work closely with clients and stakeholders to understand their business goals and objectives, and develop SEO strategies that align with those goals.

                                I have knowledge of HTML, CSS and JavaScript, which is necessary to be able to make changes to website code, and to be able to troubleshoot and debug issues that arise during development.

                                Overall, providing SEO services is a challenging and rewarding career that allows me to stay current with the latest trends and technologies, and to help businesses and organizations improve their online presence and reach their target audience. It provides opportunities for growth and advancement and allows me to be part of a team that is creating innovative solutions.

                            </p>
                            <button className="service-btn">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;