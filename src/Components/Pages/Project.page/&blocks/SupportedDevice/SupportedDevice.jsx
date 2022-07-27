import React from 'react';

import './SupportedDevice.scss'

const SupportedDevice = ({ deviceImg, deviceName, deviceVersion }) => {
    return (
        <div className={'supported-device'}>
            <div className={'supported-device__img'}>
                <img src={deviceImg} alt={'device-icon'}/>
            </div>
            <div className={'supported-device__device-info'}>
                <span> { deviceName } { deviceVersion } </span>
            </div>
        </div>
    );
};

export default SupportedDevice;