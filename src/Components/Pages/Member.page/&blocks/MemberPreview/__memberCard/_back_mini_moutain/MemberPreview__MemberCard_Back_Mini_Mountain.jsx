import React from 'react';

import './MemberPreview__MemberCard_back_mountain.scss'

import mini_mountain_img from 'assets/images/pink-moutain-back.png'

const MemberPreview__MemberCard_Back_Mini_Mountain = () => {
    return (
        <div className={'member-preview__member-card_back_mini_mountain'}
            style={{
                backgroundImage: `url(${ mini_mountain_img })`
            }}
        >
        </div>
    );
};

export default MemberPreview__MemberCard_Back_Mini_Mountain;