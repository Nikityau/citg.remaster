import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import MemberPreview from "components/Pages/Member.page/&blocks/MemberPreview/MemberPreview";

import { memberPage_memberPreset } from './_member.preset/Member.page_member.preset'

import './Member.page.scss'

const MemberPage = () => {
    const { memberId } = useParams()

    const [member, setMember] = useState(memberPage_memberPreset)

    return (
        <div className={'member-page'}>
            <MemberPreview member={member}/>
        </div>
    );
};

export default MemberPage;