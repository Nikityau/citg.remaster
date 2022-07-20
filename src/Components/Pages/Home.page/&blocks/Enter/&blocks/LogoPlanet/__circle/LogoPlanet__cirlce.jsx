import React from 'react';

import './LogoPlanet__circle.scss'

const LogoPlanet__Circle = ({ dataAttr, classNames }) => {
    return (
        <div className={['logo-planet__circle',
            classNames && classNames?.join(' ')].join(' ')}
            data-logo-planet={dataAttr || ''}
        >

        </div>
    );
};

export default LogoPlanet__Circle;