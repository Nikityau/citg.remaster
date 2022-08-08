import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

import MemberPage__Mountain from "components/Pages/Member.page/__mountain/Member.page__mountain";
import MemberPageMobile__member from "components/Pages/Member.page/@mobile/__member/Member.page@mobile__member";
import MemberPageMobile__tabs from "components/Pages/Member.page/@mobile/__tabs/Member.page@mobile__tabs";
import MemberPageMoible__AboutMe from "components/Pages/Member.page/@mobile/__aboutMe/Member.page@moible__aboutMe";

export const TAB_ABOUT_ME = 'about me'
export const TAB_GALLERY = 'gallery'
export const TAB_SKILLS = 'skills'

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
                <div className={'membile__inner-container'}>
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
                            <MemberPageMoible__AboutMe
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

                        </div>
                        <div className={[
                            'membile__skills',
                            'membile__window',
                            checkForWindow(TAB_SKILLS)
                        ].join(' ')}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile;