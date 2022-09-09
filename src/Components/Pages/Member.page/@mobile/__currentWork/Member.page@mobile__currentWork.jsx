import React, {useEffect, useState} from 'react';

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";

import PhotoViewerUi from "ui/PhotoViewer.ui/PhotoViewer.ui";

import EventObserver from "src/Controllers/eventObserver/eventObserver";

import './Member.page@mobile__currentWork.scss'

import arrow_img from 'assets/icons/futuristic-arrow.svg'

const MemberPageMobile__currentWork = ({member, currentWork, setWork}) => {

    const [nextWork, setNextWork] = useState({})
    const [evController] = useState(new EventObserver())

    const getNextWork = () => {
        if (!Array.isArray(member?.member_works)) return

        const nextWorkIndex = member?.member_works?.findIndex(el => {
            return el?.id == currentWork?.id
        })

        if (nextWorkIndex === -1 ||
            nextWorkIndex === member?.member_works?.length - 1) {
            return member?.member_works[0]
        }

        return member?.member_works[nextWorkIndex + 1];
    }

    const onClick = (index) => {
        evController?.cbInvokes(index)
    }

    const getImgArr = () => {
        if(!currentWork?.project_refs) return []

        const arr = [
            {
                id: currentWork?.id,
                imgSrc: currentWork?.main_img
            },
            ...currentWork?.project_refs
        ]

        return arr;
    }


    useEffect(() => {
        setNextWork(getNextWork())
    }, [member, currentWork])

    return (
        <>
            <div className={'membile__current-work'}>
                <div className={'membile__refs-slider'}>
                    {
                        currentWork && currentWork?.project_refs && currentWork?.project_refs?.length !== 0 &&
                        <SliderUi
                            sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE}
                        >
                            <SliderUi__defaultSlide key={currentWork?.id}>
                                <div className={'membile__ref'}
                                     style={{
                                         backgroundImage: `url(${currentWork?.main_img})`
                                     }}
                                     data-screenshots-member-works-mob-v-index={0}
                                     onClick={() => {
                                         onClick(0)
                                     }}
                                >
                                </div>
                            </SliderUi__defaultSlide>
                            {
                                currentWork?.project_refs?.map((ref, index) =>
                                    <SliderUi__defaultSlide key={ref?.id}>
                                        <div className={'membile__ref'}
                                             style={{
                                                 backgroundImage: `url(${ref?.imgSrc})`
                                             }}
                                             data-screenshots-member-works-mob-v-index={index + 1}
                                             onClick={() => {
                                                 onClick(index + 1)
                                             }}
                                        >
                                        </div>
                                    </SliderUi__defaultSlide>
                                )
                            }

                        </SliderUi>
                    }
                </div>
                <div className={'membile__work-about'}>
                    <div className={'membile__work-about-title'}>
                        <h3> About Work </h3>
                    </div>
                    <div className={'membile__work-about-description'}>
                        <p> {currentWork?.project_description} </p>
                    </div>
                </div>
                <div className={'membile__work-software-used'}>
                    {
                        currentWork?.software_used?.map(soft =>
                            <div className={'membile__work-software'}
                                 key={soft?.id}
                            >
                                <div className={'membile__work-software-img'}>
                                    <img src={soft?.software_icon} alt={'img'}/>
                                </div>
                                <div className={'membile__work-software-title'}>
                                    <span> {soft?.software_name} </span>
                                </div>
                                <div className={'membile__work-software-plug'}>

                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={'membile__next-work'}
                     style={{
                         backgroundImage: `url(${nextWork?.main_img})`
                     }}
                     onClick={() => setWork(nextWork)}
                >
                    <div className={'membile__next-work-img'}>
                        <img src={arrow_img} alt={'img'}/>
                    </div>
                    <div className={'membile__next-work-text'}>
                        <span> Next Work </span>
                    </div>
                </div>
            </div>
            <PhotoViewerUi
                images={getImgArr()}
                imgPropSrcName={'imgSrc'}
                evController={evController}
            />
        </>
    );
};

export default MemberPageMobile__currentWork;