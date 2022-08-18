import React from "react";
import {Link} from "react-router-dom";

import TeamMemberCard__Button from "./__button/TeamMemberCard__button";

import {TEAM_MEMBER_LINK} from "components/AppRouter/AppRouter.links";

import {goUp} from "utils/goUp";
import {transformDryIdLink} from "utils/transformDryIdLink";

import './TeamMemberCard.scss'
import './_hover/TeamMermberCard_opacity_hover.scss'
import './_hover/TeamMemberCard_back_white_hover.scss'
import './_hover/TeamMemberCard_text_color_black_hover.scss'


const TeamMemberCard = ({ photo,fullName,skills, id }) => {
    return (
        <div className={'team-member-card team-member-card_back_white_hover'}
            onClick={goUp}
        >
            <Link to={transformDryIdLink(TEAM_MEMBER_LINK, id)}>
                <div className={'team-member-card__photo'}>
                    <img src={photo} alt={'member-img'}/>
                </div>
                <div className={'team-member-card__info'}>
                    <div className={'team-member-card__full-name team-member-card_text_color_black_hover'}>
                        <p> { fullName } </p>
                    </div>
                    <div className={'team-member-card__skills'}>
                        <p> { skills?.reduce((prev,curr) => prev?.skill_name + ', ' + curr?.skill_name) } </p>
                    </div>
                </div>
                <TeamMemberCard__Button classNames={['team-member-card_opacity_hover']}/>
            </Link>
        </div>
    )
}

export default TeamMemberCard;