import React from 'react';

import MemberPreview__MemberCard_frame
    from "./_frame/MemberPreview__MemberCard_frame";
import MemberPreview__MemberCard_Back_Mini_Mountain
    from "./_back_mini_moutain/MemberPreview__MemberCard_Back_Mini_Mountain";

import './MemberPreview__memberCard.scss'
import './_back_blackout/MemberPreview__MemberCard_back_blackout.scss'

import arrow_img from 'assets/icons/arrow-circle.svg'

const MemberPreview__MemberCard = (
    {
        photo,
        fullName,
        skills,
        soc_nets,
        summaryLink
    }
) => {
    return (
        <div className={'member-preview__member-card member-preview__member-card_back_blackout'}>
            <MemberPreview__MemberCard_Back_Mini_Mountain/>
            <MemberPreview__MemberCard_frame/>
            <div className={'member-preview__summary'}>
                <a href={summaryLink}>
                    <div className={'member-preview__summary-text'}>
                        <span> Резюме </span>
                    </div>
                    <div className={'member-preview__summary-img-download'}>
                        <img src={arrow_img} alt={'arrow-circle-icon'}/>
                    </div>
                </a>
            </div>
            <div className={'member-preview__member-card-photo'}>
                <img src={photo} alt={'member-img'}/>
            </div>
            <div className={'member-preview__member-card-info'}>
                <div className={'member-preview__member-card-full-name'}>
                    <span> { fullName } </span>
                </div>
                <div className={'member-preview__member-card-skills'}>
                    <span> { skills?.reduce((prev, curr) => prev?.skill_name + ', ' + curr?.skill_name ) } </span>
                </div>
            </div>
            <div className={'member-preview__member-card-soc-nets'}>
                {
                    soc_nets?.map(soc =>
                        <div className={'member-preview__member-card-soc-net'}
                             key={soc?.id}>
                            <a href={soc?.soc_net_link}>
                                <img src={soc?.soc_net_icon} alt={'soc-net-icon'}/>
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MemberPreview__MemberCard;