import React from 'react';
import {Link} from "react-router-dom";

import SliderUi from "slider_ui/Slider.ui";
import {SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import {CURRENT_PROJECT_LINK} from "components/AppRouter/AppRouter.links";

import {transformDryIdLink} from "utils/transformDryIdLink";
import {goUp} from "utils/goUp";

import './ProjectsInfo__participationInProjects.scss'
import './_back_black/ProjectsInfo_back_black.scss'

const ProjectsInfo__participationInProjects = ({ projects }) => {
    return (
        <div className={'projects-info__participation-in-projects'}>
            <div className={'projects-info__participation-in-projects-title'}>
                <h3> Участие в проектах </h3>
            </div>
            <div className={'projects-info__participation-in-projects-container'}>
                {
                    projects && projects?.length !== 0 &&
                    <SliderUi
                        classNames={['projects-info_back_black']}
                        sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE}
                    >
                        {
                            projects?.map(project =>
                                <SliderUi__defaultSlide
                                    key={project.id}
                                >
                                    <div className={'projects-info__project'}
                                         style={{
                                             backgroundImage: `url(${project?.project_img})`
                                         }}
                                         onClick={goUp}
                                    >
                                        <Link to={transformDryIdLink(CURRENT_PROJECT_LINK, project?.id)}>

                                        </Link>
                                    </div>
                                </SliderUi__defaultSlide>
                            )
                        }
                    </SliderUi>
                }
            </div>
        </div>
    );
};

export default ProjectsInfo__participationInProjects;