import React from 'react';

import './AboutUs__img.scss'

import img from 'assets/images/Slider/_1.png'

const AboutUs__Img = ({ classNames }) => {
    return (
        <div className={['about-us__img', classNames && classNames?.join(' ')].join(' ')}>
            <img src={img} alt={'img'}/>
        </div>
    );
};

export default AboutUs__Img;