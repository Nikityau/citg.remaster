import React from 'react';
import {isSafari} from "react-device-detect";

import './Member.page__mountain.scss'

import mountain_img from 'assets/images/blue-moutain-back.png'

const MemberPage__Mountain = ({classNames}) => {
    return (
        <div className={[
            'member-page__mountain',
            classNames && classNames?.join(' ')
        ].join(' ')}
        >
            <div className={'member-page__mountain-img'}>
                <img src={mountain_img} alt={'img'}/>
            </div>
            <div className={'member-page__mountain-blackout'}>
            </div>
            <div className={[
                isSafari
                    ? 'member-preview__mountain-gradient-gray_safari'
                    : 'member-preview__mountain-gradient-gray'
            ].join(' ')}>
            </div>
            <div className={[
                isSafari
                    ? 'member-page__mountain-gradient-red_safari'
                    : 'member-page__mountain-gradient-red'
            ].join(' ')}>
            </div>
        </div>
    );
};

export default MemberPage__Mountain;