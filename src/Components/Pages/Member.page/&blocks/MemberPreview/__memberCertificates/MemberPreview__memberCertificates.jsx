import React from 'react';

import SliderUi from "slider_ui/Slider.ui";
import {
    SLIDER_DEFAULT_SLIDE,
    SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE
} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import './MemberPreview__memberCertificates.scss'
import './_back_black/MemberPreview__memberCertificates_back_black.scss'

const MemberPreview__MemberCertificates = ({ certificates }) => {
    return (
        <div className={'member-preview__certificates'}>
            <div className={'member-preview__certificates-title'}>
                <h3> Достижения и награды </h3>
            </div>
            <div className={'member-preview__certificates-container'}>
                {
                    certificates && certificates?.length !== 0 &&
                    <SliderUi classNames={['member-preview__member-certificates_back_black']}
                              sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE}
                    >
                        {
                            certificates?.map(certificate =>
                                <SliderUi__defaultSlide key={certificate?.id}>
                                    <div className={'member-preview__certificate'}
                                         style={{
                                             backgroundImage: `url(${certificate?.certificate})`
                                         }}
                                    >
                                    </div>
                                </SliderUi__defaultSlide>
                            )
                        }
                    </SliderUi>
                }
            </div>
        </div>
    );
};

export default MemberPreview__MemberCertificates;