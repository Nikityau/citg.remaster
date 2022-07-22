import React from 'react';
import {Link} from "react-router-dom";

import {HOME_LINK} from "components/AppRouter/AppRouter.links";

import './MiniLogo.ui.scss'

import logo_img from 'src/assets/icons/favicon/logo.svg'

const MiniLogoUi = ({ classNames }) => {
    return (
        <div className={['mini-logo-ui', classNames && classNames?.join(' ')].join(' ')}>
            <Link to={HOME_LINK}>
                <div className={'mini-logo-ui__img-container'}>
                    <img className={'mini-logo-ui__img'} src={logo_img} alt={'logo'}/>
                </div>
                <div className={'mini-logo-ui__logo-title-container'}>
                    <h2 className={'mini-logo-ui__title'}>CiTG</h2>
                </div>
            </Link>
        </div>
    );
};

export default MiniLogoUi;