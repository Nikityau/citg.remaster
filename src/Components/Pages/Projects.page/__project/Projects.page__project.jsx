import React from 'react';
import {Link} from "react-router-dom";

import {CURRENT_PROJECT_LINK} from "components/AppRouter/AppRouter.links";

import {transformDryIdLink} from "utils/transformDryIdLink";
import {goUp} from "utils/goUp";

import './Projects.page__project.scss'

const ProjectsPage__Project = ({ imgSrc, id, classNames }) => {
    return (
        <div className={['projects-page__project',
            classNames && classNames?.join(' ')
        ].join(' ')}
        style={{ backgroundImage: `url(${imgSrc})` }}
             onClick={goUp}
        >
            <Link to={transformDryIdLink(CURRENT_PROJECT_LINK, id)}>
            </Link>
        </div>
    );
};

export default ProjectsPage__Project;