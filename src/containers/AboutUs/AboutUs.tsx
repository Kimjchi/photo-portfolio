import React from "react";

import { images } from '../../constants';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="G_overlay" />
            </div>

            <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Me</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">
                    My name is Jérémy Kim and I'm a full-stack developer with a passion for photography, drawings, creative stuff!
                </p>
                <a href="https://strapi-production-e78b.up.railway.app/uploads/CV_2024_bb37cde0c3.pdf" target="blank">
                    <button type="button" className="custom__button">Know More</button>
                </a>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.artLover} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">My story</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">
                    Younger, I always followed the path that was drawn for me. I was a good student, I went to college, I got a job. 
                    But something was missing. I needed to create, to express myself. That's why I'm exploring all kinds of art medium.
                </p>
                <a href="https://strapi-production-e78b.up.railway.app/uploads/CV_2024_bb37cde0c3.pdf" target="blank">
                    <button type="button" className="custom__button">Know More</button>
                </a>
            </div>
            </div>
        </div>
    )
}