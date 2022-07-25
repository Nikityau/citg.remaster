import React from 'react';

import Footer__SocNet from "components/Footer/__socNet/Footer__socNet";

import { Footer_soc_netsPreset } from '../_soc_nets.preset/Footer_soc_nets.preset'

import './Footer__otherInfo.scss'


const Footer__OtherInfo = ({ classNames }) => {
    return (
        <div className={['footer__additional-info',
            classNames && classNames?.join(' ')
        ].join(' ')}>
            <div className={'footer__city'}>
                <h4> Ростов-на-Дону </h4>
            </div>
            <div className={'footer__street'}>
                <span>
                   Пл. Народного Ополчения 2
                </span>
            </div>
            <div className={'footer__soc-networks'}>
                {
                    Footer_soc_netsPreset.map(soc =>
                        <Footer__SocNet
                            key={soc.id}
                            link={soc.link}
                            imgSrc={soc.imgSrc}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Footer__OtherInfo;