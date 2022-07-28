import React from 'react';

import './MemberPreview__memberSkills.scss'

const MemberPreview__MemberSkills = ({ hard_skills, software }) => {
    return (
        <div className={'member-preview__member-skills'}>
            <div className={'member-preview__member-skills-title'}>
                <h3> Навыки </h3>
            </div>
            <div className={'member-preview__member-skills-container'}>
                <div className={'member-preview__member-software-list'}>
                    {
                        software.map(soft =>
                            <div className={'member-preview__member-software'}
                                key={soft.id}
                            >
                                <img src={soft.software_icon} alt={'icon'}/>
                            </div>
                        )
                    }
                </div>
                <div className={'member-preview__member-hard-skills-list'}>
                    {
                        hard_skills.map(hard =>
                            <div key={hard.id} className={'member-preview__member-hard-skill'}>
                                <span> { hard.skill_name } </span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberPreview__MemberSkills;