import React, {useContext, useEffect, useState} from 'react';

import LogoPlanet__MainCircle
    from "./__main-circle/LogoPlanet__mainCircle";
import LogoPlanet__Circle
    from "./__circle/LogoPlanet__cirlce";
import LogoPlanet__Trail
    from "./__trail/LogoPlanet__trail";

import LogoPlanetController
    from "components/Pages/Home.page/&blocks/Enter/&blocks/LogoPlanet/controller/LogoPlanet.controller";

import {AppContext} from "components/App/App";

import './LogoPlanet.scss'
import './_circle_size/LogoPlanet_cirlce_size_m.scss'
import './_circle_size/LogoPlanet_circle_size_s.scss'
import './_circle_size/LogoPlanet_circle_size_m_plus.scss'
import './_planet_glow/LogoPlanet_planet_glow.scss'
import './_animation_levitation/LogoPlanet_animation_levitation.scss'
import './_anim_circle/LogoPlanet_anim_cirlce.scss'

const LogoPlanet = ({classNames}) => {

    const mainCircleAttr = 'mainCircle'
    const smallCircleAttr = 'smallCircle'
    const mediumCircleAttr = 'mediumAttr'
    const rotatingCircleAttr = 'rotatingAttr'
    const trailAttr = 'trailAttr'

    const appContext = useContext(AppContext)

    const [planetController] = useState(new LogoPlanetController(mainCircleAttr,
        smallCircleAttr, mediumCircleAttr, rotatingCircleAttr, trailAttr))

    useEffect(() => {
        if (!planetController) return

        planetController.init()
        planetController.setPosition()
        //appContext?.animationSwitch && planetController.animationStart()

        return () => {
            //planetController.destroy();
        }
    }, [])

    return (
        <div className={['logo-planet', classNames && classNames?.join(' ')].join(' ')}>
            <LogoPlanet__MainCircle dataAttr={mainCircleAttr}
                                    classNames={['logo-planet_planet_glow']}/>
            <LogoPlanet__Circle dataAttr={smallCircleAttr}
                                classNames={[
                                    'logo-planet_planet_glow',
                                    'logo-planet_circle_size_s',

                                    appContext?.animationSwitch &&
                                    ('logo-planet_animation_levitation',
                                        'logo-planet_animation_levitation_far')
                                ]}/>
            <LogoPlanet__Circle dataAttr={mediumCircleAttr}
                                classNames={[
                                    'logo-planet_planet_glow',
                                    'logo-planet_circle_size_m_plus',

                                    appContext?.animationSwitch &&
                                    ('logo-planet_animation_levitation',
                                        'logo-planet_animation_levitation_near')
                                ]}/>
            <LogoPlanet__Trail dataAttr={trailAttr}>
                <LogoPlanet__Circle dataAttr={rotatingCircleAttr}
                                    classNames={[
                                        'logo-planet_planet_glow',
                                        'logo-planet_circle_size_m',
                                        'logo-planet__round-circle',
                                        'logo-planet_anim_circle'
                                    ]}/>
            </LogoPlanet__Trail>
        </div>
    );
};

export default LogoPlanet;