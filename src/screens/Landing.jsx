import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';


function generateRandomStyle() {
    var dimensions = Math.floor(Math.random() * 10 + 1);
    return {
        position: "fixed",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        left: String(Math.floor(Math.random() * 100 + 1)) + "%",
        top: String(Math.floor(Math.random() * 100 + 1)) + "%",
        height: dimensions,
        width: dimensions,
        boxShadow: "0px 0px 10px yellow",
    }
}

function Landing() {
    const numStars = 40;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<span className="star" style={generateRandomStyle()}></span>);
    }
    return (

        <div className="landing-page">
            {stars}
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