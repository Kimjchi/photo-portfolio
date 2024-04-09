import React from 'react';

import './Intro.css';

export default function Intro(): JSX.Element {

    return (
        <div className="app__video" id="camera">
            <iframe 
                src="https://www.youtube.com/embed/NNmZuQyAsPU?si=CSrNnOSVaTWCdglm" 
                title="YouTube video player" 
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            />
        </div>
    )
}