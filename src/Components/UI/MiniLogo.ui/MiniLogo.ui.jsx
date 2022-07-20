import React from 'react';

import './MiniLogo.ui.scss'

import logo_img from 'src/assets/icons/favicon/logo.svg'

const MiniLogoUi = () => {
    return (
        <div className={'mini-logo-ui'}>
            <div className={'mini-logo-ui__img-container'}>
                <img className={'mini-logo-ui__img'} src={logo_img} alt={'logo'}/>
            </div>
            <div className={'mini-logo-ui__logo-title-container'}>
                <h2 className={'mini-logo-ui__title'}>CiTG</h2>
            </div>
        </div>
    );
};

export default MiniLogoUi;