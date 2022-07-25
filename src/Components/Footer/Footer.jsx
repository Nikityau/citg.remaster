import React from 'react';

import Footer__Citg from "components/Footer/__citg/Footer__citg";
import Footer__Contacts from "components/Footer/__contacts/Footer__contacts";
import Footer__OtherInfo from "components/Footer/__otherInfo/Footer__otherInfo";

import ArrowUp from "components/Footer/&blocks/ArrowUp/ArrowUp";

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
                    <Footer__Contacts/>
                    <Footer__OtherInfo/>
                </div>
            </div>
        </div>
    );
};

export default Footer;