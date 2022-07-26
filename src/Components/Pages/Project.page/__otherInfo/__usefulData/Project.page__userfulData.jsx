import React from 'react';

import './Project.page__usefulData.scss'

const ProjectPage__UsefulData = ({ project }) => {
    return (
        <div className={'project-page__useful-data'}>
            <div className={'project-page__supported-devices'}>
                <div className={'project-page__supported-devices-title'}>
                    <h4> Поддерживаемые устройства: </h4>
                </div>
                <div className={'project-page__devices'}>
                    {
                        project.supported_devices.map(device => {

                        })
                    }
                </div>
            </div>
            <div className={'project-page__app-links'}>

            </div>
        </div>
    );
};

export default ProjectPage__UsefulData;