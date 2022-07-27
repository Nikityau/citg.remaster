import React from 'react';

import MemberPreview__MemberCard
    from "components/Pages/Member.page/&blocks/MemberPreview/__memberCard/MemberPreview__memberCard";

import './MemberPreview.scss'

const MemberPreview = ({ member }) => {
    return (
        <div className={'member-preview'}>
            <div className={'member-preview__container app-container'}>
                <div className={'member-preview__info-card'}>
                    <MemberPreview__MemberCard
                        photo={member.photo}
                        skills={member.skills}
                        fullName={member.full_name}
                        soc_nets={member.soc_nets_links}
                        summaryLink={member.summary_link}
                    />
                </div>
                <div className={'member-preview__skills-n-awards'}>

                </div>
            </div>
        </div>
    );
};

export default MemberPreview;