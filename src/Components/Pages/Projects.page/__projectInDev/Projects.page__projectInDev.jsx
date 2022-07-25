import React from 'react';

import './Projects.page__projectInDev.scss'
import {Link} from "react-router-dom";
import {transformDryIdLink} from "utils/transformDryIdLink";
import {CURRENT_PROJECT_LINK} from "components/AppRouter/AppRouter.links";

const ProjectsPage__ProjectInDev = ({ id, title, description, imgSrc, classNames }) => {
    return (
        <div className={['projects-page__projectInDev',
            classNames && classNames?.join(' ')
        ].join(' ')}>
           <Link to={transformDryIdLink(CURRENT_PROJECT_LINK, id)}>
               <div className={'projects-page__projectInDev-info'}>
                   <div className={'projects-page__projectInDev-title'}>
                       <h3> { title } </h3>
                   </div>
                   <div className={'projects-page__projectInDev-description'}>
                       <p> { description } </p>
                   </div>
               </div>
               <div className={'projects-page__projectInDev-img'}>
                   <img src={imgSrc} alt={'project-in-dev-img'}/>
               </div>
           </Link>
        </div>
    );
};

export default ProjectsPage__ProjectInDev;