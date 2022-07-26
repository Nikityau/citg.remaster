import React from 'react';

import './TeamMemberCard__button.scss'

const TeamMemberCard__Button = ({ classNames }) => {
    return (
        <button className={['team-member-card__button',
            classNames && classNames?.join(' ')
        ].join(' ')}>
            <span> show </span>
            <span> more </span>
        </button>
    );
};

export default TeamMemberCard__Button;