import React from 'react';

import SliderUi from "slider_ui/Slider.ui";
import {SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import './Project.page__screenshots.scss'

const ProjectPage__Screenshots = ({ project }) => {
    return (
        <div className={'project-page__other-screenshots'}>
            <div className={'project-page__other-screenshots-title'}>
                <h3> Снимки экрана </h3>
            </div>
            <div className={'project-page__other-screenshots-slider'}>
                <SliderUi
                    sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE}
                >
                    {
                        project.project_images.map(img =>
                            <SliderUi__defaultSlide key={img.id}>
                                <div className={'project-page__other-img'}
                                     style={{ backgroundImage:`url(${img.imgSrc})` }}
                                >
                                </div>
                            </SliderUi__defaultSlide>
                        )
                    }
                </SliderUi>
            </div>
        </div>
    );
};

export default ProjectPage__Screenshots;