import React from 'react';

import {
    EMAIL_UI_JUSTIFY_CENTER,
    EMAIL_UI_JUSTIFY_LEFT,
    EMAIL_UI_JUSTIFY_RIGHT
} from "ui/Email.ui/_justify/Email.ui_justify";

import './Email.ui.scss'

import './_justify/Email.ui_justify_center.scss'
import './_justify/Email.ui_justify_left.scss'
import './_justify/Email.ui_justify_right.scss'

const EmailUi = ({ justify,classNames }) => {

    const getJustify = () => {
        switch (justify) {
            case EMAIL_UI_JUSTIFY_CENTER:
                return 'email-ui_justify_center'
            case EMAIL_UI_JUSTIFY_LEFT:
                return 'email-ui_justify_left'
            case EMAIL_UI_JUSTIFY_RIGHT:
                return 'email-ui_justify_right'
            default:
                return 'email-ui_justify_center'
        }
    }

    return (
        <div className={['email-ui',
            classNames && classNames?.join(' '),
            getJustify()
        ].join(' ')}>
            <a className={'email-ui__link'} href={'mailto:pizzdec@mail.com'}>
                <span className={'email-ui__text'}>
                    contact us
                </span>
            </a>
        </div>
    );
};

export default EmailUi;