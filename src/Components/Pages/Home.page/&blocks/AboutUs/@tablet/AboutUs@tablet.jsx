import React from 'react';
import {isSafari} from "react-device-detect";

const AboutUsTablet = ({backImg}) => {
    return (
        <div
            className={[
                'about-us_tablet',
                isSafari
                    ?  'about-us_back_blue_gradient_safari'
                    :  'about-us_back_blue_gradient',
            ].join(' ')}
            style={{
                backgroundImage: `url(${backImg})`
            }}
        >
        </div>
    );
};

export default AboutUsTablet;