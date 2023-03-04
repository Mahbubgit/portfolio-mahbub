import React from 'react';
import './Projects.css';

import img1 from '../../Images/projects-showcase/mission-2022.png';
import img2 from '../../Images/projects-showcase/influencer-gear.png';
import img3 from '../../Images/projects-showcase/convention-center.png';
import img4 from '../../Images/projects-showcase/monthly-plan-calculator.png';
import img5 from '../../Images/projects-showcase/phone-bazar.png';
import img6 from '../../Images/projects-showcase/baby-toy-shopping.png';
import img7 from '../../Images/projects-showcase/t-shirt-mania.png';
import img8 from '../../Images/projects-showcase/doctors-appointment.png';
import img9 from '../../Images/projects-showcase/bd-motors.png';
import img10 from '../../Images/projects-showcase/bd-tools.png';

const Projects = () => {

    function filterSelection(c) {
        let x, i;
        x = document.getElementsByClassName("column");
        if (c === "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) { element.className += " " + arr2[i]; }
        }
    }

    function w3RemoveClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    const btnActive = () => {
        let btnContainer = document.getElementById("myBtnContainer");
        let buttons = btnContainer.getElementsByClassName("btn");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }

    const handleShowAll = () => {
        filterSelection("all");
        btnActive();
    }
    const handleAssignmentProject = () => {
        filterSelection('assignment');
        btnActive();
    }
    const handlePracticeProject = () => {
        filterSelection('practice');
        btnActive();
    }
    const handleLiveProject = () => {
        filterSelection('live');
        btnActive();
    }

    return (

        <div>

            <div className="main">
                <div className="section-heading">
                    <h2>My Projects</h2>
                </div>
                <div id="myBtnContainer">
                    <button onClick={() => handleShowAll(filterSelection('all'))} className="btn active mx-2 h-6 w-36  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800" >Show all</button>
                    <button onClick={() => handleAssignmentProject(filterSelection('assignment'))} className="btn mx-2 h-6 w-36  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Assignment</button>
                    <button onClick={() => handlePracticeProject(filterSelection('practice'))} className="btn mx-2 h-6 w-36  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Practice</button>
                    <button onClick={() => handleLiveProject(filterSelection('live'))} className="btn mx-2 h-6 w-36  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Live</button>
                </div>

                <div className="row">
                    <div className="column assignment">
                        <div className="content">
                            <h4>
                                <a href="https://mahbubgit.github.io/mission-2022-main/" target={'_blank'} rel="noreferrer">
                                    <img src={img1} alt="Mission 2023" style={{ width: "100%", height: "150px" }} />
                                    Mission 2022
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column assignment">
                        <div className="content">
                            <h4>
                                <a href="https://mahbubgit.github.io/influencer-gear-main/" target={'_blank'} rel="noreferrer">
                                    <img src={img2} alt="Influencer Gear" style={{ width: "100%", height: "150px" }} />
                                    Influencer Gear
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column assignment">
                        <div className="content">
                            <h4>
                                <a href="https://mahbubgit.github.io/sm-convention-center/" target={'_blank'} rel="noreferrer">
                                    <img src={img3} alt="Convention Center" style={{ width: "100%", height: "150px" }} />
                                    Convention Center
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="column practice">
                        <div className="content">
                            <h4>
                                <a href="https://friendly-benz-fdf91c.netlify.app/" target={'_blank'} rel="noreferrer">
                                    <img src={img4} alt="Monthly Plan Calculator" style={{ width: "100%", height: "150px" }} />
                                    Monthly Plan Calculator
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column practice">
                        <div className="content">
                            <h4>
                                <a href="https://phone-bazar-search.netlify.app/" target={'_blank'} rel="noreferrer">
                                    <img src={img5} alt="Phone Bazar" style={{ width: "100%", height: "150px" }} />
                                    Phone Bazar
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column practice">
                        <div className="content">
                            <h4>
                                <a href="https://free-baby-toy-shopping.netlify.app/" target={'_blank'} rel="noreferrer">
                                    <img src={img6} alt="Baby Toy Shopping" style={{ width: "100%", height: "150px" }} />
                                    Baby Toy Shopping
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="column live">
                        <div className="content">
                            <h4>
                                <a href="https://sweet-t-shirt-mania.netlify.app" target={'_blank'} rel="noreferrer">
                                    <img src={img7} alt="T-Shirt Mania" style={{ width: "100%", height: "150px" }} />
                                    T-Shirt Mania
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column live">
                        <div className="content">
                            <h4>
                                <a href="https://doctors-appointment-bc374.web.app/" target={'_blank'} rel="noreferrer">
                                    <img src={img8} alt="Doctors Appointment" style={{ width: "100%", height: "150px" }} />
                                    Doctors Appointment
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column live">
                        <div className="content">
                            <h4>
                                <a href="https://bdmotors-aeadc.web.app" target={'_blank'} rel="noreferrer">
                                    <img src={img9} alt="BD Motors" style={{ width: "100%", height: "150px" }} />
                                    BD Motors
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div className="column live">
                        <div className="content">
                            <h4>
                                <a href="https://bdtools-8103c.web.app" target={'_blank'} rel="noreferrer">
                                    <img src={img10} alt="BD Tools" style={{ width: "100%", height: "150px" }} />
                                    BD Tools
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;