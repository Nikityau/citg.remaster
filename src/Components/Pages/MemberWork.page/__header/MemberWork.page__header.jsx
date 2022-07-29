import React from 'react';

import './MemberWork.page__header.scss'
import './_back_blackout/MemberWork.page__header_back_blackout.scss'

import back_img from 'assets/images/my-work-header-back.png'

const MemberWorkPage__Header = ({ memberPhoto, memberSkills, memberFullName }) => {
    return (
        <div className={[
            'member-work-page__header',
            'member-work-page__header_back_blackout'
        ].join(' ')}
            style={{
                backgroundImage: `url(${back_img})`
            }}
        >
            <div className={'member-work-page__header-container app-container'}>
                <div className={'member-work-page__header-member-photo'}>
                    <img src={memberPhoto} alt={'img'}/>
                </div>
                <div className={'member-work-page__header-member-info'}>
                    <div className={'member-work-page__header-full-name'}>
                        <span> { memberFullName } </span>
                    </div>
                    <div className={'member-work-page__header-hard-skills'}>
                        <span> { memberSkills?.reduce((prev, curr) => prev?.skill_name + ', ' + curr?.skill_name) } </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberWorkPage__Header;