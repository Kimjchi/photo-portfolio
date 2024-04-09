import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

export default function Intro(): JSX.Element {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef  = useRef<HTMLVideoElement>(null);

    return (
        <div className="app__video">
            <video
                ref={vidRef}
                src={meal}
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