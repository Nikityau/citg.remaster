import React from 'react';
import {Link} from "react-router-dom";

import {PROJECTS_LINK} from "components/AppRouter/AppRouter.links";

import './ButtonLink.scss'

const ButtonLink = ({ classNames }) => {
    return (
        <div className={['button-link', classNames && classNames?.join(' ')].join(' ')}>
            <Link to={PROJECTS_LINK}>
                <span> load more </span>
            </Link>
        </div>
    );
};

export default ButtonLink;