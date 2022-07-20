import React, {useEffect, useState} from 'react';

import LogoPlanet__MainCircle
    from "./__main-circle/LogoPlanet__mainCircle";
import LogoPlanet__Circle
    from "./__circle/LogoPlanet__cirlce";
import LogoPlanet__Trail
    from "./__trail/LogoPlanet__trail";

import LogoPlanetController
    from "components/Pages/Home.page/&blocks/Enter/&blocks/LogoPlanet/controller/LogoPlanet.controller";

import './LogoPlanet.scss'
import './_circle_size/LogoPlanet_cirlce_size_m.scss'
import './_circle_size/LogoPlanet_circle_size_s.scss'
import './_circle_size/LogoPlanet_circle_size_m_plus.scss'
import './_planet_glow/LogoPlanet_planet_glow.scss'

const LogoPlanet = ({ classNames }) => {
    const mainCircleAttr = 'mainCircle'
    const smallCircleAttr = 'smallCircle'
    const mediumCircleAttr = 'mediumAttr'
    const rotatingCircleAttr = 'rotatingAttr'
    const trailAttr = 'trailAttr'

    const [planetController] = useState(new LogoPlanetController(mainCircleAttr,
        smallCircleAttr, mediumCircleAttr, rotatingCircleAttr, trailAttr))

    useEffect(() => {
        if(!planetController) return

        planetController.init()
        planetController.setPosition()
    }, [])

    return (
        <div className={['logo-planet', classNames && classNames?.join(' ')].join(' ')}>
            <LogoPlanet__MainCircle dataAttr={mainCircleAttr} classNames={['logo-planet_planet_glow']}/>
            <LogoPlanet__Circle dataAttr={smallCircleAttr} classNames={['logo-planet_planet_glow', 'logo-planet_circle_size_s']}/>
            <LogoPlanet__Circle dataAttr={mediumCircleAttr} classNames={['logo-planet_planet_glow', 'logo-planet_circle_size_m_plus']}/>
            <LogoPlanet__Circle dataAttr={rotatingCircleAttr} classNames={['logo-planet_planet_glow', 'logo-planet_circle_size_m']}/>
            <LogoPlanet__Trail dataAttr={trailAttr}/>
        </div>
    );
};

export default LogoPlanet;