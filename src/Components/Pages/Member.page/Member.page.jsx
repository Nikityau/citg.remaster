import React, {useEffect, useState} from 'react';
import {useParams, useLocation, useNavigate} from "react-router-dom";

import MemberPage__Mountain from "components/Pages/Member.page/__mountain/Member.page__mountain";

import MemberPreview from "components/Pages/Member.page/&blocks/MemberPreview/MemberPreview";
import ProjectsInfo from "components/Pages/Member.page/&blocks/ProjectsInfo/ProjectsInfo";

import MemberPageMobile from "components/Pages/Member.page/@mobile/Member.page@mobile";

import CITG_APIController from "src/API/CITG_API.controller";

import {whatRender} from "components/Utils.Compoents/whatRender";

import './Member.page.scss'
import {isDesktop} from "react-device-detect";

import {transformDryIdLink} from "utils/transformDryIdLink";
import {TEAM_MEMBER_WORK_LINK} from "components/AppRouter/AppRouter.links";

const MemberPage = () => {
    const {memberId} = useParams()

    const location = useLocation()

    const navigate = useNavigate()

    const [memberAPI, setMemberAPI] = useState([])

    useEffect(() => {
        if(isDesktop) {
            const [tab, workId, isMobile] = location.search.substring(1).split('&');
            if(!workId || !isMobile) return;

            const [workIdQueryName, workIdQueryId] = workId?.split('=')

            navigate(transformDryIdLink(TEAM_MEMBER_WORK_LINK, [memberId, workIdQueryId]), { replace: true })
        }
    }, [])

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getTeamMemberById(memberId)
            setMemberAPI(response)
        })()
    }, [])

    const tablet = <div className={'member-page'}>
        <MemberPage__Mountain/>
        <MemberPreview member={memberAPI}/>
        <ProjectsInfo member={memberAPI}/>
    </div>

    const mobile = <MemberPageMobile member={memberAPI}/>

    const desktop = <>
        {tablet}
        {mobile}
    </>

    return (
        <>
            {
                whatRender(desktop, tablet, mobile)
            }
        </>
    );
};

export default MemberPage;