import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

import ProjectPage__Preview from "components/Pages/Project.page/__preview/Project.page__preview";
import ProjectPage__OtherInfo from "components/Pages/Project.page/__otherInfo/Project.page__otherInfo";

import './Project.page.scss'
import CITG_APIController from "src/API/CITG_API.controller";

const ProjectPage = () => {
    const { projectId } = useParams()

    const [projectAPI, setProjectAPI] = useState([])

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getProjectById(projectId)
            setProjectAPI(response)
        })()
    }, [])

    return (
        <div className={'project-page'}>
            <ProjectPage__Preview project={projectAPI}/>
            <ProjectPage__OtherInfo project={projectAPI}/>
        </div>
    );
};

export default ProjectPage;