import React from 'react';

import ProjectPage_Back_Blur from "components/Pages/Project.page/__preview/_back_blur/Project.page_back_blur";

import ProjectPage__MiniProjectInfo
    from "components/Pages/Project.page/__miniProjectInfo/Project.page__miniProjectInfo";

import './Project.page__preview.scss'
import './_back_gradient/Project.page_back_gradient.scss'
import './_back_gradient/Project.page_back_gradient_blue.scss'

const ProjectPage__Preview = ({project}) => {

    return (
        <div
            className={[
                'project-page__preview',
                'project-page_back_gradient_pink',
                'project-page_back_gradient_blue'
            ].join(' ')}
            style={{
                backgroundImage: `url(${project?.project_addition_preview_img})`,
                color: '#fff',
            }}
        >
            <ProjectPage_Back_Blur/>
            <ProjectPage__MiniProjectInfo project={ project }/>
        </div>
    );
};

export default ProjectPage__Preview;