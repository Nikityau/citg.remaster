import React from 'react';

import './InfoBar.scss'

const InfoBar = ({classNames}) => {
    return (
        <div className={['info-bar', classNames && classNames?.join(' ')].join(' ')}>
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
        </div>
    );
};

export default InfoBar;