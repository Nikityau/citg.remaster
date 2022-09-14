import React, {useEffect, useState} from 'react';

import './ArrowUp.scss'

import arrow_up_img from 'assets/icons/arrow-up.svg'
import ArrowUpController from "components/Footer/&blocks/ArrowUp/controller/ArrowUp.controller";

const ArrowUp = ({ classNames }) => {

    const [arrowController] = useState(new ArrowUpController('arrow-up'))

    useEffect(() => {
        arrowController.init()
        arrowController.setScrollEv()

        return () => {
            arrowController.removeScrollEv()
        }
    }, [])

    const scrollUp = () => {
        document.documentElement.style.scrollBehavior = 'smooth'
        window.scrollTo(0,0)
    }

    return (
        <div className={['arrow-up',
            classNames && classNames?.join(' ')
        ].join(' ')}
            onClick={scrollUp}
        >
            <div className={'arrow-up__container'}>
                <img src={arrow_up_img} alt={'arrow-up-img'}/>
            </div>
        </div>
    );
};

export default ArrowUp;