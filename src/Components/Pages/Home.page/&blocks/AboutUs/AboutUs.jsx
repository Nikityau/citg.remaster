import React from 'react';

import AboutUs__Img from "./__img/AboutUs__img";
import AboutUs__text from "./__text/AboutUs__text";
import AboutUs__Button from "./__button/AboutUs__button";

import AboutUsTablet from "components/Pages/Home.page/&blocks/AboutUs/@tablet/AboutUs@tablet";

import PageLineUi from "ui/PageLine.ui/PageLine.ui";

import './AboutUs.scss'
import './_pos_top_left/AboutUs_pos_top_left.scss'
import './_back_gradients/AboutUs_back_purple_gradient.scss'
import './_back_gradients/AboutUs_back_orange_gradient.scss'
import './_back_gradients/AboutUs_back_blue_gradient.scss'

import img from 'assets/images/Slider/_1.png'

const AboutUs = () => {
    return (
        <div className={'about-us about-us_back_purple_gradient about-us_back_orange_gradient'}>
            <AboutUsTablet backImg={img}/>
            <div className={'about-us__container app-container'}>
                <PageLineUi pageNum={'03'}
                            classNames={['about-us_pos_top_left']}/>
                <div className={'about-us__description-side'}>
                  <div className={'about-us__description-container'}>
                      <AboutUs__text/>
                      <div className={'about-us__button-container'}>
                          <AboutUs__Button/>
                      </div>
                  </div>
                </div>
                <div className={'about-us__photo-side'}>
                    <AboutUs__Img
                        image={img}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;