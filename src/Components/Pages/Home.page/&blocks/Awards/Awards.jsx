import React, {useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";

import Award from "components/Pages/Home.page/&blocks/Awards/&blocks/Award/Award";

import AwardsTablet from "components/Pages/Home.page/&blocks/Awards/@tablet/Awards@tablet";

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {SLIDER_DEFAULT_SLIDE} from "slider_ui/_slider_presets_option/Slider_presets";

import CITG_API from "src/API/CITG_API.controller";

import {whatRender} from "components/Utils.Compoents/whatRender";

import './Awards.scss'
import './_back_gradient/Awards_back_gradient_red.scss'
import './_rounded_cornenr/Awards_rounded_conrner.scss'
import './_back_blackout/Awards_back_blackout.scss'


const Awards = () => {

    const [awards, setAwards] = useState([])

    const desktop = <div className={'awards__container app-container'}>
        <div className={'awards__title'}>
            <h3> Награды </h3>
        </div>
        <div className={'awards__awards-box'}>
            {
                awards && awards.length !== 0 &&
                <SliderUi sliderOptionsPreset={SLIDER_DEFAULT_SLIDE}>
                    {
                        awards?.map(award =>
                            <SliderUi__defaultSlide key={award.id}>
                                <Award
                                    imgSrc={award.certificate}
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
        />
    </div>

    useEffect(() => {
        (async () => {
            const response = await CITG_API.getMemberCertificates()
            setAwards(response)
        })()
    }, [])

    return (
        <div
            className={[
                'awards',
                isSafari
                    ? 'awards_back_gradient_red_safari'
                    : 'awards_back_gradient_red'
            ].join(' ')}>
            {
                whatRender(desktop, tablet, tablet)
            }
        </div>
    );
};

export default Awards;