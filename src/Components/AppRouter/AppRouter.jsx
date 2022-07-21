import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import LoaderPage from "components/Pages/Loader.page/Loader.page";

const Home = React.lazy(() => import('../Pages/Home.page/Home.page'))
const Projects = React.lazy(() => import('../Pages/Projects.page/Projects.page'))
const Project = React.lazy(() => import('../Pages/Project.page/Project.page'))
const Team = React.lazy(() => import('../Pages/Team.page/Team.page'))
const Member = React.lazy(() => import('../Pages/Member.page/Member.page'))

const AppRouter = () => {
    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route index path={'/'} element={<Home/>}/>
                <Route exact path={'/projects'} element={<Projects/>}/>
                <Route exact path={'/projects/:projectId'} element={<Project/>}/>
                <Route exact path={'/team'} element={<Team/>}/>
                <Route exact path={'/team/:memberId'} element={<Member/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;