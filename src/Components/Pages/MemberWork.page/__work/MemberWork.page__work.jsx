import React, {useEffect, useState} from 'react';

import './MemberWork.page__work.scss'

const MemberWorkPage__Work = ({ currentWork }) => {

    const [currentImg, setCurrentImg] = useState(currentWork?.main_img || '')

    useEffect(() => {
        setCurrentImg(currentWork?.main_img)
    }, [currentWork])

    const getWorkRefModifier = (index) => {
        if(index % 5 === 0) return 'member-work-page__work-ref_full_size'
        return 'member-work-page__work-ref_half_size'
    }

    const changeCurrentImg = (img) => {
        setCurrentImg(img)
    }

    return (
        <div className={'member-work-page__work'}>
            <div className={'member-work-page__current-image'}
                style={{
                    backgroundImage: `url(${currentImg})`
                }}
            >
            </div>
            <div className={'member-work-page__images-list'}>
                {
                    currentWork?.project_refs?.map((ref, index) =>
                        <div
                            key={ref?.id}
                            className={[
                                'member-work-page__work-ref',
                                getWorkRefModifier(index + 1)
                            ].join(' ')}
                            style={{
                                backgroundImage: `url(${currentImg === ref?.imgSrc 
                                    ? currentWork?.main_img : ref?.imgSrc})`
                            }}
                            onClick={() => {
                                changeCurrentImg(currentImg === ref?.imgSrc
                                    ? currentWork?.main_img : ref?.imgSrc)
                            }}
                        >

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MemberWorkPage__Work;