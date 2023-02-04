import React from 'react';
import './SoftwareDevelopment.css';

const SoftwareDevelopment = () => {
    function handleReadMoreSoftwareBtn() {
        var dots = document.getElementById("dotsSoftware");
        var moreText = document.getElementById("moreSoftware");
        var btnText = document.getElementById("readMoreSoftwareBtn");

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
            <h2>Software Development</h2>
            <p>
                As a software developer, I'm responsible for designing, creating, testing, and maintaining software applications and systems.
                <span id="dotsSoftware">...</span>
                <span id="moreSoftware">
                    My role may include working with clients or stakeholders to gather requirements, designing software using programming languages and development tools, writing code, and testing the software to ensure it meets requirements and works correctly.
                    I'm also be responsible for deploying the software to production environments and providing ongoing maintenance and support to fix bugs, add new features, and improve performance.

                    The field of software development is constantly evolving, so staying current with new technologies and industry trends is important. As a software developer, I have expertise in more than one programming languages, and be familiar with various software development tools and frameworks.

                    I also have experience working in different software development methodologies and be able to work effectively in a team environment.

                    Depending on my level of experience, I am able to take on more leadership roles such as mentoring junior developers or leading development teams. I also have the opportunity to work on more complex projects and take on more responsibilities within the organization.

                    Overall, being a software developer is a challenging and rewarding career that offers opportunities for growth and advancement. It allows me to work with cutting-edge technologies, be part of a team that is solving complex problems and creating innovative solutions.
                </span>
            </p>
            {/* <button className="service-btn">Details</button> */}
            <button id='readMoreSoftwareBtn' className='btn btn-md service-btn' onClick={() => handleReadMoreSoftwareBtn()}>Read more</button>
        </div>
    );
};

export default SoftwareDevelopment;