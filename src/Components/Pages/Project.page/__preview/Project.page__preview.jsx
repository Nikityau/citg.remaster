import React, {useEffect, forwardRef} from 'react';

import {isSafari} from "react-device-detect";

import {whatRender} from "components/Utils.Compoents/whatRender";

import ProjectPage__MiniProjectInfo
    from "components/Pages/Project.page/__miniProjectInfo/Project.page__miniProjectInfo";

import ProjectPage_Back_Blur from "components/Pages/Project.page/__preview/_back_blur/Project.page_back_blur";

import ProjectPagePreviewBackBottomMobileGradient
    from "components/Pages/Project.page/__preview/_back_bottom_mobile_gradient/Project.page__preview_back_bottom_mobile_gradient";

import {PRJ_PAGE_UI_STATE_CLOSE, PRJ_PAGE_UI_STATE_OPEN} from "components/Pages/Project.page/Project.page";

import {prevEv} from "utils/prevEv";

//import './Project.page__preview.scss'

import './@desktop/Project.page__preview@desktop.scss'
import './@tablet/Project.page__preview@tablet.scss'
import './@mobile/Project.page__preview@mobile.scss'
import './_back_gradient/Project.page_back_gradient.scss'
import './_back_gradient/Project.page_back_gradient_blue.scss'
import './_close/Project.page__preview_close.scss'


let startY = 0;

// : 'project-page__preview_close'

const ProjectPage__Preview = forwardRef(({project, callback}, ref) => {

    const tablet = <ProjectPage__MiniProjectInfo project={project}/>
    const mobile =  <>
        <ProjectPagePreviewBackBottomMobileGradient/>
        <div className={'project-page__preview_mobile'}>
            <div className={'project-page__preview-container'}>
                <div className={'project-page__preview-title'}>
                    <h2 className={'project-page__preview-title-mobile-h2'}> {project?.name} </h2>
                </div>
                <div className={'project-page__preview-description'}>
                    <p>
                        {project?.description}
                    </p>
                </div>
            </div>
        </div>
    </>

    const desktop = <>
        { tablet }
        { mobile }
    </>

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

        const { body } = document;
        body.style.height = '100vh'
        body.style.overflow = 'hidden'
    }
    const allowTouch = () => {
        const { body } = document
        body.style.height = 'auto'
        body.style.overflow = 'unset'

        window.removeEventListener('touchmove', prevEv)
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
            callback(PRJ_PAGE_UI_STATE_CLOSE)
            setTimeout(() => {
                allowTouch()
            }, 300)

            return
        }

        stopTouch()
        callback(PRJ_PAGE_UI_STATE_OPEN)
    }

    const onTouchEnd = () => {
    }

    return (
        <div
            className={[
                'project-page__preview',
                isSafari
                    ? [
                        'project-page_back_gradient_pink_safari',
                        'project-page_back_gradient_blue_safari',
                    ].join(' ')
                    :  [
                        'project-page_back_gradient_pink',
                        'project-page_back_gradient_blue',
                    ].join(' '),
                    'project-page__preview_open'

            ].join(' ')}
            style={{
                backgroundImage: `url(${project?.project_addition_preview_img})`,
                color: '#fff',
            }}
            ref={ref}

            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <ProjectPage_Back_Blur/>
            {
                whatRender(desktop, tablet, mobile)
            }
        </div>
    );
});

export default ProjectPage__Preview;