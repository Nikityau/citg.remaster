import React, {useEffect, useState} from 'react';

import './MemberWork.page__work.scss'

import open_up_img from 'assets/images/memberWorkPage/open-up.svg'
import white_arrow_img from 'assets/images/memberWorkPage/white-arrow.svg'
import PhotoViewerUi from "ui/PhotoViewer.ui/PhotoViewer.ui";
import EventObserver from "src/Controllers/eventObserver/eventObserver";

const MOVE_DIRECTION_LEFT = 'MOVE_DIRECTION_LEFT'
const MOVE_DIRECTION_RIGHT = 'MOVE_DIRECTION_RIGHT'

const MemberWorkPage__Work = ({currentWork}) => {

    const [currentImg, setCurrentImg] = useState(currentWork?.main_img || '')
    const [evController] = useState(new EventObserver())

    useEffect(() => {
        setCurrentImg(currentWork?.main_img)
    }, [currentWork])

    const getWorkRefModifier = (index) => {
        if (index % 5 === 0) return 'member-work-page__work-ref_full_size'
        return 'member-work-page__work-ref_half_size'
    }

    const changeCurrentImg = (img) => {
        setCurrentImg(img)
    }

    const openUp = () => {
        evController?.cbInvokes(0)
    }

    const nextImgRef = (direction) => {
        const currentImgInd = currentWork?.project_refs?.findIndex(el => el?.imgSrc == currentImg)

        const refsLength = currentWork?.project_refs.length

        if (currentImgInd === -1) {
            // array[0] || array[length - 1]
            changeByDirection(
                direction,
                currentWork?.project_refs[refsLength - 1].imgSrc,
                currentWork?.project_refs[0].imgSrc
            )

            return;
        }

        if (currentImgInd === 0) {
            // array[main] || array[i + 1]
            changeByDirection(
                direction,
                currentWork?.main_img,
                currentWork?.project_refs[currentImgInd + 1]?.imgSrc
            )

            return;
        }

        if (currentImgInd === refsLength - 1) {
            // array[main] || array[i - 1]
            changeByDirection(
                direction,
                currentWork?.project_refs[currentImgInd - 1]?.imgSrc,
                currentWork?.main_img
            )

            return;
        }

        changeByDirection(
            direction,
            currentWork?.project_refs[currentImgInd - 1]?.imgSrc,
            currentWork?.project_refs[currentImgInd + 1]?.imgSrc
        )
    }

    const changeByDirection = (direction, left, right) => {
        if (direction === MOVE_DIRECTION_LEFT) {
            setCurrentImg(left)

            return
        }
        if (direction === MOVE_DIRECTION_RIGHT) {
            setCurrentImg(right)
        }
    }

    const getArrPhoto = () => {
        if(!currentImg) return

        const arr = [
            {
                id: currentWork?.id || '1',
                imgSrc: currentImg || ''
            }
        ]

        return arr
    }


    return (
        <>
            <div className={'member-work-page__work'}>
                <div className={'member-work-page__current-image'}
                     style={{
                         backgroundImage: `url(${currentImg})`
                     }}
                >

                    <div className={'member-work-page__control-panel'}>
                        <div className={'member-work-page__left-arrow'}
                             onClick={() => {
                                 nextImgRef(MOVE_DIRECTION_LEFT)
                             }}
                        >
                            <img src={white_arrow_img} alt={'arrow'}/>
                        </div>
                        <div className={'member-work-page__open-up'}
                             onClick={() => {
                                 openUp()
                             }}
                        >
                            <img src={open_up_img} alt={'open-up'}/>
                        </div>
                        <div className={'member-work-page__right-arrow'}
                             onClick={() => {
                                 nextImgRef(MOVE_DIRECTION_RIGHT)
                             }}
                        >
                            <img src={white_arrow_img} alt={'arrow'}/>
                        </div>
                    </div>
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
            <PhotoViewerUi
                images={getArrPhoto()}
                imgPropSrcName={'imgSrc'}
                evController={evController}
            />
        </>
    );
};

export default MemberWorkPage__Work;