import React from 'react';

import Projects__title from "components/Pages/Home.page/&blocks/Projects/__title/Projects__title";

import ButtonLink from "components/Pages/Home.page/&blocks/Projects/&blocks/ButtonLink/ButtonLink";
import ProjectPhotoLink from "components/Pages/Home.page/&blocks/Projects/&blocks/ProjectPhotoLink/ProjectPhotoLink";

import PageLineUi from "ui/PageLine.ui/PageLine.ui";

import { projects_photo_linkPreset } from './_projects_photo_link.preset/Projects_photo_link.preset'

import './Projects.scss'

import './_pos/Projects_pos_top_small_offset.scss'
import './_pos/Porjects_pos_top_left.scss'
import './_pos/Projects_pos_center_block.scss'

import './_back_purple_gradient/Projects_back_purple_gradient.scss'
import './_back_red_gradient/Projects_back_red_gradient.scss'

const Projects = () => {
    return (
        <div className={'projects ' +
            'projects_back_red_gradient ' +
            'projects_back_purple_gradient ' +
            'projects_pos_center_block'}>
            <div className={'projects__container app-container'}>
                <div className={'projects__title-container'}>
                    <PageLineUi pageNum={'02'}
                                classNames={['projects_pos_top_left']}/>
                    <Projects__title classNames={['']}/>
                </div>
                <div className={'projects__projects-box'}>
                    <div className={'projects__projects-container'}>
                        {
                            projects_photo_linkPreset.map(prj =>
                                <ProjectPhotoLink
                                    key={prj.id}
                                    imgSrc={prj.imgSrc}
                                    projectId={prj.id}
                                />
                            )
                        }
                    </div>
                    <ButtonLink classNames={['projects_pos_top_small_offset']}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;