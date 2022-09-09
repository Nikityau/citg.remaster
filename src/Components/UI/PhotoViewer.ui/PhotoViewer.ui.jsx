import React, {useRef, useState} from 'react';
import LightGallery from "lightgallery/react";

import PhotoViewerUiController from "ui/PhotoViewer.ui/controller/PhotoViewer.ui.controller";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgZoom from 'lightgallery/plugins/zoom';

import 'photoswipe/dist/photoswipe.css'

import './PhotoViewer.ui.scss'

const PhotoViewerUi = ({classNames, images, evController}) => {

    const lgRef = useRef(undefined)
    const [imgController] = useState(new PhotoViewerUiController(lgRef))

    const onInit = (lg) => {
        imgController?.onInit(lg)
        evController?.addCb(imgController?.onOpenByIndex)
    }

    return (
        <div className={[
            'lg-gallery',
            classNames?.join(' ')
        ].join(' ')}
        >
            {
                images &&
                <LightGallery
                    onInit={onInit}
                    plugins={[lgZoom]}
                >
                    {
                        images?.map(img => {
                            return <a href={img.certificate} key={img.id}>
                                <img src={img.certificate}/>
                            </a>
                        })
                    }
                </LightGallery>
            }
        </div>
    );
};

export default PhotoViewerUi;