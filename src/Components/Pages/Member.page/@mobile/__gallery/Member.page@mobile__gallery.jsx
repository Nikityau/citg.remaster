import React from 'react';

import {TAB_CURRENT_IMAGE} from "components/Pages/Member.page/@mobile/Member.page@mobile";

import './Member.page@mobile__gallery.scss'

const MemberPageMobile__Gallery = ({myWorks, setWork, changeTab}) => {

    const getGridBlockPreset = (index) => {
        if(index % 10 === 0) return 'membile__work-preset-1_type_4_4'
        if(index % 10 === 1) return 'membile__work-preset-2_type_4_5'
        if(index % 10 === 2) return 'membile__work-preset-3_type_4_1'
        if(index % 10 === 3) return 'membile__work-preset-4_type_8_3'
        if(index % 10 === 4) return 'membile__work-preset-5_type_5_3'
        if(index % 10 === 5) return 'membile__work-preset-6_type_3_3'
        if(index % 10 === 6) return 'membile__work-preset-7_type_3_3'
        if(index % 10 === 7) return 'membile__work-preset-8_type_5_3'
        if(index % 10 === 8) return 'membile__work-preset-9_type_8_2'
        if(index % 10 === 9) return 'membile__work-preset-10_type_8_1'

        return ''
    }

    return (
        <div className={'membile__my-works'}>
            {
                myWorks?.map((work, index) =>
                    <div className={[
                        'membile__work',
                        getGridBlockPreset(index)
                    ].join(' ')}
                         onClick={() => {
                             setWork(work)
                             changeTab(TAB_CURRENT_IMAGE)()
                         }}
                         key={work?.id}
                         style={{
                             backgroundImage: `url(${work?.main_img})`
                         }}
                    >
                    </div>
                )
            }
        </div>
    );
};

export default MemberPageMobile__Gallery;