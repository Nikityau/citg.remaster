import React, {useEffect, useState} from 'react';

import Award from "components/Pages/Home.page/&blocks/Awards/&blocks/Award/Award";

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import { SLIDER_DEFAULT_SLIDE } from "slider_ui/_slider_presets_option/Slider_presets";

import CITG_API from "src/API/CITG_API.controller";

import './Awards.scss'

const Awards = () => {

    const [awards, setAwards] = useState([])

    useEffect(() => {
        (async () => {
            const response = await CITG_API.getMemberCertificates()
            setAwards(response)
        })()
    }, [])

    return (
        <div className={'awards'}>
            <div className={'awards__container app-container'}>
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
            </div>
        </div>
    );
};

export default Awards;