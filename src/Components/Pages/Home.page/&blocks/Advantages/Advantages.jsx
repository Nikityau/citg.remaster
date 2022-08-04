import React from 'react';

import Advantages__text from "components/Pages/Home.page/&blocks/Advantages/__text/Advantages__text";

import SliderUi from "slider_ui/Slider.ui";
import SlideUi__SlideWithText from "slider_ui/__slide-with-text/Slide.ui__slide-with-text";
import {SLIDER_SLIDE_SOLO, SLIDER_SLIDE_WITH_TEXT} from 'slider_ui/_slider_presets_option/Slider_presets'

import img_1 from 'assets/images/Slider/_1.png'
import img_2 from 'assets/images/Slider/_2.png'
import img_3 from 'assets/images/Slider/_3.png'

import './Advantages.scss'
import './_background_gradient_red/Advantages_background_gradient_red.scss'

const Advantages = () => {
    return (
        <div id={'advantages-anchor'} className={'advantages advantages_background_gradient_red'}>
            <div className={'advantages__container app-container'}>
                <div className={'advantages__text-side'}>
                    <Advantages__text/>
                </div>
                <div className={'advantages__slider-side'}>
                    <SliderUi sliderOptionsPreset={ SLIDER_SLIDE_WITH_TEXT }>
                        <SlideUi__SlideWithText imgSrc={img_1} text={'Создавай мечту'}/>
                        <SlideUi__SlideWithText imgSrc={img_2} text={'Развивайся'}/>
                        <SlideUi__SlideWithText imgSrc={img_3} text={'Твори'}/>
                    </SliderUi>
                </div>
                <div className={'advantages__slider-side_mobile'}>
                    <SliderUi sliderOptionsPreset={ SLIDER_SLIDE_SOLO }>
                        <SlideUi__SlideWithText imgSrc={img_1} text={'Создавай мечту'}/>
                        <SlideUi__SlideWithText imgSrc={img_2} text={'Развивайся'}/>
                        <SlideUi__SlideWithText imgSrc={img_3} text={'Твори'}/>
                    </SliderUi>
                </div>
            </div>
        </div>
    );
};

export default Advantages;