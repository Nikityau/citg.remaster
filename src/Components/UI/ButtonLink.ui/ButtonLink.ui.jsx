import React from 'react';
import {Link} from "react-router-dom";

import './ButtonLink.ui.scss'

const ButtonLinkUi = ({ link, text ,classNames }) => {
    return (
        <div className={['button-link', classNames && classNames?.join(' ')].join(' ')}>
            <Link to={link}>
                <span> { text } </span>
            </Link>
        </div>
    );
};

export default ButtonLinkUi;