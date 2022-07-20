import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'

import Navigation__circleController from "./controller/Navigation__circle.controller";

import './Navigation__circle.scss'

const Navigation__circle = ({ dataAttr, classNames, moveDirCb }) => {
    const [navCircleController] = useState(new Navigation__circleController(dataAttr || ''))

    const location = useLocation()

    useEffect(() => {
        if(!navCircleController) return

        navCircleController.init();
    }, [])

    useEffect(() => {
        if(!navCircleController) return

        navCircleController?.move(location.pathname, moveDirCb || function () { return undefined })
    }, [location])

    return (
        <div className={['navigation__circle',
            classNames && classNames?.join(' ')].join(' ')}
            data-navigation-circle={dataAttr || ''}
        >
        </div>
    );
};

export default Navigation__circle;