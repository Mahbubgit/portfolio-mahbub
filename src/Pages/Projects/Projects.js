import React from 'react';
import './Projects.css';
// import { Carousel } from 'react-bootstrap';
import mission_2022 from '../../Images/projects-showcase/mission-2022.png';
import influencer_gear from '../../Images/projects-showcase/influencer-gear.png';
import convention_center from '../../Images/projects-showcase/convention-center.png';
import monthly_plan_calculator from '../../Images/projects-showcase/monthly-plan-calculator.png';
import phone_bazar from '../../Images/projects-showcase/phone-bazar.png';
import baby_toy_shopping from '../../Images/projects-showcase/baby-toy-shopping.png';
import t_shirt_mania from '../../Images/projects-showcase/t-shirt-mania.png';
import doctors_appointment from '../../Images/projects-showcase/doctors-appointment.png';
import bd_motors from '../../Images/projects-showcase/bd-motors.png';
import bd_tools from '../../Images/projects-showcase/bd-tools.png';

const Projects = () => {
    return (

        <div>
            <h2>Projects Showcase</h2>
            <div className='m-6 gallery'>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={mission_2022} alt="mission-2022" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://mahbubgit.github.io/mission-2022-main/" target={'_blank'} rel="noreferrer">
                                mission-2022
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={influencer_gear} alt="influencer-gear" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://mahbubgit.github.io/influencer-gear-main/" target={'_blank'} rel="noreferrer">
                                influencer-gear
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={convention_center} alt="convention-center" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://affectionate-elion-eb7a7a.netlify.app" target={'_blank'} rel="noreferrer">
                                convention-center
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={monthly_plan_calculator} alt="monthly-plan-calculator" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://friendly-benz-fdf91c.netlify.app/" target={'_blank'} rel="noreferrer">
                                monthly-plan-calculator
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={phone_bazar} alt="phone-bazar" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://phone-bazar-search.netlify.app/" target={'_blank'} rel="noreferrer">
                                phone-bazar
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={baby_toy_shopping} alt="baby-toy-shopping" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://free-baby-toy-shopping.netlify.app/" target={'_blank'} rel="noreferrer">
                                baby-toy-shopping
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={t_shirt_mania} alt="t-shirt-mania" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://sweet-t-shirt-mania.netlify.app" target={'_blank'} rel="noreferrer">
                                t-shirt-mania
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={doctors_appointment} alt="doctors-appointment" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://doctors-appointment-bc374.web.app/" target={'_blank'} rel="noreferrer">
                                doctors-appointment
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={bd_motors} alt="bd-motors" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://bdmotors-aeadc.web.app" target={'_blank'} rel="noreferrer">
                                bd-motors
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="photo">
                    <div className="border left"></div>
                    <div className="border right"></div>
                    <div className="border top"></div>
                    <div className="border bottom"></div>
                    <img src={bd_tools} alt="bd-tools" />
                    <div className="photo-content">
                        <h3>
                            <a href="https://bdtools-8103c.web.app" target={'_blank'} rel="noreferrer">
                                bd-tools
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;