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
                github={"https://github.com/annahi-paez"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fannahi.png?alt=media&token=53441592-fb31-4825-b732-4fcd289e3ec6"}
            />
            <Person
                name={"Philip Truong"}
                position={"Frontend Developer"}
                text={"I like to draw, listen to music, and develop websites."}
                linkedin={"https://www.linkedin.com/in/philip-truong"}
                github={"https://github.com/ptruong0"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fphillip.jpg?alt=media&token=17d143a0-e7ef-41aa-bf4c-42b08c115cf9"}
            />
            <Person
                name={"Natisha Khadgi"}
                position={"Frontend Developer"}
                text={"When I am not creating websites, I like to binge period-dramas, draw digital illustrations, and nap."}
                linkedin={"https://www.linkedin.com/in/natisha-khadgi"}
                github={"https://github.com/natishakhadgi"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fnatisha.jpg?alt=media&token=947b09aa-9016-4bb1-87af-abf10bb691cb"}
            />
            <Person
                name={"Jonathan Vo"}
                position={"Full-stack Developer"}
                text={"I love to make websites, beef jerky, and leather goods."}
                linkedin={"https://www.linkedin.com/in/jnvo25"}
                github={"https://github.com/jnvo25"}
                backgroundURL={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Fjonathanvo.png?alt=media&token=bc4bfc03-343a-430f-9896-2fdbb9117f31"}
            />
    </div>
    </IconContext.Provider>
    );
}

export default AboutUs;