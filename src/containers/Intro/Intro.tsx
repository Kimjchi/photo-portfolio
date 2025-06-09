import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';

export default function Intro(): JSX.Element {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef  = useRef<HTMLVideoElement>(null);

    return (
        <div className="app__video" id="camera">
            <video
                ref={vidRef}
                src="https://strapi-production-e78b.up.railway.app/uploads/meal_718f1e722b.mp4"
                loop
                controls={false}
            />

            <div className="app__video-overlay flex__center">
                <div
                className="app__video-overlay_circle flex__center"
                onClick={() => {
                    setPlayVideo(!playVideo);
                    if (playVideo) {
                    vidRef.current?.pause();
                    } else {
                    vidRef?.current?.play();
                    }
                }}
                >
                {playVideo ? (
                    <BsPauseFill color="#fff" fontSize={30} />
                ) : (
                    <BsFillPlayFill color="#fff" fontSize={30} />
                )}
                </div>
            </div>
            </div>
    )
}