import React from 'react';

import ProjectsInfo__participationInProjects
    from "./__participationInProjects/ProjectsInfo__participationInProjects";
import ProjectsInfo__myWorks from "components/Pages/Member.page/&blocks/ProjectsInfo/__myWorks/ProjectsInfo__myWorks";

import './ProjectsInfo.scss'
import './_back/ProjectsInfo_back_gradient_purple.scss'
import './_back/ProjectsInfo_back_gradient_red.scss'

const ProjectsInfo = ({member}) => {
    return (
        <div className={'projects-info'}>
            <div className={
                [
                    'projects-info__container app-container',
                    'projects-info_back_gradient_purple',
                    'projects-info_back_gradient_red'
                ].join(' ')}>
                <ProjectsInfo__participationInProjects
                    projects={member.participated_in_projects}
                />
                <ProjectsInfo__myWorks
                    myWorks={member.my_works}
                />
            </div>
        </div>
    );
};

export default ProjectsInfo;