import React from 'react';

import './Header__burger.scss'

const Header__Burger = () => {
    return (
        <div className={'header__burger burger'}>
            <div className={'burger__container'}>
                <div className={'burger__line'}/>
                <div className={'burger__line'}/>
                <div className={'burger__line'}/>
            </div>
        </div>
    );
};

export default Header__Burger;