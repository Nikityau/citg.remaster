import React from 'react';

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {
    SLIDER_GRID_1_2,
} from "slider_ui/_slider_presets_option/Slider_presets";

import './Member.page@mobile__skills.scss'

const MemberPageMobile__Skills = ({ skills, certificates }) => {
    return (
        <div className={'membile__skills-window'}>
            <div className={'membile__hard-skills'}>
                {
                    skills?.map(skill =>
                        <div className={'membile__hard-skill'}
                            key={skill?.id}
                        >
                            <span> { skill?.skill_name } </span>
                        </div>
                    )
                }
            </div>
            <div className={'membile__certificates-container'}>
                <div className={'membile__certificates-title'}>
                    <h3> Достижения и награды </h3>
                </div>
                <div className={'membile__certificates'}>
                    {
                        certificates && certificates?.length !== 0 &&
                        <SliderUi
                            classNames={[
                                'membile__certificates-splide',
                                'membile__certificates-splide_back_blackout',
                                'membile__certificates-splide_border-radius'
                            ]}
                            sliderOptionsPreset={SLIDER_GRID_1_2}
                        >
                            {
                                certificates?.map(cert =>
                                    <SliderUi__defaultSlide key={cert?.id}>
                                        <div className={'membile__certificate'}
                                            style={{
                                                backgroundImage: `url(${cert?.certificate})`
                                            }}
                                        >
                                        </div>
                                    </SliderUi__defaultSlide>
                                )
                            }
                        </SliderUi>
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile__Skills;