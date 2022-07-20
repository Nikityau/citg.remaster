import React from 'react';

import './Email.ui.scss'

const EmailUi = ({ classNames }) => {
    return (
        <div className={['email-ui', classNames && classNames?.join(' ')].join(' ')}>
            <a className={'email-ui__link'} href={'mailto:pizzdec@mail.com'}>
                <span className={'email-ui__text'}>
                    contact us
                </span>
            </a>
        </div>
    );
};

export default EmailUi;