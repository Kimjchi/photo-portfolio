import React from "react";

import { images } from '../../constants';

interface SubHeadingProps {
    title: string;
}
export default function SubHeading({ title }: SubHeadingProps) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <p className="p__cormorant">{title}</p>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        </div>
    )
}