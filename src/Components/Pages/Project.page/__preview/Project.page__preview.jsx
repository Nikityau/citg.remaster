import React, {useEffect} from 'react';

import {useToggler} from "components/Utils.Compoents/CustomHooks/useToggler";

import ProjectPage__MiniProjectInfo
    from "components/Pages/Project.page/__miniProjectInfo/Project.page__miniProjectInfo";

import ProjectPage_Back_Blur from "components/Pages/Project.page/__preview/_back_blur/Project.page_back_blur";

import {prevEv} from "utils/prevEv";

import './Project.page__preview.scss'
import './_back_gradient/Project.page_back_gradient.scss'
import './_back_gradient/Project.page_back_gradient_blue.scss'
import './_close/Project.page__preview_close.scss'
import ProjectPagePreviewBackBottomMobileGradient
    from "components/Pages/Project.page/__preview/_back_bottom_mobile_gradient/Project.page__preview_back_bottom_mobile_gradient";

let startY = 0;

const ProjectPage__Preview = ({project, isOpen, close, open}) => {

    useEffect(() => {
        if (window.screen.width <= 500) {
            stopTouch()
        }

        return () => {
            allowTouch()
        }
    }, [])


    const stopTouch = () => {
        window.addEventListener('touchmove', prevEv, {passive: false})
    }
    const allowTouch = () => {
        window.removeEventListener('touchmove', prevEv,)
    }

    const onTouchStart = (e) => {
        startY = e.touches[0].clientY;
    }
    const onTouchMove = (e) => {
        const touchList = e.touches;

        const endY = touchList[touchList.length - 1].clientY;

        return window.screen.width <= 500 &&
            Math.abs(startY - endY) > 30 &&
            checkDirection(endY)
    }
    const checkDirection = (endY) => {
        if (startY > endY) {
           close()
            setTimeout(() => {
                allowTouch()
            }, 200)

            return
        }

        stopTouch()
       open()
    }

    const onTouchEnd = () => {

    }

    return (
        <div
            className={[
                'project-page__preview',
                'project-page_back_gradient_pink',
                'project-page_back_gradient_blue',
                isOpen ? 'project-page__preview_open'
                    : 'project-page__preview_close'
            ].join(' ')}
            style={{
                backgroundImage: `url(${project?.project_addition_preview_img})`,
                color: '#fff',
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <ProjectPage_Back_Blur/>
            <ProjectPagePreviewBackBottomMobileGradient/>
            <ProjectPage__MiniProjectInfo project={project}/>
            <div className={'project-page__preview_mobile'}>
                <div className={'project-page__preview-container'}>
                    <div className={'project-page__preview-title'}>
                        <h2> {project?.name} </h2>
                    </div>
                    <div className={'project-page__preview-description'}>
                        <p>
                            {project?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage__Preview;