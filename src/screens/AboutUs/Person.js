import React from 'react';
import cartoon from '../../assets/earth_heart.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

export default function Person(props) {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <img src={cartoon} className="earth-cartoon" alt="" />
            <div className = "about-profile">
                <div className = "about-profile-img"
                    style={{backgroundImage: "url(" + props.backgroundURL + ")", backgroundSize: "cover"}}
                />
                <div className = "about-profile-text">
                    <p className = "name">{props.name} | {props.position}</p>
                    <p>{props.text}</p>
                    <p>
                        <a href={props.linkedin}><FaLinkedin/></a>
                        <a href={props.github}><FaGithub/></a>
                    </p>
                </div>
            </div>
        </IconContext.Provider>
    );
}

