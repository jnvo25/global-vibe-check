import React from 'react';
import { IconContext } from 'react-icons/lib';

import '../App.css';
import './AboutUs.css';
import Stars from '../components/Stars.jsx';
import Person from './AboutUs/Person';
import cartoon from '../assets/earth_heart.png';


function AboutUs() {
    
    return ( 
    <IconContext.Provider value={{ className: 'react-icons' }}>
        <div>
            <Stars />
            <img src={cartoon} className="earth-cartoon" alt="" />
            <Person
                name={"Annahi Paez"}
                position={"UI Design"}
                text={"I love to design websites, cook homemade food for family and friends and listen to music."}
                linkedin={"https://www.linkedin.com/in/annahi-paez-3a7b2b192/"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fhamsterprofile.png?alt=media&token=ba99d757-a5cb-4d74-91f1-373976eb550a"}
            />
            <Person
                name={"Philip Truong"}
                position={"Frontend Developer"}
                text={"I like to draw, listen to music, and develop websites."}
                linkedin={"https://www.linkedin.com/in/philip-truong"}
                github={"https://github.com/ptruong0"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fcatprofile.png?alt=media&token=4b52bed0-0d4d-42d0-8f59-91b06733549e"}
            />
            <Person
                name={"Natisha Khadgi"}
                position={"Frontend Developer"}
                text={"When I am not creating websites, I like to binge period-dramas, draw digital illustrations, and nap."}
                linkedin={"https://www.linkedin.com/in/natisha-khadgi"}
                github={"https://github.com/natishakhadgi"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fdogprofile.png?alt=media&token=75c892ed-0f49-4729-9677-86c98624400d"}
            />
            <Person
                name={"Jonathan Vo"}
                position={"Full-stack Developer"}
                text={"I love to make websites, beef jerky, and leather goods."}
                linkedin={"https://www.linkedin.com/in/jnvo25"}
                github={"https://github.com/jnvo25"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Flizardprofile.png?alt=media&token=08a49bfb-7bb7-4cd2-a9f6-2183d0d231ac"}
            />
    </div>
    </IconContext.Provider>
    );
}

export default AboutUs;