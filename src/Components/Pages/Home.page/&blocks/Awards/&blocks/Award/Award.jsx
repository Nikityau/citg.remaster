import React from 'react';

import './Award.scss'

const Award = ({ imgSrc ,classNames }) => {
    return (
        <div className={['award',
            classNames && classNames?.join(' ')].join(' ')}
            style={{ backgroundImage: `url(${imgSrc})` }}
        >
        </div>
    );
};

export default Award;