import React, {Suspense} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import LoaderPage from "components/Pages/Loader.page/Loader.page";

import {HOME_LINK, TEAM_MEMBER_LINK, TEAM_LINK, PROJECTS_LINK, CURRENT_PROJECT_LINK, TEAM_MEMBER_WORK_LINK}
    from './AppRouter.links'

const Home = React.lazy(() => import('../Pages/Home.page/Home.page'))
const Projects = React.lazy(() => import('../Pages/Projects.page/Projects.page'))
const Project = React.lazy(() => import('../Pages/Project.page/Project.page'))
const Team = React.lazy(() => import('../Pages/Team.page/Team.page'))
const Member = React.lazy(() => import('../Pages/Member.page/Member.page'))
const MemberWork = React.lazy(() => import('../Pages/MemberWork.page/MemberWork.page'))

const AppRouter = () => {

    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route index path={HOME_LINK} element={<Home/>}/>
                <Route exact path={PROJECTS_LINK} element={<Projects/>}/>
                <Route exact path={CURRENT_PROJECT_LINK} element={<Project/>}/>
                <Route exact path={TEAM_LINK} element={<Team/>}/>
                <Route exact path={TEAM_MEMBER_LINK} element={<Member/>}/>
                <Route exact path={TEAM_MEMBER_WORK_LINK} element={<MemberWork/>}/>

                <Route path={'/'} element={<Navigate to={HOME_LINK}/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;