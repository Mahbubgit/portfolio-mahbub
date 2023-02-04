import React from 'react';
import './FullStackDeveloper.css';

const FullStackDeveloper = () => {
    function readMoreFullStackBtn() {
        var dots = document.getElementById("dotsFullStack");
        var moreText = document.getElementById("moreFullStack");
        var btnText = document.getElementById("readMoreFullStackBtn");

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
            <h2>Full Stack Developer</h2>
            <h3 className="orange-color text-center">2022-Present | Pro Level Developer</h3>
            <p className='text-justify p-2'>A full stack developer is a software developer who has the skills and knowledge to work on both the front-end and back-end of web development.
                <span id="dotsFullStack">...</span>
                <span id="moreFullStack">
                    They have a comprehensive understanding of all the layers of web development, including the client-side, server-side, and database. They can work on different aspects of web development, such as designing, coding, testing, and deploying web applications.

                    Full stack developers are proficient in different programming languages and technologies, including HTML, CSS, JavaScript, and various back-end languages such as Python, Java, and Ruby. They also have a good understanding of databases and can work with different types of databases, such as MySQL, MongoDB, and Oracle.

                    On the front-end, full stack developers use HTML, CSS, and JavaScript to design and develop the user interface of web applications. They also use JavaScript frameworks and libraries such as React, Angular, and Vue.js to create dynamic and interactive web pages.

                    On the back-end, full stack developers use programming languages such as Python, Java, or Ruby to write server-side code, and use web frameworks such as Express.js, Ruby on Rails, and Django to manage the server-side logic. They also have a strong understanding of web protocols and APIs, and can create and consume RESTful web services.

                    Full stack developers also have a good understanding of DevOps tools, such as Git, Jenkins, and Docker, and can work with them to manage the build, test, and deployment process. They are familiar with Agile development methodologies and can work in a fast-paced, collaborative environment.

                    Overall, full stack developers are highly sought after in the tech industry as they have a wide range of skills and knowledge, which enables them to handle all aspects of web development. They can work on different types of projects, from simple websites to complex web applications. Full-Stack Developers are equipped with the ability to take an idea and turn it into a fully-functioning software product, this makes them a valuable asset to any development team.
                </span>
            </p>
            <button id='readMoreFullStackBtn' className='btn btn-md' onClick={() => readMoreFullStackBtn()}>Read more</button>
        </div>
    );
};

export default FullStackDeveloper;