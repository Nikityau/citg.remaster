import React from 'react';

import './LogoPlanet__mainCircle.scss'

import logo_img from 'assets/icons/LogoPlanet/big_logo.png'

const LogoPlanet__MainCircle = ({ dataAttr, classNames }) => {
    return (
        <div className={['logo-planet__main-circle',
            classNames && classNames?.join(' ')].join(' ')}
            data-logo-main-planet={dataAttr || ''}
        >
            <div className={'logo-planet__main-circle-img'}>
                <img src={logo_img} alt={'logo-planet-img'}/>
            </div>
        </div>
    );
};

export default LogoPlanet__MainCircle;