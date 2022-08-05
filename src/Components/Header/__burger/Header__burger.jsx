import React, {useCallback} from 'react';

import {useToggler} from "components/Utils.Compoents/CustomHooks/useToggler";

import {prevEv} from "utils/prevEv";

import BurgerMenu from "components/Header/&blocks/BurgerMenu/BurgerMenu";

import './Header__burger.scss'
import './_open/Header__burger_open.scss'

const Header__Burger = () => {

    const [is, setIs] = useToggler(false)

    const open = () => {
        if(is) {
            close()

            return
        }

        setIs.on()

        window.addEventListener('touchmove', prevEv, { passive: false })
    }

    const close = () => {
        setIs.off()

        window.removeEventListener('touchmove', prevEv)
    }

    return (
        <>
            <div className={[
                'header__burger',
                'burger',
                is ? 'header__burger_open'
                    : 'header__burger_close'
            ].join(' ')}
                onClick={open}
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
                isOpen={is}
                close={close}
            />
        </>
    );
};

export default Header__Burger;