import React from 'react';

import './InfoBar.scss'
import './_border_gradient/InfoBar_border_gradient.scss'

const InfoBar = ({classNames}) => {
    return (
        <div className={['info-bar', 'info-bar_border_gradient', classNames && classNames?.join(' ')].join(' ')}>
            <a href={'#advantages-anchor'}>
                <div className={'info-bar__container'}>
                    <div className={'info-bar__upper-info'}>
                        <p>
                            Центр IT-Притяжения - это целая экосистема для реализации себя в сфере IT
                        </p>
                    </div>
                    <div className={'info-bar__below-info'}>
                        <p>
                            Это площадка, где школьники и студенты могут пройти весь путь становления “айтишника” от нуля до
                            Pro.
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default InfoBar;