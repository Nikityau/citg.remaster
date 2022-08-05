import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

import ProjectPage__Preview from "components/Pages/Project.page/__preview/Project.page__preview";
import ProjectPage__OtherInfo from "components/Pages/Project.page/__otherInfo/Project.page__otherInfo";

import CITG_APIController from "src/API/CITG_API.controller";

import {useToggler} from "components/Utils.Compoents/CustomHooks/useToggler";

import './Project.page.scss'

const ProjectPage = () => {
    const { projectId } = useParams()

    const [projectAPI, setProjectAPI] = useState([])
    const [is, setIs] = useToggler(true)

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getProjectById(projectId)
            setProjectAPI(response)
        })()
    }, [])

    return (
        <div className={'project-page'}>
            <ProjectPage__Preview
                project={projectAPI}
                open={setIs.on}
                close={setIs.off}
                isOpen={is}
            />
            <ProjectPage__OtherInfo
                project={projectAPI}
                isPreviewOpen={is}
            />
        </div>
    );
};

export default ProjectPage;