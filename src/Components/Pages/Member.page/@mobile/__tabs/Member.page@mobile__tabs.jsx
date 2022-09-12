import React from 'react';

import {
    TAB_ABOUT_ME,
    TAB_CURRENT_IMAGE,
    TAB_GALLERY,
    TAB_SKILLS
} from "components/Pages/Member.page/@mobile/Member.page@mobile";

import './Member.page@mobile__tabs.scss'
import '../_current_tab/Member.page@moible_current_tab.scss'
import {useNavigate} from "react-router-dom";

const MemberPageMobile__Tabs = ({currentTab, changeTab}) => {

    const navigate = useNavigate()

    const currentTabCheck = (tab) => {
        if (tab === currentTab) {
            return 'member-page_mobile_current_tab'
        }

        return ''
    }


    const changeTabLink = (tab) => {
        console.log(tab)
        switch (tab) {
            case TAB_ABOUT_ME:
                navigate('?tab=aboutMe')
                console.log('about')
                changeTab(TAB_ABOUT_ME)()
                break;
            case TAB_GALLERY:
                console.log('here')
                navigate('?tab=gallery')
                changeTab(TAB_GALLERY)()
                break;
            case TAB_SKILLS:
                navigate('?tab=skills')
                changeTab(TAB_SKILLS)()
                break;
            default:
                navigate('?tab=aboutMe')
                changeTab(TAB_ABOUT_ME)()
        }
    }

    return (
        <div className={'membile__tabs-container'}>
            <div className={'membile__tabs-links'}>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_ABOUT_ME)
                ].join(' ')}
                     onClick={() => {
                         changeTabLink(TAB_ABOUT_ME)
                     }}
                >
                    <span> About me </span>
                </div>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_GALLERY),
                    currentTabCheck(TAB_CURRENT_IMAGE)
                ].join(' ')}
                     onClick={() => {
                         changeTabLink(TAB_GALLERY)
                     }}
                >
                    <span> Gallery </span>
                </div>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_SKILLS)
                ].join(' ')}
                     onClick={() => {
                         changeTabLink(TAB_SKILLS)
                     }}
                >
                    <span> Skills </span>
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile__Tabs;
