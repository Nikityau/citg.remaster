import React from 'react';
import {Link} from "react-router-dom";

import {goUp} from "utils/goUp";

import './Navigation__link.scss'

const NavigationLink = ({link, textLink ,classNames, dataAttr }) => {
    return (
        <div className={['navigation__link',
            classNames && classNames?.join(' ')].join(' ')}
            data-navigation-link={dataAttr || ''}
             onClick={goUp}
        >
            <Link to={link}>
                <span className={'navigation__text'}>
                    { textLink }
                </span>
            </Link>
        </div>
    );
};

export default NavigationLink;