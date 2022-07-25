import React from 'react';

import MiniLogoUi from "ui/MiniLogo.ui/MiniLogo.ui";
import {MINI_LOGO_UI_ALIGN_BOTTOM} from "ui/MiniLogo.ui/_align/MiniLogo.ui__align.type";

import './Footer__citg.scss'


const Footer__Citg = () => {
    return (
      <div className={'footer__citg'}>
          <MiniLogoUi align={MINI_LOGO_UI_ALIGN_BOTTOM}/>
          <div className={'footer__law-text'}>
              <span> © СiTG 2022 / Все права защищены. </span>
          </div>
      </div>
    );
};

export default Footer__Citg;