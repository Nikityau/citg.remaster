import React from 'react';
import {Link} from "react-router-dom";

import {TEAM_LINK} from "components/AppRouter/AppRouter.links";

import {goUp} from "utils/goUp";

import './AboutUs__button.scss'

import arrow_img from 'assets/icons/futuristic-arrow.svg'

const AboutUs__Button = ({ classNames }) => {
    return (
        <button className={'about-us__button'}
            onClick={goUp}
        >
            <Link to={TEAM_LINK}>
                <div className={'about-us__button-text'}>
                   <span>О команде</span>
                </div>
                <div className={'about-us__button-img'}>
                    <img src={arrow_img} alt={'arrow'}/>
                </div>
            </Link>
        </button>
    );
};

export default AboutUs__Button;