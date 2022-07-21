import React from 'react';
import {Splide, SplideTrack} from '@splidejs/react-splide'

import { SLIDER_DEFAULT_SLIDE, SLIDER_SLIDE_LINK, SLIDER_SLIDE_WITH_TEXT } from './_slider_presets_option/Slider_presets'
import { PRESET_SLIDE_WITH_TEXT } from './_slider_presets_option/Slider_preset-slide-with-text'

import './Slider.ui.scss'
import '@splidejs/splide/css';

const SliderUi = ({ sliderOptionsPreset ,classNames, children }) => {

    const sliderOptions = () => {
        switch (sliderOptionsPreset) {
            case SLIDER_DEFAULT_SLIDE:
                return ''
            case SLIDER_SLIDE_LINK:
                return ''
            case SLIDER_SLIDE_WITH_TEXT:
                return PRESET_SLIDE_WITH_TEXT
            default:
                return SLIDER_DEFAULT_SLIDE
        }
    }

    return (
        <div className={['slider-ui', classNames && classNames?.join(' ')].join(' ')}>
            <Splide
                hasTrack={false}
                options={sliderOptions()}
            >
                <SplideTrack>
                    { children }
                </SplideTrack>
            </Splide>
        </div>
    );
};

export default SliderUi;