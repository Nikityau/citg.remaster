import React from 'react';

import ProjectPage__Description
    from "components/Pages/Project.page/__otherInfo/__description/Project.page__description";
import ProjectPage__Screenshots
    from "components/Pages/Project.page/__otherInfo/__screenshots/Project.page__screenshots";
import ProjectPage__UsefulData from
        "components/Pages/Project.page/__otherInfo/__usefulData/Project.page__userfulData";

import './Project.page__otherInfo.scss'
import './_back_gradient/Project.page_back_gradient_purple.scss'
import './_back_gradient/Projec.page_back_gradient_orange.scss'
import './_preview_close/Project.page__otherInfo_preview_close.scss'

const ProjectPage__OtherInfo = ({ project, isPreviewOpen }) => {
    return (
        <div className={
            [
                'project-page__other-info',
                'project-page_back_gradient_purple',
                'project-page_back_gradient_orange',
                isPreviewOpen
                    ? 'project-page__other-info_preview_open'
                    : 'project-page__other-info_preview_close'
            ].join(' ')}
             id={'project-more-info'}>
            <div className={'project-page__other-container app-container'}>
                <div className={'project-page__spec-container'}>
                    <ProjectPage__Description project={project}/>
                    <ProjectPage__Screenshots project={project}/>
                </div>
                <ProjectPage__UsefulData project={project}/>
            </div>
        </div>
    );
};

export default ProjectPage__OtherInfo;