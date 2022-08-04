import React from 'react';

import ProjectsPage__Project from "components/Pages/Projects.page/__project/Projects.page__project";

import SliderUi from "slider_ui/Slider.ui";
import {SLIDER_GRID_2_2, SLIDER_GRID_3_2} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import BackgroundPartyUi from "ui/BackgroundParty.ui/BackgroundParty.ui";

import MiniArticleTitleUi from "ui/MiniArticleTitle.ui/MiniArticleTitle.ui";

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
                <BackgroundPartyUi classNames={['projects-page_border_radius']}/>
               <div className={'ready-made-projects_desktop slider-grid-3-2'}>
                   {
                       readyMadeProjects && readyMadeProjects?.length !== 0 &&
                       <SliderUi
                           sliderOptionsPreset={ SLIDER_GRID_3_2 }
                       >
                           {
                               readyMadeProjects?.map(project =>
                                   <SliderUi__defaultSlide key={project?.id || ''}>
                                       <ProjectsPage__Project imgSrc={project?.imgSrc || project?.preview_img || ''} id={project?.id || ''}/>
                                   </SliderUi__defaultSlide>
                               )
                           }
                       </SliderUi>
                   }
               </div>
                <div className={'ready-made-projects_mobile slider-grid-2-2'}>
                    {
                        readyMadeProjects && readyMadeProjects?.length !== 0 &&
                        <SliderUi
                            sliderOptionsPreset={ SLIDER_GRID_2_2 }
                        >
                            {
                                readyMadeProjects?.map(project =>
                                    <SliderUi__defaultSlide key={project?.id || ''}>
                                        <ProjectsPage__Project imgSrc={project?.imgSrc || project?.preview_img || ''} id={project?.id || ''}/>
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

export default ReadyMadeProjects;