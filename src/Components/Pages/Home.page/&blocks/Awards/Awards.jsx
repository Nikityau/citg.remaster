import React, {useContext, useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";

import Award from "components/Pages/Home.page/&blocks/Awards/&blocks/Award/Award";

import AwardsTablet from "components/Pages/Home.page/&blocks/Awards/@tablet/Awards@tablet";

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {SLIDER_DEFAULT_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";

import PhotoViewerUi from "ui/PhotoViewer.ui/PhotoViewer.ui";

import CITG_API from "src/API/CITG_API.controller";

import {whatRender} from "components/Utils.Compoents/whatRender";

import {AppContext} from "components/App/App";

import EventObserver from "src/Controllers/eventObserver/eventObserver";

import './Awards.scss'
import './_back_gradient/Awards_back_gradient_red.scss'
import './_rounded_cornenr/Awards_rounded_conrner.scss'
import './_back_blackout/Awards_back_blackout.scss'

const cbCollection = []

const Awards = () => {

    const appContext = useContext(AppContext)

    const [awards, setAwards] = useState([])
    const [evObserver] = useState(new EventObserver())

    useEffect(() => {
        (async () => {
            const response = await CITG_API.getMemberCertificates()
            setAwards(response)
        })()
    }, [])

    const desktop = <div className={'awards__container app-container'}>
        <div className={'awards__title'}>
            <h3> Награды </h3>
        </div>
        <div className={'awards__awards-box'}>
            {
                awards && awards.length !== 0 &&
                <SliderUi sliderOptionsPreset={SLIDER_DEFAULT_SLIDE}>
                    {
                        awards?.map((award, index) =>
                            <SliderUi__defaultSlide key={award.id}>
                                <Award
                                    imgSrc={award.certificate}
                                    index={index}
                                    onClick={evObserver?.cbInvokes}
                                />
                            </SliderUi__defaultSlide>
                        )
                    }
                </SliderUi>
            }

        </div>
        <AwardsTablet
            awards={awards}
        />
    </div>


    const tablet = <div className={'awards__container app-container'}>
        <div className={'awards__title'}>
            <h3> Награды </h3>
        </div>
        <AwardsTablet
            awards={awards}
            onClick={evObserver?.cbInvokes}
        />
    </div>

    return (
        <>
            <div
                className={[
                    'awards',
                    appContext?.gradientSwitch &&
                    (isSafari
                        ? 'awards_back_gradient_red_safari'
                        : 'awards_back_gradient_red')
                ].join(' ')}>
                {
                    whatRender(desktop, tablet, tablet)
                }
            </div>
            <PhotoViewerUi
                images={awards}
                classNames={[
                    'awards-photo']}
                galleryId={'awards-photo-viewer'}
                innerImgClassName={'awards-img-inner-viewer'}
                evController={evObserver}
            />
        </>
    );
};

export default Awards;