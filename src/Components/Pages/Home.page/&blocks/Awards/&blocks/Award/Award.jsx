import React from 'react';

import './Award.scss'

const Award = ({imgSrc, classNames, index, onClick}) => {
    return (
        <div className={['award',
            classNames && classNames?.join(' ')].join(' ')}
             style={{backgroundImage: `url(${imgSrc})`}}
             onClick={() => {
                 onClick(index)
             }}
             data-award-index={index}
        >
        </div>
    );
};

export default Award;