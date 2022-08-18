import React from 'react';

import './AboutUs__img.scss'

const AboutUs__Img = ({ image,classNames }) => {
    return (
        <div className={['about-us__img', classNames && classNames?.join(' ')].join(' ')}
            style={{
                backgroundImage: `url(${image})`
            }}
        >
        </div>
    );
};

export default AboutUs__Img;