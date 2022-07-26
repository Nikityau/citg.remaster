import React, {useState} from 'react';
import { useParams } from 'react-router-dom'

import ProjectPage__Preview from "components/Pages/Project.page/__preview/Project.page__preview";
import ProjectPage__OtherInfo from "components/Pages/Project.page/__otherInfo/Project.page__otherInfo";

import { projectPage_projectPreset } from './_project.preset/Project.page_project.preset'

import './Project.page.scss'

const ProjectPage = () => {
    const { projectId } = useParams()

    const [project,setProject] = useState(projectPage_projectPreset)

    return (
        <div className={'project-page'}>
            <ProjectPage__Preview project={project}/>
            <ProjectPage__OtherInfo project={project}/>
        </div>
    );
};

export default ProjectPage;