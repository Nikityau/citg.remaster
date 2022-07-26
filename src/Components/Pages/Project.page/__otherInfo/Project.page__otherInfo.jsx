import React from 'react';

import ProjectPage__Description
    from "components/Pages/Project.page/__otherInfo/__description/Project.page__description";
import ProjectPage__Screenshots
    from "components/Pages/Project.page/__otherInfo/__screenshots/Project.page__screenshots";
import ProjectPage__UsefulData from
        "components/Pages/Project.page/__otherInfo/__usefulData/Project.page__userfulData";

import './Project.page__otherInfo.scss'

const ProjectPage__OtherInfo = ({ project }) => {
    return (
        <div className={'project-page__other-info'} id={'project-more-info'}>
            <div className={'project-page__other-container app-container'}>
                <ProjectPage__Description project={project}/>
                <ProjectPage__Screenshots project={project}/>
                <ProjectPage__UsefulData project={project}/>
            </div>
        </div>
    );
};

export default ProjectPage__OtherInfo;