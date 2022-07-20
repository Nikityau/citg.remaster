import React from 'react';

import Navigation from "./&blocks/Navigation/Navigation";

import MiniLogoUi from "ui/MiniLogo.ui/MiniLogo.ui";
import EmailUi from "ui/Email.ui/Email.ui";

import './Header.scss'
import './_back_black/Header_back_black.scss'
import './_border_bottom_grafient/Header_border_bottom_gradient.scss'
import './_navigation_left_offset/Header_navigation_left_offset.scss'

const Header = ({ classNames }) => {
    return (
        <header className={['header header_back_black header_border_bottom_gradient', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'header__container app-container'}>
                <div className={'header__logo'}>
                    <MiniLogoUi/>
                </div>
                <div className={'header__navigation header_navigation_left_offset'}>
                    <Navigation classNames={['']}/>
                </div>
                <div className={'header__email'}>
                    <EmailUi/>
                </div>
            </div>
        </header>
    );
};

export default Header;