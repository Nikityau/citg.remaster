import React from 'react';

import './Enter__title.scss'

const EnterTitle = ({ classNames }) => {
    return (
        <div className={['enter__title', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'enter__main-title'}>
                <h2>Center IT</h2>
                <h2>Gravity</h2>
            </div>
            <div className={'enter__subtitle'}>
                <h5>Мощная среда для твоего развития</h5>
            </div>
        </div>
    );
};

export default EnterTitle;