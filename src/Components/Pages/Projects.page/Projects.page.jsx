import React, {useState} from 'react';

import ReadyMadeProjects from "components/Pages/Projects.page/&blocks/ReadyMadeProjects/ReadyMadeProjects";
import ContestProjects from "components/Pages/Projects.page/&blocks/ContestProjects/ContestProjects";
import ProjectsInDev from "components/Pages/Projects.page/&blocks/ProjectsInDev/ProjectsInDev";

import { projectsPage_projectsPreset } from './_projects.preset/Projects.page_projects.preset'

import './Projects.page.scss'

const ProjectsPage = () => {

    const [projects, setProjects] = useState(projectsPage_projectsPreset)

    return (
        <div className={'projects-page'}>
            <div className={'projects-page__container app-container'}>
                <ReadyMadeProjects
                    readyMadeProjects={projects.ready_made_projects}/>
                <ContestProjects
                    contestProjects={projects.contest_projects}
                />
                <ProjectsInDev
                    projectsInDev={projects.projects_in_dev}
                />
            </div>
        </div>
    );
};

export default ProjectsPage;