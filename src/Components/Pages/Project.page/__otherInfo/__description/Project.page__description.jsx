import React from 'react';

import './Project.page__description.scss'

const ProjectPage__Description = ({ project }) => {
    return (
        <div className={'project-page__other-description-part'}>
            <div className={'project-page__other-description-title'}>
                <h3> Описание </h3>
            </div>
            <div className={'project-page__other-description'}>
                <p>
                    { project?.description }
                </p>
            </div>
        </div>
    );
};

export default ProjectPage__Description;