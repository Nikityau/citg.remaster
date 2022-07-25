import React from 'react';

import MiniArticleTitleUi from "ui/MiniArticleTitle.ui/MiniArticleTitle.ui";

import SliderUi from "slider_ui/Slider.ui";
import { SLIDER_GRID_3_2 } from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import ProjectsPage__Project from "components/Pages/Projects.page/__project/Projects.page__project";

import './ReadyMadeProjects.scss'

const ReadyMadeProjects = ({ readyMadeProjects }) => {
    return (
        <div className={'ready-made-projects'}>
            <div className={'ready-made-projects__title'}>
                <MiniArticleTitleUi
                    title={'Реализованые проекты'}
                    number={'01'}
                />
            </div>
            <div className={'ready-made-projects__projects-container'}>
                <SliderUi
                    sliderOptionsPreset={ SLIDER_GRID_3_2 }
                >
                    {
                        readyMadeProjects?.map(project =>
                            <SliderUi__defaultSlide key={project.id}>
                                <ProjectsPage__Project imgSrc={project.imgSrc}/>
                            </SliderUi__defaultSlide>
                        )
                    }
                </SliderUi>
            </div>
        </div>
    );
};

export default ReadyMadeProjects;