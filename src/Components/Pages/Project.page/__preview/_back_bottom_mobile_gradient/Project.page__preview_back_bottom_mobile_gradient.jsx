import React from 'react';
import {isSafari} from "react-device-detect";

import './Project.page__preview_back_bottom_mobile_gradient.scss'

const ProjectPagePreviewBackBottomMobileGradient = () => {
    return (
        <div className={[
            isSafari
                ? 'project-page__preview_back_bottom_mobile_gradient_safari'
                : 'project-page__preview_back_bottom_mobile_gradient'
        ].join(' ')}>

        </div>
    );
};

export default ProjectPagePreviewBackBottomMobileGradient;