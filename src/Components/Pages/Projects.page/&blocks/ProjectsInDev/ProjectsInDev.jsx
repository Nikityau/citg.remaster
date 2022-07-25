import React from 'react';

import MiniArticleTitleUi from "ui/MiniArticleTitle.ui/MiniArticleTitle.ui";
import ProjectsPage__ProjectInDev from "components/Pages/Projects.page/__projectInDev/Projects.page__projectInDev";

import './ProjectsInDev.scss'


const ProjectsInDev = ({ projectsInDev }) => {
    return (
        <div className={'projects-in-dev'}>
            <div className={'projects-in-dev__container app-container'}>
                <div className={'projects-in-dev__title'}>
                    <MiniArticleTitleUi
                        number={'03'}
                        title={'Проекты в разработке'}
                    />
                </div>
                <div className={'projects-in-dev__projects-container'}>
                    {
                        projectsInDev?.map(project =>
                            <ProjectsPage__ProjectInDev
                                key={project.id}
                                id={project.id}
                                classNames={['projects-in-dev__project']}
                                title={project.title}
                                description={project.description}
                                imgSrc={project.imgSrc}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectsInDev;