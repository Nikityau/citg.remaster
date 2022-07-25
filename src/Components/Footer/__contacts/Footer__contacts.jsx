import React from 'react';

import EmailUi from "ui/Email.ui/Email.ui";
import {EMAIL_UI_JUSTIFY_RIGHT} from "ui/Email.ui/_justify/Email.ui_justify";

import './Footer__contacts.scss'

const Footer__Contacts = ({ classNames }) => {
    return (
        <div className={['footer__contacts',
            classNames && classNames?.join(' ')].join(' ')}>
            <div className={'footer__contacts-title'}>
                <h4> Контакты </h4>
            </div>
           <div className={'footer__wrapper'}>
               <div className={'footer__contacts-antique-phone'}>
                   <span> +123.456.789 </span>
               </div>
               <div className={'footer__contacts-modern-phone'}>
                <span data-soc-nets={'telegram&whatsapp'}>
                    telegram & whatsapp
                </span>
                   <span>
                    +7 999 999 99 99
                </span>
               </div>
           </div>
            <div className={'footer__contacts-email'}>
                <EmailUi justify={EMAIL_UI_JUSTIFY_RIGHT}/>
            </div>
        </div>
    );
};

export default Footer__Contacts;