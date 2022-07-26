import React from 'react';

import Projects__title from "components/Pages/Home.page/&blocks/Projects/__title/Projects__title";

import ProjectPhotoLink from "components/Pages/Home.page/&blocks/Projects/&blocks/ProjectPhotoLink/ProjectPhotoLink";

import PageLineUi from "ui/PageLine.ui/PageLine.ui";

import {projects_photo_linkPreset} from './_projects_photo_link.preset/Projects_photo_link.preset'

import './Projects.scss'

import './_pos/Projects_pos_top_small_offset.scss'
import './_pos/Porjects_pos_top_left.scss'
import './_pos/Projects_pos_center_block.scss'

import './_back_purple_gradient/Projects_back_purple_gradient.scss'
import './_back_red_gradient/Projects_back_red_gradient.scss'
import ButtonLinkUi from "ui/ButtonLink.ui/ButtonLink.ui";
import {PROJECTS_LINK} from "components/AppRouter/AppRouter.links";

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
                    <ButtonLinkUi
                        link={PROJECTS_LINK}
                        text={'load more'}
                        classNames={['projects_pos_top_small_offset']}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;