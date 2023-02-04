import React from 'react';
import DotNetDeveloper from './DotNetDeveloper/DotNetDeveloper';
import FullStackDeveloper from './FullStackDeveloper/FullStackDeveloper';
import OracleDeveloper from './OracleDeveloper/OracleDeveloper';
import SeoExpert from './SeoExpert/SeoExpert';

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
                    </div>
                </div>

                <div className='flexible-container'>
                    <div id="full-stack-experience" className="experience-item">
                        <FullStackDeveloper></FullStackDeveloper>
                    </div>
                    <div id="seo-experience" className="experience-item">
                        <SeoExpert></SeoExpert>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;