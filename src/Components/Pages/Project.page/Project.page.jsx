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
        const h2 = previewRef.current?.querySelector('.project-page__preview-title-mobile-h2')

        if(state === PRJ_PAGE_UI_STATE_OPEN) {
            otherRef.current.style.transform = 'translateY(100vh)'
            otherRef.current.style.padding = '50px 0 100px'
            h2.style.transform = 'unset';

            return
        }


        otherRef.current.style.transform = 'translateY(250px)'
        otherRef.current.style.padding = '0 0 100px'
        h2.style.transform = 'scale(.8) translate(14%)'
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