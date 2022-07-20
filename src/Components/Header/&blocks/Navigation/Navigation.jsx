import React, {useEffect, useState} from 'react';

import Navigation__circle from "components/Header/&blocks/Navigation/__circle/Navigation__circle";
import Navigation__link from "components/Header/&blocks/Navigation/__link/Navigation__link";

import NavigationController from "components/Header/&blocks/Navigation/controller/Navigation.controller";

import './Navigation.scss'

const HeaderNavigation = ({ classNames }) => {
    const homeAttr = 'home'
    const projectsAttr = 'projects'
    const teamAttr = 'team'

    const [navController] = useState(new NavigationController(homeAttr, projectsAttr, teamAttr))

    useEffect(() => {
        if(!navController) return

        navController?.init()
    }, [])

    return (
        <div className={['navigation', classNames && classNames?.join(' ')].join(' ')}>
            <nav className={'navigation__links'}>
                <Navigation__link dataAttr={homeAttr} link={'/'} textLink={'Главная'}/>
                <Navigation__link dataAttr={projectsAttr} link={'/projects'} textLink={'Проекты'}/>
                <Navigation__link dataAttr={teamAttr} link={'/team'} textLink={'Команда'}/>
            </nav>
            <Navigation__circle dataAttr={'circle'} moveDirCb={navController?.moveDir || function () {}}/>
        </div>
    );
};

export default HeaderNavigation;