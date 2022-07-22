import React from 'react';

import Award from "components/Pages/Home.page/&blocks/Awards/&blocks/Award/Award";

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {SLIDER_DEFAULT_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";

import {awards_awardsPreset} from "./_awards.preset/Awards_awards.preset";

import './Awards.scss'

const Awards = () => {
    return (
        <div className={'awards'}>
            <div className={'awards__container app-container'}>
                <div className={'awards__title'}>
                    <h3> Награды </h3>
                </div>
                <div className={'awards__awards-box'}>
                    <SliderUi sliderOptionsPreset={SLIDER_DEFAULT_SLIDE}>
                        {
                            awards_awardsPreset.map(award =>
                               <SliderUi__defaultSlide key={award.id}>
                                   <Award
                                       imgSrc={award.imgSrc}
                                   />
                               </SliderUi__defaultSlide>
                            )
                        }
                    </SliderUi>
                </div>
            </div>
        </div>
    );
};

export default Awards;