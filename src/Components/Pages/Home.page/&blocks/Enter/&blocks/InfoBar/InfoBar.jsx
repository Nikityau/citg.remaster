import React from 'react';
import {isSafari} from "react-device-detect";

import './InfoBar.scss'
import './_border_gradient/InfoBar_border_gradient.scss'

import futuristic_arrow from 'assets/icons/futuristic-arrow.svg'

const InfoBar = ({classNames}) => {
    return (
        <div
            className={[
                'info-bar',
                isSafari
                    ? 'info-bar_border_gradient_safari'
                    : 'info-bar_border_gradient',
                classNames && classNames?.join(' ')
            ].join(' ')}>
            <a href={'#advantages-anchor'}>
                <div className={'info-bar__container'}>
                    <div className={'info-bar__upper-info'}>
                        <p>
                            Центр IT-Притяжения - это целая экосистема для реализации себя в сфере IT
                        </p>
                    </div>
                    <div className={'info-bar__below-info'}>
                        <p>
                            Это площадка, где школьники и студенты могут пройти весь путь становления “айтишника” от
                            нуля до
                            Pro.
                        </p>
                    </div>
                    <div className={'info-bar__arrow-down_mobile'}>
                        <img src={futuristic_arrow} alt={'icon'}/>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default InfoBar;