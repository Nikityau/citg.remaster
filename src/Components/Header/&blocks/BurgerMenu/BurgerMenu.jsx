import React from 'react';
import {Link, useLocation} from "react-router-dom";

import {HOME_LINK, PROJECTS_LINK, TEAM_LINK} from "components/AppRouter/AppRouter.links";

import {goUp} from "utils/goUp";

import './BurgerMenu.scss'
import './_close/BurgerMenu_close.scss'
import './_open/BurgerMenu_open.scss'
import './_current_path/BurgerMenu_current_path.scss'

const BurgerMenu = ({ close, isOpen }) => {

    const location = useLocation()

    const navClick = () => {
        goUp()
        close()
    }

    return (
        <div className={[
            'burger-menu',
            isOpen
                ? 'burger-menu_open'
                : 'burger-menu_close'
        ].join(' ')}>
            <div className={'burger-menu__container'}>
                <div className={'burger-menu__navigation'}>
                    <div className={[
                        'burger-menu__navigation-link',
                        location.pathname?.includes('home')
                            ? 'burger-menu_current_path'
                            : ''
                    ].join(' ')}
                    onClick={navClick}
                    >
                        <Link to={HOME_LINK}>
                            <span> Главная </span>
                        </Link>
                    </div>
                    <div className={[
                        'burger-menu__navigation-link',
                        location.pathname?.includes('projects')
                            ? 'burger-menu_current_path'
                            : ''
                    ].join(' ')}
                        onClick={navClick}
                    >
                        <Link to={PROJECTS_LINK}>
                            <span> Проекты </span>
                        </Link>
                    </div>
                    <div className={[
                        'burger-menu__navigation-link',
                        location.pathname?.includes('team')
                            ? 'burger-menu_current_path'
                            : ''
                    ].join(' ')}
                        onClick={navClick}
                    >
                        <Link to={TEAM_LINK}>
                            <span> Команда </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;