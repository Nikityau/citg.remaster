import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

import MemberPage__Mountain from "components/Pages/Member.page/__mountain/Member.page__mountain";
import MemberPageMobile__member from "components/Pages/Member.page/@mobile/__member/Member.page@mobile__member";
import MemberPageMobile__tabs from "components/Pages/Member.page/@mobile/__tabs/Member.page@mobile__tabs";
import MemberPageMobile__Gallery from "components/Pages/Member.page/@mobile/__gallery/Member.page@mobile__gallery";
import MemberPageMobile__Skills from "components/Pages/Member.page/@mobile/__skills/Member.page@mobile__skills";
import MemberPageMobile__aboutMe from "components/Pages/Member.page/@mobile/__aboutMe/Member.page@mobile__aboutMe";

export const TAB_ABOUT_ME = 'about me'
export const TAB_GALLERY = 'gallery'
export const TAB_SKILLS = 'skills'

import './_back_gradient/Member.page@mobile_back_gradient_purple.scss'
import './_back_gradient/Member.page@mobile_back_gradient_red.scss'

const MemberPageMobile = ({member}) => {
    const location = useLocation()

    const [tabState, setTabState] = useState(TAB_ABOUT_ME)

    const changeTab = (tab) => () => setTabState(tab)

    const checkForWindow = (tab) => {
        if(tab === tabState) {
            return 'membile__current-window'
        }

        return ''
    }

    return (
        <div className={'membile member-page_mobile'}>
            <MemberPage__Mountain classNames={[
                'membile__mountain'
            ]}/>
            <div className={'membile__container'}>
                <div className={[
                    'membile__inner-container',
                    'member-page_mobile_back_gradient_purple',
                    'member-page_mobile_back_gradient_red'
                ].join(' ')}>
                    <MemberPageMobile__member
                        member={member}
                    />
                    <MemberPageMobile__tabs
                        currentTab={tabState}
                        changeTab={changeTab}
                    />
                    <div className={'membile__tabs-windows'}>
                        <div className={[
                            'membile__about-me',
                            'membile__window',
                            checkForWindow(TAB_ABOUT_ME),
                        ].join(' ')}>
                            <MemberPageMobile__aboutMe
                                changeTab={changeTab}
                                myWorks={member?.member_works}
                                participateInProjects={member?.participated_in_projects}
                            />
                        </div>
                        <div className={[
                            'membile__gallery',
                            'membile__window',
                            checkForWindow(TAB_GALLERY)
                        ].join(' ')}>
                            <MemberPageMobile__Gallery
                                myWorks={member?.member_works}
                            />
                        </div>
                        <div className={[
                            'membile__skills',
                            'membile__window',
                            checkForWindow(TAB_SKILLS)
                        ].join(' ')}>
                            <MemberPageMobile__Skills
                                skills={member?.hard_skills}
                                certificates={member?.certificates}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile;