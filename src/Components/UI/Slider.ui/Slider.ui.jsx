import React from 'react';
import {Splide, SplideTrack} from '@splidejs/react-splide'

import { SLIDER_DEFAULT_SLIDE, SLIDER_SLIDE_LINK, SLIDER_SLIDE_WITH_TEXT } from './_slider_presets_option/Slider_presets'
import { PRESET_SLIDER_WITH_TEXT } from './_slider_presets_option/Slider_preset-slide-with-text'
import {PRESET_SLIDER_DEFAULT} from "slider_ui/_slider_presets_option/Slider_preset-default-slide";

import './Slider.ui.scss'
import '@splidejs/splide/css';

import './_slider_style/Slider.ui_slider_style_default.scss'
import './_slider_style/Slider.ui_style_pagination_default.scss'
import './_slider_style/Slider.ui_style_arrows_default.scss'
import './_slider_style/Slider.ui_style_center_focus.scss'

import slider__arrowIng from 'assets/images/Slider/arrow.svg'

const SliderUi = ({ sliderOptionsPreset ,classNames, children }) => {

    const sliderOptions = () => {
        switch (sliderOptionsPreset) {
            case SLIDER_DEFAULT_SLIDE:
                return PRESET_SLIDER_DEFAULT
            case SLIDER_SLIDE_LINK:
                return ''
            case SLIDER_SLIDE_WITH_TEXT:
                return PRESET_SLIDER_WITH_TEXT
            default:
                return PRESET_SLIDER_DEFAULT
        }
    }

    const sliderClasses = () => {
        switch (sliderOptionsPreset) {
            case SLIDER_DEFAULT_SLIDE:
                return [
                    'slider-ui_slider_style-default',
                    'slider-ui_style_pagination_default',
                    'slider-ui_style_arrows_default',
                    'slider-ui_style_center_focus'
                ]
            default:
                return ['']
        }
    }

    return (
        <div className={['slider-ui',
            classNames && classNames?.join(' '),
            sliderClasses()?.join(' ')
        ].join(' ')}>
            <Splide
                hasTrack={false}
                options={sliderOptions()}
            >
                <SplideTrack>
                    { children }
                </SplideTrack>

                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <img src={slider__arrowIng} alt={'slider__arrow-img'}/>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <img src={slider__arrowIng} alt={'slider__arrow-img'}/>
                    </button>
                </div>
            </Splide>
        </div>
    );
};

export default SliderUi;