import React, {useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router-dom'

import ProjectPage__Preview from "components/Pages/Project.page/__preview/Project.page__preview";
import ProjectPage__OtherInfo from "components/Pages/Project.page/__otherInfo/Project.page__otherInfo";

import CITG_APIController from "src/API/CITG_API.controller";

import {useToggler} from "components/Utils.Compoents/CustomHooks/useToggler";

import './Project.page.scss'

export const PRJ_PAGE_UI_STATE_OPEN = 'open'
export const PRJ_PAGE_UI_STATE_CLOSE = 'close'

const ProjectPage = () => {
    const { projectId } = useParams()

    const [projectAPI, setProjectAPI] = useState([])

    const previewRef = useRef()
    const otherRef = useRef()

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getProjectById(projectId)
            setProjectAPI(response)
        })()
    }, [])


    const changeUI = (state) => {
        if(state === PRJ_PAGE_UI_STATE_OPEN) {
            /*otherRef.current?.classList.add('project-page__other-info_preview_open')
            otherRef.current?.classList.remove('project-page__other-info_preview_close')*/

            otherRef.current.style.transform = 'translateY(100vh)'

            return
        }


        otherRef.current.style.transform = 'translateY(200px)'

       /* otherRef.current?.classList.remove('project-page__other-info_preview_open')
        otherRef.current?.classList.add('project-page__other-info_preview_close')*/
    }

    return (
        <div className={'project-page'}>
            <ProjectPage__Preview
                project={projectAPI}
                callback={changeUI}
                ref={previewRef}
            />
            <ProjectPage__OtherInfo
                project={projectAPI}
                ref={otherRef}
            />
        </div>
    );
};

export default ProjectPage;