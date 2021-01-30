import react from 'react';
import '../App.css';
import './AboutUs.css';
import cartoon from '../assets/earth_heart.png';

function AboutUs() {
    return ( 
    <div>
        <img src={cartoon} className="earth-cartoon" alt="" />
        <div className = "about-profile"> 
        <div className = "about-profile-img natisha"></div>
        <div className = "about-profile-text">
            <h2>Annahi Paez</h2>
            <h3>UI Design</h3>
            <p>I love to design websites, cook homemade food for family & friends and listen to music.</p>

            <a href="https://www.linkedin.com/in/annahi-paez-3a7b2b192/"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
    
    <div className = "about-profile"> 
        <div className = "about-profile-img natisha">
            
        </div>
        <div className = "about-profile-text">
            <h2>Philip Truong</h2>
            <h3>Frontend Developer</h3>
            <p>I like to draw, listen to music, and develop websites.</p>

            <a href="https://www.linkedin.com/in/philip-truong"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/ptruong0"><i class="fab fa-github"></i></a>
        </div>
    </div>

    <div className = "about-profile"> 
        <div className = "about-profile-img natisha">
            
        </div>
        <div className = "about-profile-text">
            <h2>Natisha Khadgi</h2>
            <p>When I am not creating websites, I like to binge period-dramas, draw digital illustrations, and nap.</p>

            <a href="https://www.linkedin.com/in/natisha-khadgi"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/natishakhadgi"><i class="fab fa-github"></i></a>
        </div>
    </div>

    <div className = "about-profile"> 
        <div className = "about-profile-img natisha">
            
        </div>
        <div className = "about-profile-text">
            <h2>Jonathan Vo</h2>
            <h3>Full Stack Developer</h3>
            <p>I love to make websites, beef jerky, and leather goods.</p>

            <a href="https://www.linkedin.com/in/natisha-khadgi"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/jnvo25"><i class="fab fa-github"></i></a>
            
        </div>
    </div>
    </div>
    );
}

export default AboutUs;