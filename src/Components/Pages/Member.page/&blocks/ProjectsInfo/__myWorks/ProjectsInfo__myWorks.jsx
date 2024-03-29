import React from 'react';
import {Link, useParams} from "react-router-dom";

import './ProjectsInfo__myWorks.scss'
import {TEAM_MEMBER_LINK, TEAM_MEMBER_WORK_LINK} from "components/AppRouter/AppRouter.links";
import {transformDryIdLink} from "utils/transformDryIdLink";

const ProjectsInfo__MyWorks = ({myWorks}) => {

    const { memberId } = useParams()

    const getTemplateNumber = (index) => {
        if (index % 10 === 1 || index % 10 === 0) return 'projects-info__my-works-template-1'
        if (index % 10 === 2) return 'projects-info__my-works-template-2'
        if (index % 10 === 3) return 'projects-info__my-works-template-3'
        if (index % 10 === 4) return 'projects-info__my-works-template-4'
        if (index % 10 === 5) return 'projects-info__my-works-template-5'
        if (index % 10 === 6) return 'projects-info__my-works-template-6'
        if (index % 10 === 7) return 'projects-info__my-works-template-7'
        if (index % 10 === 8) return 'projects-info__my-works-template-8'
        if (index % 10 === 9) return 'projects-info__my-works-template-9'


        return ''
    }

    return (
        <div className={'projects-info__my-works'}>
            {
                myWorks &&
                <>
                    <div className={'projects-info__my-works-title'}>
                        <h3> Мои работы </h3>
                    </div>
                    <div className={'projects-info__my-works-container'}>
                        {
                            myWorks?.map((work, index) =>
                                <div
                                    key={work?.id}
                                    className={[
                                        'projects-info__my-works-default-template',
                                        getTemplateNumber(index + 1)
                                    ].join(' ')}
                                    style={{
                                        backgroundImage: `url(${work?.main_img})`
                                    }}
                                >
                                    <Link to={transformDryIdLink(TEAM_MEMBER_WORK_LINK, [memberId, work?.id])}>

                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default ProjectsInfo__MyWorks;