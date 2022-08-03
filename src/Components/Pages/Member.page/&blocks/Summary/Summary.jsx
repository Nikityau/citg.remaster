import React from 'react';

import './Summary.scss'

import arrow_img from 'assets/icons/arrow-circle.svg'

const Summary = ({ link }) => {
    return (
        <div className={'summary'}>
            <a href={link}>
                <div className={'summary-text'}>
                    <span> Резюме </span>
                </div>
                <div className={'summary-img'}>
                    <img src={arrow_img} alt={'image'}/>
                </div>
            </a>
        </div>
    );
};

export default Summary;