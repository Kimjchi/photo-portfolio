import React from "react";

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

export default function Chef() {
    return (
        <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef_image" />
            </div>
            <div className="app__wrapper_info">
            <SubHeading title="Inspiration" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote_image" />
                <p className="p__opensans">
                    Do not fear mistakes. There are none.
                </p>
                </div>
                <p className="p__opensans">
                    Even though it's a Miles Davis quote, it works for photography and pretty much everything in life.
                </p>
            </div>

            <div className="app__chef-sign">
                <p>Jérémy Kim</p>
                <p className="p__opensans">Freelance dev & weirdo</p>
            </div>
            </div>
        </div>
    )
}