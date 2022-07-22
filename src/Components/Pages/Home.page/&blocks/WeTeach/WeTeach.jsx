import React from 'react';

import StudyCase from "./&blocks/StudyCase/StudyCase";

import BackgroundPartyUi from "ui/BackgroundParty.ui/BackgroundParty.ui";

import { weTeach_study_casesPreset } from "components/Pages/Home.page/&blocks/WeTeach/_study_cases.preset/WeTeach_study_cases.preset";


import './WeTeach.scss'

const WeTeach = () => {
    return (
        <div className={'we-teach'}>
            <div className={'we-teach__container'}>
                <div className={'we-teach__examples-box'}>
                    <BackgroundPartyUi/>
                    <div className={'we-teach__title'}>
                        <h3> Мы обучаем </h3>
                    </div>
                    <div className={'we-teach__examples'}>
                        {
                            weTeach_study_casesPreset?.map((studyCase, index) =>
                                <StudyCase
                                    key={studyCase.id}
                                    number={studyCase.number}
                                    studyCase={studyCase.studyCase}
                                    areasOfStudy={studyCase.areasOfStudy}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeTeach;