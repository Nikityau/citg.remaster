import React from 'react';

import './MiniArticleTitle.ui.scss'

const MiniArticleTitleUi = ({ title, number,classNames }) => {
    return (
        <div className={['mini-article-title-ui',
            classNames && classNames?.join(' ')
        ].join(' ')}>
            <div className={'mini-logo-ui__number'}>
                <h3> { number } </h3>
            </div>
            <div className={'mini-article-title-ui__title'}>
                <h3> { title } </h3>
            </div>
        </div>
    );
};

export default MiniArticleTitleUi;