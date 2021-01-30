import react from 'react';
import '../App.css';
import './AboutUs.css';
import cartoon from '../assets/earth_heart.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function AboutUs() {
    return ( 
    <IconContext.Provider value={{ className: 'react-icons' }}>
        <div>
            <img src={cartoon} className="earth-cartoon" alt="" />
            <div className = "about-profile"> 
            <div className = "about-profile-img natisha"></div>
            <div className = "about-profile-text">
                <p className = "name">Annahi Paez | UI Design</p>
                <p>I love to design websites, cook homemade food for family and friends and listen to music.</p>

                <p>
                <a href="https://www.linkedin.com/in/annahi-paez-3a7b2b192/"><FaLinkedin/></a>
                </p>
            </div>
        </div>
        
        <div className = "about-profile"> 
            <div className = "about-profile-img natisha">
                
            </div>
            <div className = "about-profile-text">
                <p className = "name">Philip Truong | Frontend Developer</p>
                <p>I like to draw, listen to music, and develop websites.</p>
                <br></br>
                <p>
                <a href="https://www.linkedin.com/in/philip-truong"><FaLinkedin/></a>
                <a href="https://github.com/ptruong0"><FaGithub/></a>
                </p>
            </div>
        </div>

        <div className = "about-profile"> 
            <div className = "about-profile-img natisha">
                
            </div>
            <div className = "about-profile-text">
                <p className = "name">Natisha Khadgi | Frontend Developer</p>
                <p>When I am not creating websites, I like to binge period-dramas, draw digital illustrations, and nap.</p>

                <p>
                <a href="https://www.linkedin.com/in/natisha-khadgi"><FaLinkedin/></a>
                <a href="https://github.com/natishakhadgi"><FaGithub/></a>
                </p>
            </div>
        </div>

        <div className = "about-profile"> 
            <div className = "about-profile-img natisha">
                
            </div>
            <div className = "about-profile-text">
                <p className = "name">Jonathan Vo | Full Stack Developer</p>
                <p>I love to make websites, beef jerky, and leather goods.</p>

                <p>
                <a href="https://www.linkedin.com/in/natisha-khadgi"><FaLinkedin/></a>
                <a href="https://github.com/jnvo25"><FaGithub/></a>
                </p>
            </div>
        </div>

    </div>
    </IconContext.Provider>
    );
}

export default AboutUs;