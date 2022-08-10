import React from 'react';
import {isSafari} from "react-device-detect";

import Enter__title from "components/Pages/Home.page/&blocks/Enter/__title/Enter__title";

import LogoPlanet from "components/Pages/Home.page/&blocks/Enter/&blocks/LogoPlanet/LogoPlanet";
import InfoBar from "components/Pages/Home.page/&blocks/Enter/&blocks/InfoBar/InfoBar";

import PageLineUi from "ui/PageLine.ui/PageLine.ui";

import './Enter.scss'
import './_back_gradient/Enter_back_gradient.scss'
import './_back_noise/Enter_back_noise.scss'
import './_el_offset_top/Enter_el_offset_top.scss'
import './_el_offset_right_top/Enter_el_offset_right_top.scss'

import noise_img from 'assets/images/noise.png'

const Enter = () => {
    return (
        <div
            className={[
                'enter',
                isSafari
                    ? 'enter_back_gradient_safari'
                    : 'enter_back_gradient'
            ].join(' ')}>
            <div className={'enter_back_noise'}>
                <img src={noise_img} alt={'noise'}/>
            </div>
            <div className={'enter-container app-container'}>
                <Enter__title classNames={['enter_el_offset_top']}/>
                <PageLineUi pageNum={'01'}
                            classNames={['enter__page-number']}/>
                <InfoBar classNames={['enter__page-info-bar']}/>
            </div>
            <LogoPlanet classNames={[
                'enter__logo-planet',
                'enter_el_offset_right'
            ]}/>
        </div>
    );
};

export default Enter;