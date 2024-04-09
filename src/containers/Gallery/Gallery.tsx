import React from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

export default function Gallery() {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        const { current } = scrollRef;
        if (!current) return;
        if (direction === 'left') {
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__gallery flex__center" id="gallery">
        <div className="app__gallery-content">
            <SubHeading title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
                Follow me on Instagram to see more of my latest photos and updates.
            </p>
            <a href="https://www.instagram.com/kimjchi/" target="blank">
                <button type="button" className="custom__button">View More</button>
            </a>
        </div>
        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05].map((image, index) => (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" className="noSelect" />
                <a href="https://www.instagram.com/kimjchi/" target="blank" className="gallery__image-icon">
                    <BsInstagram  />
                </a>
                </div>
            ))}
            </div>
            <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
        </div>
        </div>
    );
}