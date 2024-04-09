import React from "react";

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

export default function Header() {
    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
            <SubHeading title="Welcome to my photography portfolio" />
            <h1 className="app__header-h1">An analog photography retrospective</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>
                I created this website to showcase my photography work and at the same time practice my react skills. 
                I have a passion for capturing the world around me, especially people. I hope you enjoy my work.
            </p>
            <button type="button" className="custom__button">Explore Gallery</button>
            </div>

            <div className="app__wrapper_img">
            <img src={images.welcome} alt="header_img" />
            </div>
        </div>
    )
}