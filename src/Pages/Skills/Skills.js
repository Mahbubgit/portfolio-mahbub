import React from 'react';
import DotNetDeveloper from './DotNetDeveloper/DotNetDeveloper';
import OracleDeveloper from './OracleDeveloper/OracleDeveloper';
import './Skills.css';

const Skills = () => {
    return (

        <section className="section">
            <h2 className='text-center'>Professional Skills</h2>
            <div className="left-banner">
                <div className='flexible-container'>
                    <div id="oracle-experience" className="experience-item">
                        <OracleDeveloper></OracleDeveloper>
                    </div>
                    <div id="dotnet-experience" className="experience-item">
                        <DotNetDeveloper></DotNetDeveloper>
                        {/* <h2>.Net Developer</h2>
                        <h3 className="orange-color text-center">2017-Present | Pro Level Developer</h3>
                        <p className='text-justify p-2'>.NET is a free, open-source, cross-platform framework developed by Microsoft for building a wide range of applications, including web, desktop, mobile, gaming, and IoT (Internet of Things) applications.
                            <span id="dots">...</span><span id="more">
                                A .NET developer is a software developer who specializes in building applications using the .NET framework and its associated languages, such as C# and Visual Basic .NET. .NET developers are responsible for designing, coding, testing, and maintaining applications using the .NET framework.

                                The .NET framework provides a large number of libraries and tools that developers can use to build high-performance applications. The framework also includes a common language runtime (CLR) which provides a platform for executing code and managing memory, as well as a large number of built-in classes and data types. The .NET framework also supports a variety of programming languages, including C# and Visual Basic, allowing developers to use the language that they are most comfortable with.

                                .NET developers typically have a strong understanding of the .NET framework and its associated technologies, as well as experience with programming languages such as C# or Visual Basic. They also have experience with software development methodologies, such as Agile or Scrum, and are comfortable working in a team environment.

                                In addition to building applications, .NET developers also work on maintaining and updating existing applications, debugging and troubleshooting any issues that may arise, and collaborating with other developers, designers and stakeholders to ensure that the final product meets the client's needs.

                                Overall, .NET developer is a valuable asset for companies looking to build high-performance and scalable applications using the latest technologies. The .Net framework continues to evolve and expand, providing powerful and versatile tools for developers, making it easier for them to build robust and reliable applications that can run on multiple platforms.
                            </span>
                        </p>
                         */}
                    </div>
                </div>

                <div className='flexible-container'>
                    <div id="full-stack-experience" className="experience-item">
                        <h2>Full Stack Developer</h2>
                        <h3 className="orange-color text-center">2022-Present | Pro Level Developer</h3>
                        <p className='text-justify p-2'>A full stack developer is a software developer who has the skills and knowledge to work on both the front-end and back-end of web development.
                            <span id="dots">...</span><span id="more">
                                They have a comprehensive understanding of all the layers of web development, including the client-side, server-side, and database. They can work on different aspects of web development, such as designing, coding, testing, and deploying web applications.

                                Full stack developers are proficient in different programming languages and technologies, including HTML, CSS, JavaScript, and various back-end languages such as Python, Java, and Ruby. They also have a good understanding of databases and can work with different types of databases, such as MySQL, MongoDB, and Oracle.

                                On the front-end, full stack developers use HTML, CSS, and JavaScript to design and develop the user interface of web applications. They also use JavaScript frameworks and libraries such as React, Angular, and Vue.js to create dynamic and interactive web pages.

                                On the back-end, full stack developers use programming languages such as Python, Java, or Ruby to write server-side code, and use web frameworks such as Express.js, Ruby on Rails, and Django to manage the server-side logic. They also have a strong understanding of web protocols and APIs, and can create and consume RESTful web services.

                                Full stack developers also have a good understanding of DevOps tools, such as Git, Jenkins, and Docker, and can work with them to manage the build, test, and deployment process. They are familiar with Agile development methodologies and can work in a fast-paced, collaborative environment.

                                Overall, full stack developers are highly sought after in the tech industry as they have a wide range of skills and knowledge, which enables them to handle all aspects of web development. They can work on different types of projects, from simple websites to complex web applications. Full-Stack Developers are equipped with the ability to take an idea and turn it into a fully-functioning software product, this makes them a valuable asset to any development team.
                            </span>
                        </p>
                        {/* <button
                            className="btn btn-md"
                            onClick={() => handleReadMore()}
                            id="myBtn"
                        >
                            Read more
                        </button> */}
                    </div>
                    <div id="seo-experience" className="experience-item">
                        <h2>SEO Learner</h2>
                        <h3 className="orange-color text-center">2022-2023 | SEO Learner </h3>
                        <p className='text-justify p-2'>An SEO (Search Engine Optimization) learner is someone who is learning or studying the techniques and strategies used to improve the visibility and ranking of a website or web page on search engines like Google, Bing, and Yahoo.
                            <span id="dots">...</span><span id="more">
                                SEO is the process of optimizing a website to make it more attractive to search engines, and in turn, to users.

                                An SEO learner typically starts by understanding the basics of search engine algorithms and how they work. They learn about the different factors that affect a website's ranking, such as the use of keywords, backlinks, meta tags, and other elements. They also learn about the importance of creating high-quality content and the role of user experience in SEO.

                                In addition to learning about the technical aspects of SEO, an SEO learner also learns about the various tools and software that can help them improve their skills. They learn about keyword research tools, analytics tools, and link building tools that can help them understand how users are interacting with their website. They also learn about the importance of monitoring and measuring the performance of their website, and how to use analytics data to make data-driven decisions.

                                An SEO learner also needs to stay up-to-date with the latest trends, algorithms and best practices to stay relevant in the industry. They also need to be able to adapt to the changing search engine algorithms and updates.

                                In summary, an SEO learner is someone who is passionate about understanding how search engines work and how to make websites more visible to users. They have a desire to learn and stay current with the latest SEO trends, strategies and tools. They also have an analytical mindset and the ability to use data to make decisions. With the right knowledge and skills, an SEO learner can become an expert in the field and help websites to achieve higher rankings and drive more traffic.
                            </span>
                        </p>
                        {/* <button
                            className="btn btn-md"
                            onClick={() => handleReadMore()}
                            id="myBtn"
                        >
                            Read more
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;