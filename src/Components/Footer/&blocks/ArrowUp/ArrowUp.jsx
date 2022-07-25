import React from 'react';

import './ArrowUp.scss'

import arrow_up_img from 'assets/icons/arrow-up.svg'

const ArrowUp = ({ classNames }) => {
    return (
        <div className={['arrow-up',
            classNames && classNames?.join(' ')
        ].join(' ')}>
            <div className={'arrow-up__container'}>
                <img src={arrow_up_img} alt={'arrow-up-img'}/>
            </div>
        </div>
    );
};

export default ArrowUp;