import React from 'react';
import './WebDevelopment.css';

const WebDevelopment = () => {
    function handleReadMoreWebDevelopmentBtn() {
        var dots = document.getElementById("dotsWebDevelopment");
        var moreText = document.getElementById("moreWebDevelopment");
        var btnText = document.getElementById("readMoreWebDevelopmentBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    return (
        <div>
            <h2>Web Development</h2>
            <p>
                As a full stack web developer, I have a unique set of skills that allow me to work on all aspects of web development, from the front-end to the back-end.
                <span id="dotsWebDevelopment">...</span>
                <span id="moreWebDevelopment">
                    I have a good understanding of web development technologies such as HTML, CSS, JavaScript, and front-end frameworks like React.
                    I also have experience with back-end technologies such as Node.js, and are familiar with databases such as MySQL, MongoDB, or SQL Server.

                    I am able to design and develop web applications and websites, work on the front-end and back-end, and be responsible for the overall look and functionality of the application. I am able to work with other developers, designers, and stakeholders to ensure that the application meets the requirements.

                    I also have experience with version control systems such as Git, and am familiar with agile software development methodologies.

                    As a Full Stack Developer I have knowledge of the entire web development process, and am able to work with different technologies and tools to create a complete web application. I'm also able to troubleshoot and debug issues that arise during development, and have experience with testing and quality assurance.

                    In addition, I have experience with cloud-based platforms such as AWS, Azure or Google Cloud, and be able to create and deploy web applications to these platforms.

                    Overall, being a full stack web developer is a challenging and rewarding career that allows me to work with a wide range of technologies and be involved in all aspects of web development. It provides opportunities for growth and advancement and allows me to be part of a team that is creating innovative solutions.
                </span>

            </p>
            <button id='readMoreWebDevelopmentBtn' className='btn btn-md service-btn' onClick={() => handleReadMoreWebDevelopmentBtn()}>Read more</button>
        </div>
    );
};

export default WebDevelopment;