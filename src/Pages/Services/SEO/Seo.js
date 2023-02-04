import React from 'react';
import './Seo.css';

const Seo = () => {
    function handleReadMoreSeoServiceBtn() {
        var dots = document.getElementById("dotsSeoService");
        var moreText = document.getElementById("moreSeoService");
        var btnText = document.getElementById("readMoreSeoServiceBtn");

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
            <h2>SEO Service</h2>
            <p>
                As an SEO service provider, I help businesses and organizations improve their visibility and ranking on search engines such as Google, Bing, 
                <span id="dotsSeoService">...</span>
                <span id="moreSeoService">
                and Yahoo. 
                My role involves analyzing websites, identifying areas for improvement, and implementing SEO strategies to increase organic traffic and improve search engine rankings.

                I have a good understanding of SEO best practices and am familiar with a range of SEO tools and techniques such as keyword research, link building, and on-page optimization. I'm able to analyze website metrics, perform competitor research, and identify opportunities to improve a website's visibility in search results.

                I also have a good understanding of search engine algorithms and how they change over time, and am able to make changes to a website to comply with new algorithms.

                I am able to work closely with clients and stakeholders to understand their business goals and objectives, and develop SEO strategies that align with those goals.

                I have knowledge of HTML, CSS and JavaScript, which is necessary to be able to make changes to website code, and to be able to troubleshoot and debug issues that arise during development.

                Overall, providing SEO services is a challenging and rewarding career that allows me to stay current with the latest trends and technologies, and to help businesses and organizations improve their online presence and reach their target audience. It provides opportunities for growth and advancement and allows me to be part of a team that is creating innovative solutions.
                </span>

            </p>
            <button id='readMoreSeoServiceBtn' className='btn btn-md service-btn' onClick={() => handleReadMoreSeoServiceBtn()}>Read more</button>
        </div>
    );
};

export default Seo;