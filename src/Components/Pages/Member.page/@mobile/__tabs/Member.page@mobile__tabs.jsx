import React from 'react';

import {
    TAB_ABOUT_ME,
    TAB_CURRENT_IMAGE,
    TAB_GALLERY,
    TAB_SKILLS
} from "components/Pages/Member.page/@mobile/Member.page@mobile";

import './Member.page@mobile__tabs.scss'
import '../_current_tab/Member.page@moible_current_tab.scss'

const MemberPageMobile__Tabs = ({currentTab, changeTab}) => {

    const currentTabCheck = (tab) => {
        if (tab === currentTab) {
            return 'member-page_mobile_current_tab'
        }

        return ''
    }

    return (
        <div className={'membile__tabs-container'}>
            <div className={'membile__tabs-links'}>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_ABOUT_ME)
                ].join(' ')}
                     onClick={changeTab(TAB_ABOUT_ME)}
                >
                    <span> About me </span>
                </div>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_GALLERY),
                    currentTabCheck(TAB_CURRENT_IMAGE)
                ].join(' ')}
                     onClick={changeTab(TAB_GALLERY)}
                >
                    <span> Gallery </span>
                </div>
                <div className={[
                    'membile__tab',
                    currentTabCheck(TAB_SKILLS)
                ].join(' ')}
                     onClick={changeTab(TAB_SKILLS)}
                >
                    <span> Skills </span>
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile__Tabs;
