import React from 'react';

const AboutUsTablet = ({ backImg }) => {
    return (
        <div className={'about-us_tablet about-us_back_blue_gradient'}
            style={{
                backgroundImage: `url(${ backImg })`
            }}
        >
        </div>
    );
};

export default AboutUsTablet;