import React from 'react';
import './Services.css';
import software from '../../Images/service/1-software-development.jpg';
import web from '../../Images/service/1-web-development.jpeg';
import seo from '../../Images/service/1-seo.webp';

const Services = () => {
    return (
        <section className="section my-services">
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
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, hic officiis illo ex
                                nobis
                                aspernatur rerum! Reprehenderit nemo consectetur, asperiores magnam debitis, odio repellendus
                                ratione ad nihil deserunt aperiam voluptatum consequatur cupiditate quam, repellat provident
                                vel. Saepe nulla error, nostrum consequatur optio illo ea magni sed nihil, a doloribus quo.
                            </p>
                            <button className="service-btn">Details</button>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={web} alt="Web Development" />
                            </div>
                            <h2>Web Development</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, hic officiis illo ex
                                nobis
                                aspernatur rerum! Reprehenderit nemo consectetur, asperiores magnam debitis, odio repellendus
                                ratione ad nihil deserunt aperiam voluptatum consequatur cupiditate quam, repellat provident
                                vel. Saepe nulla error, nostrum consequatur optio illo ea magni sed nihil, a doloribus quo.
                            </p>
                            <button className="service-btn">Details</button>
                        </div>
                        <div className="service">
                            <div className="service-image">
                                <img src={seo} alt="SEO Development" />
                            </div>
                            <h2>SEO Service</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, hic officiis illo ex
                                nobis
                                aspernatur rerum! Reprehenderit nemo consectetur, asperiores magnam debitis, odio repellendus
                                ratione ad nihil deserunt aperiam voluptatum consequatur cupiditate quam, repellat provident
                                vel. Saepe nulla error, nostrum consequatur optio illo ea magni sed nihil, a doloribus quo.
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