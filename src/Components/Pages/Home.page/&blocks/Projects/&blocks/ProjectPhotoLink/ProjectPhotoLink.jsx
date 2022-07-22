import React from 'react';
import { Link } from 'react-router-dom'

import {CURRENT_PROJECT_LINK} from "components/AppRouter/AppRouter.links";

import {transformDryIdLink} from "src/Utils/transformDryIdLink";

import './ProjectPhotoLink.scss'

const ProjectPhotoLink = ({ imgSrc, projectId ,classNames }) => {
    return (
        <div className={['project-photo-link',
            classNames && classNames?.join(' ')].join(' ')}
            style={{ backgroundImage: `url(${imgSrc})` }}
        >
            <Link to={transformDryIdLink(CURRENT_PROJECT_LINK, projectId)}>
            </Link>
        </div>
    );
};

export default ProjectPhotoLink;