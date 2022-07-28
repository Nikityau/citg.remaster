import React from 'react';

import './Member.page__mountain.scss'

import mountain_img from 'assets/images/blue-moutain-back.png'

const MemberPage__Mountain = () => {
    return (
        <div className={'member-page__mountain'}
        >
            <div className={'member-page__mountain-img'}>
                <img src={mountain_img} alt={'img'}/>
            </div>
            <div className={'member-page__mountain-blackout'}>
            </div>
            <div className={'member-preview__mountain-gradient-gray'}>
            </div>
            <div className={'member-page__mountain-gradient-red'}>
            </div>
        </div>
    );
};

export default MemberPage__Mountain;