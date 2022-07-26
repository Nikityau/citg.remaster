import React from 'react';

import {
    teamPage_team_membersPreset
} from "components/Pages/Team.page/_team_members.preset/Team.page_team_members.preset";
import TeamMemberCard from "components/Pages/Team.page/&blocks/TeamMeberCard/TeamMemberCard";

import './Team.page.scss'
import './_back/Team.page_back_gradient_purple.scss'
import './_back/Team.page_back_gradient_orange.scss'

const TeamPage = () => {
    return (
        <div className={'team-page team-page_back_gradient_purple team-page_back_gradient_orange'}>
            <div className={'team-page__container app-container'}>
                <div className={'team-page__page-title'}>
                    <div className={'team-page__title'}>
                        <h2> О Команде </h2>
                    </div>
                    <div className={'team-page__subtitle'}>
                        <p>
                            Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из разных сфер,
                            многие из них являются бывшими учениками
                        </p>
                    </div>
                </div>
                <div className={'team-page__team-members'}>
                    {
                        teamPage_team_membersPreset.map(member =>
                            <TeamMemberCard
                                key={member.id}
                                id={member.id}
                                fullName={member.fullName}
                                skills={member.skills}
                                photo={member.photo}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPage;