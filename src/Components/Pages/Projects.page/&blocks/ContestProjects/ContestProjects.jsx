import React from 'react';

import MiniArticleTitleUi from "ui/MiniArticleTitle.ui/MiniArticleTitle.ui";
import ProjectsPage__Project from "components/Pages/Projects.page/__project/Projects.page__project";

import './ContestProjects.scss'

const ContestProjects = ({ contestProjects }) => {
    return (
        <div className={'contests-projects'}>
            <div className={'contests-projects__container app-container'}>
                <div className={'contests-projects__title'}>
                    <MiniArticleTitleUi
                        number={'02'}
                        title={'Конкурсные работы'}
                    />
                </div>
                <div className={'contest-projects__projects-container'}>
                    {
                        contestProjects?.map(project =>
                            <ProjectsPage__Project
                                classNames={['contest-projects__project']}
                                key={project?.id || ''}
                                id={project?.id || ''}
                                imgSrc={project?.imgSrc || project.preview_img || ''}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ContestProjects;