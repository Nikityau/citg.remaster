import React, {useEffect, useState} from 'react';
import {isMobileOnly} from "react-device-detect";
import {useNavigate, useParams, generatePath} from "react-router-dom";

import MemberWorkPage__Header from "components/Pages/MemberWork.page/__header/MemberWork.page__header";
import MemberWorkPage__Work from "components/Pages/MemberWork.page/__work/MemberWork.page__work";
import MemberWorkPage__Description from "components/Pages/MemberWork.page/__description/MemberWork.page__description";

import CITG_APIController from "src/API/CITG_API.controller";

import {TEAM_MEMBER_LINK} from "components/AppRouter/AppRouter.links";
import {whatRender} from "components/Utils.Compoents/whatRender";

import './MemberWork.page.scss'



const MemberWorkPage = () => {

    const navigate = useNavigate()

    const { memberId, workId } = useParams()

    const [member, setMember] = useState({})

    useEffect(() => {

        if(isMobileOnly) {
            navigate(`${generatePath(TEAM_MEMBER_LINK, { memberId })}?tab=gallery&workId=${workId}`, { replace: true })
        }

        (async () => {
            const response = await CITG_APIController.getTeamMemberById(memberId)
            setMember(response)
        })()
    }, [])

    const getCurrentWork = () => {
        if(!Array.isArray(member?.member_works)) return {}

        return member?.member_works?.find(work => work?.id == workId)
    }

    const getNextWork = () => {
        if(!Array.isArray(member?.member_works)) return {}

        const nextIndex = member?.member_works?.findIndex(work => work?.id == workId) + 1;
        return nextIndex >= member?.member_works?.length ? member?.member_works[0] : member?.member_works[nextIndex];
    }

    const tablet = <div className={'member-work-page'}>
        <div className={'member-work-page__header-wrapper'}>
            <MemberWorkPage__Header
                memberFullName={member?.full_name}
                memberPhoto={member?.photo}
                memberSkills={member?.hard_skills}
            />
        </div>
        <div className={'member-work-page__my-work-container'}>
            <div className={'member-work-page__my-work-wrapper'}>
                <MemberWorkPage__Work
                    currentWork={getCurrentWork()}
                />
            </div>
            <div className={'member-work-page__description-container'}>
                <MemberWorkPage__Description
                    currentWork={getCurrentWork()}
                    nextWork={getNextWork()}
                />
            </div>
        </div>
    </div>

    const mobile = ''

    const desktop = <>
        { tablet }
        { mobile }
    </>

    return (
        <>
            {
                whatRender(desktop, tablet, mobile)
            }
        </>
    );
};

export default MemberWorkPage;