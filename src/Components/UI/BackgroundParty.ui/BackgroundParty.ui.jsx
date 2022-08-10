import React from 'react';
import {isSafari} from "react-device-detect";

import './BackgroundParty.ui.scss'

import './_circle_size/BacgroundParty.ui_circle_size_b.scss'
import './_circle_size/BacgroundParty.ui_circle_size_m.scss'
import './_circle_size/BacgroundParty.ui_circle_size_s.scss'

import './_circle_color/BacgroundPart.ui_circle_color_red_purple.scss'
import './_circle_color/BacgroundPart.ui_circle_color_purple_orange.scss'
import './_circle_color/BacgroundPart.ui_circle_color_lgreen_blue.scss'

const BackgroundPartyUi = ({classNames}) => {
    return (
        <div className={['background-party', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'background-party__container'}>
                <div className={[
                    'background-party__circle background-party_circle_size_b',
                    isSafari
                        ? 'background-party_circle_color_red_purple_safari'
                        : 'background-party_circle_color_red_purple'
                ].join(' ')}/>
                <div className={[
                    'background-party__circle background-party_circle_size_s',
                    isSafari
                        ? 'background-party_circle_color_purple_orange_safari'
                        : 'background-party_circle_color_purple_orange'
                ].join(' ')}/>
                <div className={[
                    'background-party__circle background-party_circle_size_m',
                    isSafari
                        ? 'background-party_circle_color_lgreen_blue_safari'
                        : 'background-party_circle_color_lgreen_blue'
                ].join(' ')}/>
            </div>
        </div>
    );
};

export default BackgroundPartyUi;