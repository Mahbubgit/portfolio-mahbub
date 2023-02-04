import React from 'react';
import './ReturnToTop.css';
import GoToTopImg from '../../../Images/arrow-up-icon.png';

const ReturnToTop = () => {

    let topButton = document.getElementById("returnToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <button
                className="btn btn-md"
                onClick={() => topFunction()}
                id="returnToTopBtn"
                title="Go to top"
            >Top
                <img style={{ width: "30px", height: "30px" }} src={GoToTopImg} alt="Go to Top" />
            </button>
        </div>
    );
};

export default ReturnToTop;