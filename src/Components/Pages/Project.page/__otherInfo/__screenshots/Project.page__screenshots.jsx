import React, {useState} from 'react';

import SliderUi from "slider_ui/Slider.ui";
import {
    SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE,
    SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE
} from "slider_ui/_slider_presets_option/Slider_presets";
import SliderUi__defaultSlide from "slider_ui/__default-slide/Slider.ui__defaultSlide";

import PhotoViewerUi from "ui/PhotoViewer.ui/PhotoViewer.ui";

import EventObserver from "src/Controllers/eventObserver/eventObserver";

import {whatRender} from "components/Utils.Compoents/whatRender";

import './Project.page__screenshots.scss'

const ProjectPage__Screenshots = ({ project }) => {

    const [evController] = useState(new EventObserver())

    const onClick = (index) => {
        evController?.cbInvokes(index)
    }

    const tablet =  <div className={'project-page__other-screenshots-slider'}>
        {
            project && project.screenshots && project?.screenshots?.length !== 0 &&
            <SliderUi
                sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_SLIDE}
            >
                {
                    project?.screenshots?.map((img, index) =>
                        <SliderUi__defaultSlide key={img?.id}>
                            <div className={'project-page__other-img'}
                                 style={{ backgroundImage:`url(${img?.image})` }}
                                 data-project-screenshot-index={index}
                                 onClick={() => {
                                     onClick(index)
                                 }}
                            >
                            </div>
                        </SliderUi__defaultSlide>
                    )
                }
            </SliderUi>
        }
    </div>

    const mobile =  <div className={'project-page__other-screenshots-slider_mobile'}>
        {
            project && project.screenshots && project?.screenshots?.length !== 0 &&
            <SliderUi
                sliderOptionsPreset={SLIDER_DEFAULT_WITHOUT_GRAYSCALE_1_5_SLIDE}
            >
                {
                    project?.screenshots?.map((img, index) =>
                        <SliderUi__defaultSlide key={img?.id}>
                            <div className={'project-page__other-img'}
                                 style={{ backgroundImage:`url(${img?.image})` }}
                                 data-project-screenshot-mobile-v-index={index}
                                 onClick={() => {
                                     onClick(index)
                                 }}
                            >
                            </div>
                        </SliderUi__defaultSlide>
                    )
                }
            </SliderUi>
        }
    </div>

    const desktop = <>
        { tablet }
        { mobile }
    </>

    return (
        <>
            <div className={'project-page__other-screenshots'}>
                <div className={'project-page__other-screenshots-title'}>
                    <h3> Снимки экрана </h3>
                </div>
                {
                    whatRender(desktop, tablet, mobile)
                }
            </div>
            <PhotoViewerUi
                images={project?.screenshots}
                imgPropSrcName={'image'}
                evController={evController}
            />
        </>
    );
};

export default ProjectPage__Screenshots;