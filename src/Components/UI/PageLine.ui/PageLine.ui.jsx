import React from 'react';

import './PageLine.ui.scss'

const PageLineUi = ({  pageNum ,classNames }) => {
    return (
        <div className={['page-line',
            classNames && classNames?.join(' ')].join(' ')}>
            <div className={'page-line__line'}/>
            <div className={'page-line__num'}>
                <span>{ pageNum || '00' }</span>
            </div>
        </div>
    );
};

export default PageLineUi;