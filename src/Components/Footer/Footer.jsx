import React from 'react';

import Footer__Citg from "components/Footer/__citg/Footer__citg";
import Footer__Contacts from "components/Footer/__contacts/Footer__contacts";
import Footer__OtherInfo from "components/Footer/__otherInfo/Footer__otherInfo";
import Footer__SocNet from "components/Footer/__socNet/Footer__socNet";

import ArrowUp from "components/Footer/&blocks/ArrowUp/ArrowUp";

import {Footer_soc_netsPreset} from "components/Footer/_soc_nets.preset/Footer_soc_nets.preset";

import './Footer.scss'


const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__container app-container'}>
                <ArrowUp/>
                <div className={'footer__law-part'}>
                    <Footer__Citg/>
                </div>
                <div className={'footer__info-part'}>
                    <div className={'footer__soc-networks_mobile'}>
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
                    <Footer__Contacts/>
                    <Footer__OtherInfo/>
                </div>
            </div>
        </div>
    );
};

export default Footer;