import React from "react";
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';

import './Footer.css';

export default function Footer() {
    return (
        <div className="app__footer section__padding" id="contact">
            <FooterOverlay />

            <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans" style={{textTransform: "lowercase"}}>
                    <a href="mailto:jeremy.vir.kim@gmail.com">jeremy.vir.kim@gmail.com</a>
                </p>
                <p className="p__opensans">+33 6 25 07 39 70</p>
            </div>

            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer_logo" />
                <p className="p__opensans">&quot;I'm gonna put a curse on you and all your kids will be born completely naked.&quot;</p>
                <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon"/>
                <div className="app__footer-links_icons">
                <a href="https://www.instagram.com/kimjchi/" target="blank">
                    <FiInstagram />
                </a>
                <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-v-kim/" target="blank">
                    <FiLinkedin />
                </a>
                <a href="https://github.com/Kimjchi" target="blank">
                    <FiGithub />
                </a>                                
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Currently mostly free and working on personal projects</p>
            </div>
            </div>

            <div className="footer__copyright">
            <p className="p__opensans">2024 Kimjchi. All Rights reserved.</p>
            </div>
        </div>
    )
}