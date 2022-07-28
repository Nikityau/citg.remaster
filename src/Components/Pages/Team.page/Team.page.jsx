import React, {useEffect, useState} from 'react';

import TeamMemberCard from "components/Pages/Team.page/&blocks/TeamMeberCard/TeamMemberCard";

import CITG_APIController from "src/API/CITG_API.controller";

import './Team.page.scss'
import './_back/Team.page_back_gradient_purple.scss'
import './_back/Team.page_back_gradient_orange.scss'


const TeamPage = () => {

    const [team, setTeam] = useState([])

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getTeam()
            setTeam(response)
        })()
    }, [])

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
                        team?.map(member =>
                            <TeamMemberCard
                                key={member?.id || ''}
                                id={member?.id || ''}
                                fullName={member?.full_name || ''}
                                skills={member?.hard_skills || ''}
                                photo={member?.photo || ''}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamPage;