import React from 'react';

import './Project.page__usefulData.scss'
import SupportedDevice from "components/Pages/Project.page/&blocks/SupportedDevice/SupportedDevice";

const ProjectPage__UsefulData = ({ project }) => {
    return (
        <div className={'project-page__useful-data'}>
            <div className={'project-page__supported-devices'}>
                <div className={'project-page__supported-devices-title'}>
                    <h4> Поддерживаемые устройства: </h4>
                </div>
                <div className={'project-page__devices'}>
                    {
                        project.supported_devices.map(device =>
                          <SupportedDevice
                            key={device.id}
                            deviceImg={device.device_icon}
                            deviceName={device.device_name}
                            deviceVersion={device.device_version}
                          />
                        )
                    }
                </div>
            </div>
            <div className={'project-page__app-links'}>
                <div className={'project-page__app-links-title'}>
                    <h4> ссылки на проект: </h4>
                </div>
                <div className={'project-page__app-links-container'}>
                    {
                        project.links_on_projects.map(link =>
                            <div className={'project-page__app-link'}
                                key={link.id}
                            >
                                <a href={link.link}>
                                    <img src={link.image_link} alt={'icon'}/>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectPage__UsefulData;