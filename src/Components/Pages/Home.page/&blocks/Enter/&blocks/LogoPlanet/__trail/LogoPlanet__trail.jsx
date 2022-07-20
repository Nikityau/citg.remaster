import React from 'react';

import './LogoPlanet__trail.scss'

const LogoPlanet__Trail = ({ dataAttr,classNames }) => {
    return (
        <div className={['logo-planet__trail',
            classNames && classNames?.join(' ')].join(' ')}
            data-planet-trail={dataAttr || ''}
        >
            
        </div>
    );
};

export default LogoPlanet__Trail;