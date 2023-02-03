import React from 'react';
import './OracleDeveloper.css';

const OracleDeveloper = () => {
    function handleReadMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("readMoreBtn");

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
            <h2>Oracle Developer</h2>
            <h3 className="orange-color text-center">2008-Present | Pro Level Developer</h3>
            <p className='text-justify p-2'>Oracle Developer is a suite of development tools provided by Oracle Corporation for building and managing applications that interact with Oracle databases. It includes a variety of tools and techno<span id="dots">...</span><span id="more">logies such as:
                
                    Oracle SQL Developer: a free, integrated development environment for working with SQL and PL/SQL.
                    Oracle Forms Developer: a tool for building and deploying client-server applications.
                    Oracle Reports Developer: a tool for creating, designing, and publishing reports.
                    Oracle Application Express (APEX): a low-code development platform for building web and mobile applications.
                    These tools are designed to work seamlessly together and are often used in conjunction with other Oracle products such as the Oracle Database and Oracle Fusion Middleware. With Oracle Developer, developers can build, test, and deploy robust, high-performing applications that can handle large amounts of data and support complex business processes..
                </span>
            </p>
            <button id='readMoreBtn' className='btn btn-md' onClick={() => handleReadMore()}>Read more</button>
        </div>
    );
};

export default OracleDeveloper;