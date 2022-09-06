import React, {useContext, useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";

import Projects__title from "components/Pages/Home.page/&blocks/Projects/__title/Projects__title";

import ProjectPhotoLink from "components/Pages/Home.page/&blocks/Projects/&blocks/ProjectPhotoLink/ProjectPhotoLink";

import PageLineUi from "ui/PageLine.ui/PageLine.ui";
import ButtonLinkUi from "ui/ButtonLink.ui/ButtonLink.ui";
import {PROJECTS_LINK} from "components/AppRouter/AppRouter.links";

import CITG_API from "src/API/CITG_API.controller";

import {AppContext} from "components/App/App";

import {goUp} from "utils/goUp";

import './Projects.scss'

import './_pos/Projects_pos_top_small_offset.scss'
import './_pos/Porjects_pos_top_left.scss'
import './_pos/Projects_pos_center_block.scss'

import './_back_purple_gradient/Projects_back_purple_gradient.scss'
import './_back_red_gradient/Projects_back_red_gradient.scss'

const Projects = () => {

    const appContext = useContext(AppContext)

    const [projects, setProjects] = useState([])

    useEffect(() => {
        (async () => {
            const data = await CITG_API.getProjects()
            setProjects(data)
        })()
    }, [])

    return (
        <div
            className={[
                'projects',
                appContext?.gradientSwitch &&
                (isSafari
                    ? [
                        'projects_back_red_gradient_safari',
                        'projects_back_purple_gradient_safari',
                        ''
                    ].join(' ')
                    : [
                        'projects_back_red_gradient',
                        'projects_back_purple_gradient',
                        ''
                    ].join(' ')),
                'projects_pos_center_block'
            ].join(' ')}>
            <div className={'projects__container app-container'}>
                <div className={'projects__title-container'}>
                    <PageLineUi pageNum={'02'}
                                classNames={['projects_pos_top_left']}/>
                    <Projects__title classNames={['']}/>
                </div>
                <div className={'projects__projects-box'}>
                    <div className={'projects__projects-container'}>
                        {
                            projects?.map(project =>
                                <ProjectPhotoLink
                                    key={project.id}
                                    imgSrc={project.preview_img}
                                    projectId={project.id}
                                />
                            )
                        }
                    </div>
                    <ButtonLinkUi
                        onClick={goUp}
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