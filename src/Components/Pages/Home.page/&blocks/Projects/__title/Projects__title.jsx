import React from 'react';

import './Projects__title.scss'

const ProjectsTitle = ({ classNames }) => {
    return (
        <div className={['projects__title', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'projects__title-main'}>
                <h3> У нас есть разные проекты </h3>
            </div>
            <div className={'projects__subtitle'}>
                <h5>
                    от Казуальных игр до настоящего искуственного интелекта
                </h5>
            </div>
        </div>
    );
};

export default ProjectsTitle;