import React from 'react';
import CompanyTitle from '../Shared/CompanyTitle/CompanyTitle';
import PrimaryButton from '../Shared/PrimaryButton';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/X8L3f9R/MyPic.png" width={400} alt='Profile' />
                <div>
                    <h1 className="text-5xl font-bold inline-flex"><p>Hi! I'm <CompanyTitle></CompanyTitle></p> </h1>
                    <p className="py-2 gap-x-5">I am Oracle Developer, Web Developer and SEO Learner.</p>
                    <p className="py-6">I am from Dhaka, Bangladesh. <br /> 
                                        If you need to develop desktop based customized software (front end and back end Oracle) <br />
                                        or dynamic web based portal (using HTML, CSS, JavaScript, React, Bootstrap, MongoDB) <br />
                                        then feel free to contact with me.
                    </p>
                    <PrimaryButton>Download My CV</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Home;