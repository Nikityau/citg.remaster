import React from 'react';

import Navigation from "./&blocks/Navigation/Navigation";

import MiniLogoUi from "../UI/MiniLogo.ui/MiniLogo.ui";
import EmailUi from "../UI/Email.ui/Email.ui";

import './Header.scss'
import './_back_black/Header_back_black.scss'
import './_border_bottom_grafient/Header_border_bottom_gradient.scss'

const Header = () => {
    return (
        <header className={'header header_back_black header_border_bottom_gradient'}>
            <div className={'header__container app-container'}>
                <div className={'header__logo'}>
                    <MiniLogoUi/>
                </div>
                <div className={'header__navigation'}>
                    <Navigation/>
                </div>
                <div className={'header__email'}>
                    <EmailUi/>
                </div>
            </div>
        </header>
    );
};

export default Header;