import React from 'react';

import './Member.page@mobile__member.scss'

import arrow_summary_img from 'assets/icons/arrow-circle.svg'

const MemberPageMobile__Member = ({member}) => {
    return (
        <div className={'membile__member-info'}>
            <div className={'membile__member-photo'}>
                <img src={member?.photo} alt={'image'}/>
            </div>
            <div className={'membile__member-summary'}>
                <a href={member?.summary_link}>
                    <div className={'membile__member-summary-text'}>
                        <span> Резюме </span>
                    </div>
                    <div className={'membile__member-summary-image'}>
                        <img src={arrow_summary_img} alt={'image'}/>
                    </div>
                </a>
            </div>
            <div className={'membile__member'}>
                <div className={'membile__member-name'}>
                    <span> { member?.full_name } </span>
                </div>
                <div className={'membile__member-skills'}>
                    <span> { member?.hard_skills?.reduce((prev, curr) =>
                        prev?.skill_name + ', ' + curr?.skill_name
                    ) } </span>
                </div>
                <div className={'membile__member-software'}>
                    {
                        member?.software_used?.map(soft =>
                            <div className={'membile__software'} key={soft?.id}>
                                <img src={soft?.software_icon} alt={'img'}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile__Member;