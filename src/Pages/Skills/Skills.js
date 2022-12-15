import React from 'react';

const Skills = () => {
    return (
        <section>
            <h2 className='text-center'>Professional Skills</h2>
            <div className="left-banner">
                <div className='flexible-container'>
                    <div id="oracle-experience" className="experience-item">
                        <h2>Oracle Developer</h2>
                        <h3 className="orange-color text-center">2008-Present | Pro Level Developer</h3>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium perspiciatis dicta delectus
                            ipsum assumenda quisquam repellat ipsam non error. Fugit.</p>
                    </div>
                    <div id="dotnet-experience" className="experience-item">
                        <h2>.Net Developer</h2>
                        <h3 className="orange-color text-center">2017-Present | Pro Level Developer</h3>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium perspiciatis dicta delectus
                            ipsum assumenda quisquam repellat ipsam non error. Fugit.</p>
                    </div>
                </div>
                
                <div className='flexible-container'>
                    <div id="full-stack-experience" className="experience-item">
                        <h2>Full Stack Developer</h2>
                        <h3 className="orange-color text-center">2022-Present | Pro Level Developer</h3>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium perspiciatis dicta delectus
                            ipsum assumenda quisquam repellat ipsam non error. Fugit.</p>
                    </div>
                    <div id="seo-experience" className="experience-item">
                        <h2>SEO Learner</h2>
                        <h3 className="orange-color text-center">2022-2023 | SEO Learner </h3>
                        <p className='text-justify p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptates, neque provident sint vel
                            a corporis minima ea explicabo aperiam rem officiis magnam! Culpa similique, cum natus reprehenderit
                            et omnis?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;