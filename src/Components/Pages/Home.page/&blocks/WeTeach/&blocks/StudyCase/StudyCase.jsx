import React from 'react';

import {PLUG} from "components/Pages/Home.page/&blocks/WeTeach/_study_cases.preset/WeTeach_study_cases.preset";

import './StudeCase.scss'
import './_hide_plug/StudyCase_hide_plug.scss'

const StudyCase = ({ number, studyCase, areasOfStudy,classNames }) => {

    const isPlugHere = () => {
        return areasOfStudy.includes(PLUG)
    }

    return (
        <div className={['study-case', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'study-case__number'}>
                <span> { number } </span>
            </div>
            <div className={'study-case__case'}>
                <h4> { studyCase } </h4>
            </div>
            <div className={['study-case__areas', isPlugHere() ? 'study-case_hide_plug' : ''].join(' ')}>
                {
                    areasOfStudy &&
                    <span> { areasOfStudy?.join(' / ') } </span>
                }
            </div>
        </div>
    );
};

export default StudyCase;