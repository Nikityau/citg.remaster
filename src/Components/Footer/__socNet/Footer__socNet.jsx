import React from 'react';

import './Footer__socNet.scss'

const Footer__SocNet = ({ link, imgSrc,classNames }) => {
    return (
        <div className={['footer__soc-net',
            classNames
        ].join(' ')}>
            <a href={link}>
                <img src={imgSrc} alt={'soc-net-img'}/>
            </a>
        </div>
    );
};

export default Footer__SocNet;