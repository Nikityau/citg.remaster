import React from 'react';

import SliderUi from "slider_ui/Slider.ui";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";
import {SLIDER_GRID_1_2} from "slider_ui/_slider_presets_option/Slider_presets";

import Award from "components/Pages/Home.page/&blocks/Awards/&blocks/Award/Award";

const AwardsTablet = ({awards, onClick}) => {

    return (
        <div className={'awards__awards-box_tablet'}>
            {
                awards && awards?.length > 0 &&
                <SliderUi
                    classNames={[
                        'awards_rounded_corner',
                        'awards_back_blackout'
                    ]}
                    sliderOptionsPreset={SLIDER_GRID_1_2}>
                    {
                        awards?.map((award, index) =>
                            <SliderUi__defaultSlide key={award?.id}>
                                <Award
                                    classNames={[
                                        'awards_rounded_corner'
                                    ]}
                                    imgSrc={award?.certificate}
                                    onClick={onClick}
                                    index={index}
                                />
                            </SliderUi__defaultSlide>
                        )
                    }
                </SliderUi>
            }
        </div>
    );
};

export default AwardsTablet;