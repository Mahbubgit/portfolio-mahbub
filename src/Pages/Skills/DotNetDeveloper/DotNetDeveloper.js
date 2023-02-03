import React from 'react';
import './DotNetDeveloper.css';

const DotNetDeveloper = () => {
    function readMoreDotNetBtn() {
        var dots = document.getElementById("dotsDotNet");
        var moreText = document.getElementById("moreDotNet");
        var btnText = document.getElementById("readMoreDotNetBtn");

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
            <h2>.Net Developer</h2>
            <h3 className="orange-color text-center">2017-Present | Pro Level Developer</h3>
            <p className='text-justify p-2'>.NET is a free, open-source, cross-platform framework developed by Microsoft for building a wide range of applications, including web, desktop, mobile, gaming, and IoT (Internet of Things) applications.
                <span id="dotsDotNet">...</span><span id="moreDotNet">
                    A .NET developer is a software developer who specializes in building applications using the .NET framework and its associated languages, such as C# and Visual Basic .NET. .NET developers are responsible for designing, coding, testing, and maintaining applications using the .NET framework.

                    The .NET framework provides a large number of libraries and tools that developers can use to build high-performance applications. The framework also includes a common language runtime (CLR) which provides a platform for executing code and managing memory, as well as a large number of built-in classes and data types. The .NET framework also supports a variety of programming languages, including C# and Visual Basic, allowing developers to use the language that they are most comfortable with.

                    .NET developers typically have a strong understanding of the .NET framework and its associated technologies, as well as experience with programming languages such as C# or Visual Basic. They also have experience with software development methodologies, such as Agile or Scrum, and are comfortable working in a team environment.

                    In addition to building applications, .NET developers also work on maintaining and updating existing applications, debugging and troubleshooting any issues that may arise, and collaborating with other developers, designers and stakeholders to ensure that the final product meets the client's needs.

                    Overall, .NET developer is a valuable asset for companies looking to build high-performance and scalable applications using the latest technologies. The .Net framework continues to evolve and expand, providing powerful and versatile tools for developers, making it easier for them to build robust and reliable applications that can run on multiple platforms.
                </span>
            </p>
            <button id='readMoreDotNetBtn' className='btn btn-md' onClick={() => readMoreDotNetBtn()}>Read more</button>
        </div>
    );
};

export default DotNetDeveloper;