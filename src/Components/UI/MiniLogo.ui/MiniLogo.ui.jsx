import React from 'react';
import {Link} from "react-router-dom";

import {HOME_LINK} from "components/AppRouter/AppRouter.links";
import {MINI_LOGO_UI_ALIGN_BOTTOM, MINI_LOGO_UI_ALIGN_CENTER} from "ui/MiniLogo.ui/_align/MiniLogo.ui__align.type";
import {goUp} from "utils/goUp";

import './MiniLogo.ui.scss'
import './_align/MiniLogo.ui__align_bottom.scss'
import './_align/MiniLogo.ui_align_center.scss'

import logo_img from 'src/assets/icons/favicon/logo.svg'

const MiniLogoUi = ({ align ,classNames }) => {

    const getAlign = () => {
        switch (align) {
            case MINI_LOGO_UI_ALIGN_CENTER:
                return 'mini-logo-ui_align_center'
            case MINI_LOGO_UI_ALIGN_BOTTOM:
                return 'mini-logo-ui_align_bottom'
            default:
                return 'mini-logo-ui_align_center'
        }
    }

    return (
        <div className={['mini-logo-ui',
            classNames && classNames?.join(' '),
            getAlign()
        ].join(' ')}
             onClick={goUp}
        >
            <Link to={HOME_LINK}>
                <div className={'mini-logo-ui__img-container'}>
                    <img className={'mini-logo-ui__img'} src={logo_img} alt={'logo'}/>
                </div>
                <div className={'mini-logo-ui__logo-title-container'}>
                    <h2 className={'mini-logo-ui__title'}>CiTG</h2>
                </div>
            </Link>
        </div>
    );
};

export default MiniLogoUi;