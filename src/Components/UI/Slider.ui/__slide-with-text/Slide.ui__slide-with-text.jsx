import React from 'react';
import { SplideSlide } from '@splidejs/react-splide'

import './Sider.ui__slider-with-text.scss'

const SlideUi__SlideWithText = ({ imgSrc, text }) => {
    return (
        <SplideSlide>
            <div className={'slider-ui__slider-with-text'}>
                <div className={'slider-ui__slider-with-text-img'}>
                    <img src={imgSrc} alt={'img'}/>
                </div>
                <div className={'slider-ui__slider-with-text-text'}>
                    <span> { text } </span>
                </div>
            </div>
        </SplideSlide>
    );
};

export default SlideUi__SlideWithText;