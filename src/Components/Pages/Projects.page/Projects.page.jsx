import React, {useEffect, useState} from 'react';

import ReadyMadeProjects from "components/Pages/Projects.page/&blocks/ReadyMadeProjects/ReadyMadeProjects";
import ContestProjects from "components/Pages/Projects.page/&blocks/ContestProjects/ContestProjects";
import ProjectsInDev from "components/Pages/Projects.page/&blocks/ProjectsInDev/ProjectsInDev";

import CITG_APIController from "src/API/CITG_API.controller";
import {PROJECT_TYPE_CONTEST, PROJECT_TYPE_IN_DEVELOPING, PROJECT_TYPE_READY_MADE} from "src/Mirage/project/projects";

import './Projects.page.scss'
import './_border_radius/Projects.page_borderRadius.scss'

const ProjectsPage = () => {
    const [projectsAPI, setProjectsAPI] = useState([])

    const getReadyMadeProjects = (projects) => {
        return projects?.filter(project => project.project_type === PROJECT_TYPE_READY_MADE)
    }
    const getContestProjects = (projects) => {
        return projects?.filter(project => project.project_type === PROJECT_TYPE_CONTEST)
    }
    const getInDevelopingProjects = (projects) => {
        return projects?.filter(project => project.project_type === PROJECT_TYPE_IN_DEVELOPING)
    }

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getProjects()
            setProjectsAPI(response)
        })()
    }, [])

    return (
        <div className={'projects-page'}>
            <div className={'projects-page__container app-container'}>
                <ReadyMadeProjects
                    readyMadeProjects={getReadyMadeProjects(projectsAPI)}/>
                <ContestProjects
                    contestProjects={getContestProjects(projectsAPI)}
                />
                <ProjectsInDev
                    projectsInDev={getInDevelopingProjects(projectsAPI)}
                />
            </div>
        </div>
    );
};

export default ProjectsPage;