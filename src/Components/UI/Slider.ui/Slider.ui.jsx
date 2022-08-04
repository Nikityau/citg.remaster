import React from 'react';
import {Splide, SplideTrack} from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import {
    SLIDER_DEFAULT_SLIDE, SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE, SLIDER_GRID_1_2,
    SLIDER_GRID_3_2,
    SLIDER_SLIDE_LINK, SLIDER_SLIDE_SOLO,
    SLIDER_SLIDE_WITH_TEXT
} from './_slider_presets_option/Slider_presets'
import { PRESET_SLIDER_WITH_TEXT } from './_slider_presets_option/Slider_preset-slide-with-text'
import {PRESET_SLIDER_DEFAULT} from "slider_ui/_slider_presets_option/Slider_preset-default-slide";
import {SLIDER_PRESET_GRID_3_2} from "slider_ui/_slider_presets_option/Slider_preset-slide-grid-3-2";
import {SLIDER_PRESET_GRID_1_2} from "slider_ui/_slider_presets_option/Slider_preset-slide-grid-1-2";

import './Slider.ui.scss'
import '@splidejs/splide/css';

import './_slider_style/Slider.ui_slider_style_default.scss'
import './_slider_style/Slider.ui_style_pagination_default.scss'
import './_slider_style/Slider.ui_style_arrows_default.scss'
import './_slider_style/Slider.ui_style_center_focus.scss'

import slider__arrowIng from 'assets/images/Slider/arrow.svg'
import {SLIDER_PRESET_SLIDE_SOLO} from "slider_ui/_slider_presets_option/Slider_preset-slide-solo";


const SliderUi = ({ sliderOptionsPreset ,classNames, children }) => {

    const sliderOptions = () => {
        switch (sliderOptionsPreset) {
            case SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE:
            case SLIDER_DEFAULT_SLIDE:
                return PRESET_SLIDER_DEFAULT
            case SLIDER_SLIDE_LINK:
                return ''
            case SLIDER_GRID_3_2:
                return SLIDER_PRESET_GRID_3_2
            case SLIDER_GRID_1_2:
                return SLIDER_PRESET_GRID_1_2
            case SLIDER_SLIDE_WITH_TEXT:
                return PRESET_SLIDER_WITH_TEXT
            case SLIDER_SLIDE_SOLO:
                return SLIDER_PRESET_SLIDE_SOLO
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
            case SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE:
                return [
                    'slider-ui_slider_style-default',
                    'slider-ui_style_pagination_default',
                    'slider-ui_style_arrows_default',
                ]
            case SLIDER_GRID_3_2:
            case SLIDER_GRID_1_2:
            case SLIDER_SLIDE_SOLO:
                return [
                    'slider-ui_slider_style-default',
                    'slider-ui_style_pagination_default',
                    'slider-ui_style_arrows_default',
                ]
            default:
                return ['']
        }
    }
    const sliderExtensions = () => {
        switch (sliderOptionsPreset) {
            case SLIDER_SLIDE_WITH_TEXT:
                return { Grid, AutoScroll }
            case SLIDER_GRID_3_2:
            case SLIDER_GRID_1_2:
                return { Grid }
            default:
                return { }
        }
    }

    return (
        <div className={['slider-ui',
            classNames && classNames?.join(' '),
            sliderClasses()?.join(' ')
        ].join(' ')}>
            <Splide
                extensions={sliderExtensions()}
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