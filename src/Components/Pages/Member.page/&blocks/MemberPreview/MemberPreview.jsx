import React from 'react';

import MemberPreview__MemberCard
    from "components/Pages/Member.page/&blocks/MemberPreview/__memberCard/MemberPreview__memberCard";
import MemberPreview__MemberSkills
    from "components/Pages/Member.page/&blocks/MemberPreview/__memberSkills/MemberPreview__memberSkills";
import MemberPreview__MemberCertificates
    from "components/Pages/Member.page/&blocks/MemberPreview/__memberCertificates/MemberPreview__memberCertificates";

import './MemberPreview.scss'

const MemberPreview = ({ member }) => {
    return (
        <div className={'member-preview'}>
            <div className={'member-preview__container app-container'}>
                <div className={'member-preview__info-card'}>
                    <MemberPreview__MemberCard
                        photo={member.photo}
                        skills={member.hard_skills}
                        fullName={member.full_name}
                        soc_nets={member.soc_nets_links}
                        summaryLink={member.summary_link}
                    />
                </div>
                <div className={'member-preview__skills-n-awards'}>
                    <MemberPreview__MemberSkills
                        software={member.software_used}
                        hard_skills={member.hard_skills}
                    />
                    <MemberPreview__MemberCertificates
                        certificates={member.certificates}
                    />
                </div>
            </div>
        </div>
    );
};

export default MemberPreview;