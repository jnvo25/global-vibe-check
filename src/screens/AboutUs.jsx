import react from 'react';
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
            />
            <Person
                name={"Philip Truong"}
                position={"Frontend Developer"}
                text={"I like to draw, listen to music, and develop websites."}
                linkedin={"https://www.linkedin.com/in/philip-truong"}
                github={"https://github.com/ptruong0"}
            />
            <Person
                name={"Natisha Khadgi"}
                position={"Frontend Developer"}
                text={"When I am not creating websites, I like to binge period-dramas, draw digital illustrations, and nap."}
                linkedin={"https://www.linkedin.com/in/natisha-khadgi"}
                github={"https://github.com/natishakhadgi"}
            />
            <Person
                name={"Jonathan Vo"}
                position={"Full-stack Developer"}
                text={"I love to make websites, beef jerky, and leather goods."}
                linkedin={"www.linkedin.com/in/jnvo25"}
                github={"https://github.com/jnvo25"}
            />
    </div>
    </IconContext.Provider>
    );
}

export default AboutUs;