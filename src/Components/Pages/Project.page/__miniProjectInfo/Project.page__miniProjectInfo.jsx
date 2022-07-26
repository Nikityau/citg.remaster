import React from 'react';

import './Project.page__miniProjectInfo.scss'

const ProjectPage__MiniProjectInfo = ({ project }) => {
    return (
        <div className={'project-page__mini-project-info'}>
            <div className={'project-page__mini-preview-img'}
                style={{
                    backgroundImage: `url(${project.preview_img})`
                }}
            >
            </div>
            <div className={'project-page__mini-addon-info'}>
                <div className={'project-page__mini-title'}>
                    <h2> { project.project_name } </h2>
                </div>
                <div className={'project-page__mini-description'}>
                    <p>
                        { project.description.substring(0, 250) }...
                    </p>
                </div>
                <div className={'project-page__mini-system-requirements'}>
                    <p> см.системные требования </p>
                </div>
                <div className={'project-page__mini-button'}>
                    <a href={'#project-more-info'}>
                        <span> show more </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage__MiniProjectInfo;