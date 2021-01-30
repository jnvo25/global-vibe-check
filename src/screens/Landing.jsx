import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

function Landing() {
    return (
        <div className="landing-page">
            <div id="welcome-text">
                <h2>Welcome to Global Vibe Check!</h2>
                <p>How are countries around the world doing in terms of COVID-19 cases?</p>
            </div>
            <button id="launch-btn">
            <Link to='/globe'>Get started!</Link></button>
        </div>
    );
}

export default Landing;