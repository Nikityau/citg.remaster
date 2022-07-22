import React from 'react';
import {SplideSlide} from "@splidejs/react-splide";

const SliderUiDefaultSlide = ({ children }) => {
    return (
        <SplideSlide>
            { children }
        </SplideSlide>
    );
};

export default SliderUiDefaultSlide;