import React, {useCallback} from 'react';

//import {useToggler} from "components/Utils.Compoents/CustomHooks/useToggler";

import {prevEv} from "utils/prevEv";

import BurgerMenu from "components/Header/&blocks/BurgerMenu/BurgerMenu";

import './Header__burger.scss'
import './_open/Header__burger_open.scss'

const Header__Burger = () => {

    //const [is, setIs] = useToggler(false)


    const cbUI = () => {
        const burgerMenu = document.querySelector('.burger-menu')
        const { height } = getComputedStyle(burgerMenu, null)
        
        if(Number.parseInt(height) === window.innerHeight) {
            close(burgerMenu)
        } else {
            open(burgerMenu)
        }
    }

    const open = (el) => {
        el.style.height = '100vh'

        window.addEventListener('touchmove', prevEv, { passive: false })
    }

    const close = (el) => {
        el.style.height = '0'

        window.removeEventListener('touchmove', prevEv)
    }

    return (
        <>
            <div className={[
                'header__burger',
                'burger',
                false &&
                 (null ? 'header__burger_open'
                    : 'header__burger_close')
            ].join(' ')}
                onClick={cbUI}
            >
                <div className={[
                    'burger__container',
                ].join(' ')}>
                    <div className={'burger__line burger__line-top'}/>
                    <div className={'burger__line burger__line-middle'}/>
                    <div className={'burger__line burger__line-bottom'}/>
                </div>
            </div>
            <BurgerMenu
                isOpen={false}
                close={cbUI}
            />
        </>
    );
};

export default Header__Burger;