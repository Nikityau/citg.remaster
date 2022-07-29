import React from 'react';
import {Link, useParams} from "react-router-dom";

import {transformDryIdLink} from "utils/transformDryIdLink";
import {TEAM_MEMBER_LINK, TEAM_MEMBER_WORK_LINK} from "components/AppRouter/AppRouter.links";

import './MemberWork.page__description.scss'
import './_padding_right/MemberWork.page__description_padding_right.scss'

import close_img from 'assets/images/memberWorkPage/close-crosshair.svg'
import next_arrow_img from 'assets/images/memberWorkPage/arrow-with-frame.svg'

const MemberWorkPage__Description = ({nextWork, currentWork}) => {

    const {memberId} = useParams()

    return (
        <div className={'member-work-page__description'}>
            <div className={'member-work-page__close member-work-page__description_padding_right'}>
                <Link to={transformDryIdLink(TEAM_MEMBER_LINK, memberId)}>
                    <img src={close_img} alt={'close-img'}/>
                </Link>
            </div>
            <div className={'member-work-page__about-container'}>
                <div className={[
                    'member-work-page__about-title',
                    'member-work-page__description_padding_right',
                    'member-work-page__description-title'
                ].join(' ')}>
                    <h3> About Work </h3>
                </div>
                <div className={'member-work-page__about'}>
                    <p>
                        {currentWork?.project_description}
                    </p>
                </div>
            </div>
            <div className={'member-work-page__next-work-container'}>
                <div className={[
                    'member-work-page__next-work-title',
                    'member-work-page__description-title',
                    'member-work-page__description_padding_right'
                ].join(' ')}>
                    <h3> Next Work </h3>
                </div>
                <div className={'member-work-page__next-work'}
                     style={{
                         backgroundImage: `url(${nextWork?.main_img})`
                     }}
                >
                    <Link to={transformDryIdLink(TEAM_MEMBER_WORK_LINK, [memberId, nextWork?.id])}>
                        <img src={next_arrow_img} alt={'arrow'}/>
                        <div className={'member-work-page__next-work-blackout'}/>
                    </Link>
                </div>
            </div>
            <div className={'member-work-page__software-used-container'}>
                <div className={[
                    'member-work-page__software-used-title',
                    'member-work-page__description-title',
                    'member-work-page__description_padding_right'
                ].join(' ')}>
                    <h3> Software Used </h3>
                </div>
                <div className={'member-work-page__software-used-list'}>
                    {
                        currentWork?.software_used?.map(soft =>
                            <div
                                key={soft?.id}
                                className={'member-work-page__soft'}>
                                <img src={soft?.software_icon} alt={'icon'}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberWorkPage__Description;