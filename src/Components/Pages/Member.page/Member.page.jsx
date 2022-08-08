import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import MemberPage__Mountain from "components/Pages/Member.page/__mountain/Member.page__mountain";

import MemberPreview from "components/Pages/Member.page/&blocks/MemberPreview/MemberPreview";
import ProjectsInfo from "components/Pages/Member.page/&blocks/ProjectsInfo/ProjectsInfo";

import MemberPageMobile from "components/Pages/Member.page/@mobile/Member.page@mobile";

import CITG_APIController from "src/API/CITG_API.controller";

import './Member.page.scss'

const MemberPage = () => {
    const { memberId } = useParams()

    const [memberAPI, setMemberAPI] = useState([])

    useEffect(() => {
        (async () => {
            const response = await CITG_APIController.getTeamMemberById(memberId)
            setMemberAPI(response)
        })()
    }, [])

    return (
        <>
            <div className={'member-page'}>
                <MemberPage__Mountain/>
                <MemberPreview member={memberAPI}/>
                <ProjectsInfo member={memberAPI}/>
            </div>
            <MemberPageMobile member={memberAPI}/>
        </>
    );
};

export default MemberPage;