import React from 'react';
import {Link} from "react-router-dom";

import {TAB_GALLERY} from "components/Pages/Member.page/@mobile/Member.page@mobile";

import {CURRENT_PROJECT_LINK} from "components/AppRouter/AppRouter.links";
import {transformDryIdLink} from "utils/transformDryIdLink";

import SliderUi from "slider_ui/Slider.ui";
import {SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import './Member.page@mobile__aboutMe.scss'

const MemberPageMobile__aboutMe = (
    {
        participateInProjects,
        myWorks,
        changeTab
    }
) => {
    return (
        <div className={'membile__about-me-window'}>
            <div className={'membile__participated-in-projects membile__window-block-presets'}>
                <div className={'membile__pip-title membile__window-title'}>
                    <h3> Участие в проектах </h3>
                </div>
                <div className={'membile__projects'}>
                    {
                        participateInProjects && participateInProjects?.length !== 0 &&
                        <SliderUi
                            sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE}
                        >
                            {
                                participateInProjects?.map(project =>
                                    <SliderUi__defaultSlide key={project?.id}>
                                        <div className={'membile__project'}
                                             style={{
                                                 backgroundImage: `url(${project?.project_img})`
                                             }}
                                        >
                                            <Link to={transformDryIdLink(CURRENT_PROJECT_LINK, project?.id)}>
                                            </Link>
                                        </div>
                                    </SliderUi__defaultSlide>
                                )
                            }
                        </SliderUi>
                    }
                </div>
            </div>
            <div className={'membile__about-me-my-works membile__window-block-presets'}>
                <div className={'membile__about-me-my-works-title membile__window-title'}>
                    <h3> Мои работы </h3>
                </div>
                <div className={'membile__about-me-works'}>
                    {
                        myWorks?.map((work, index) => {
                            if (index < 3) {
                                return (
                                    <div className={[
                                        'membile__about-me-work',
                                        index === 2
                                            ? 'membile__about-me-work_full'
                                            : 'membile__about-me-work_half'
                                    ].join(' ')}
                                         key={work?.id}
                                         style={{
                                             backgroundImage: `url(${work?.main_img})`
                                         }}
                                         onClick={changeTab(TAB_GALLERY)}
                                    >
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className={'membile__about-me-my-works-button'}
                    onClick={changeTab(TAB_GALLERY)}
                >
                    <span> load more </span>
                </div>
            </div>
        </div>
    );
};

export default MemberPageMobile__aboutMe;