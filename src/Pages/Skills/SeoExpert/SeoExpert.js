import React from 'react';
import './SeoExpert.css';

const SeoExpert = () => {
    function handleReadMoreSeoBtn() {
        var dots = document.getElementById("dotsSeo");
        var moreText = document.getElementById("moreSeo");
        var btnText = document.getElementById("readMoreSeoBtn");

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
            <h2>SEO Learner</h2>
            <h3 className="orange-color text-center">2022-2023 | SEO Learner </h3>
            <p className='text-justify p-2'>An SEO (Search Engine Optimization) learner is someone who is learning or studying the techniques and strategies used to improve the visibility and ranking of a website or web page on search engines like Google, Bing, and Yahoo.
                <span id="dotsSeo">...</span><span id="moreSeo">
                    SEO is the process of optimizing a website to make it more attractive to search engines, and in turn, to users.

                    An SEO learner typically starts by understanding the basics of search engine algorithms and how they work. They learn about the different factors that affect a website's ranking, such as the use of keywords, backlinks, meta tags, and other elements. They also learn about the importance of creating high-quality content and the role of user experience in SEO.

                    In addition to learning about the technical aspects of SEO, an SEO learner also learns about the various tools and software that can help them improve their skills. They learn about keyword research tools, analytics tools, and link building tools that can help them understand how users are interacting with their website. They also learn about the importance of monitoring and measuring the performance of their website, and how to use analytics data to make data-driven decisions.

                    An SEO learner also needs to stay up-to-date with the latest trends, algorithms and best practices to stay relevant in the industry. They also need to be able to adapt to the changing search engine algorithms and updates.

                    In summary, an SEO learner is someone who is passionate about understanding how search engines work and how to make websites more visible to users. They have a desire to learn and stay current with the latest SEO trends, strategies and tools. They also have an analytical mindset and the ability to use data to make decisions. With the right knowledge and skills, an SEO learner can become an expert in the field and help websites to achieve higher rankings and drive more traffic.
                </span>
            </p>
            <button id='readMoreSeoBtn' className='btn btn-md' onClick={() => handleReadMoreSeoBtn()}>Read more</button>
        </div>
    );
};

export default SeoExpert;