import React from 'react';

import './AboutUs__text.scss'

const AboutUs__Text = ({ classNames }) => {
    return (
        <div className={['about-us__text',
            classNames && classNames?.join(' ')
        ].join(' ')}>
           <div className={'about-us__text-container'}>
               <div className={'about-us__text-description'}>
                   <p>
                       Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из разных сфер,
                       многие из них являются бывшими учениками. Именно поэтому Центр может позволить себе помощь
                       в обучении в таком количестве профессий. Основные кадры площадки помимо  коммерческой разработки
                       также обладают опытом в сфере обучения. Все ученики Центра, как бывшие,
                       так и текущие являются победителями и призерами множества конкурсов, хакатонов и т.д.
                   </p>
               </div>
           </div>
        </div>
    );
};

export default AboutUs__Text;