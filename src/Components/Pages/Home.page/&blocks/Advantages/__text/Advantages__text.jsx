import React from 'react';

import './Advantages__text.scss'

const Advantages__Text = ({ classNames }) => {
    return (
        <div className={['advantages__text', classNames && classNames?.join(' ')].join(' ')}>
            <div className={'advantages__text-title'}>
                <h3> Преимущества </h3>
            </div>
            <div className={'advantages__text-subtitle'}>
                <h5> Здесь действия так же выжны, как и эмоции </h5>
            </div>
            <div className={'advantages__text-other'}>
                <p>
                    Под руководством специалистов, выступающих в качестве менторов,
                    все заинтересованные ребята проходят самые разные курсы обучения.
                    После этого Центр подключает их к текущим проектам или дает новые.
                </p>
                <p>
                    На текущий момент Центр IT-Притяжения предоставляет помощь в обучении по следующим специальностям:
                </p>
            </div>
        </div>
    );
};

export default Advantages__Text;