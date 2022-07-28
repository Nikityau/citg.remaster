import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import MemberPage__Mountain from "components/Pages/Member.page/__mountain/Member.page__mountain";

import MemberPreview from "components/Pages/Member.page/&blocks/MemberPreview/MemberPreview";
import ProjectsInfo from "components/Pages/Member.page/&blocks/ProjectsInfo/ProjectsInfo";

import { memberPage_memberPreset } from './_member.preset/Member.page_member.preset'

import './Member.page.scss'

const MemberPage = () => {
    const { memberId } = useParams()

    const [member, setMember] = useState(memberPage_memberPreset)

    return (
        <div className={'member-page'}>
            <MemberPage__Mountain/>
            <MemberPreview member={member}/>
            <ProjectsInfo/>
        </div>
    );
};

export default MemberPage;