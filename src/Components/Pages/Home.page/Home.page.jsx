import React from 'react';

import Enter from "./&blocks/Enter/Enter";
import Advantages from "components/Pages/Home.page/&blocks/Advantages/Advantages";
import WeTeach from "components/Pages/Home.page/&blocks/WeTeach/WeTeach";
import Projects from "components/Pages/Home.page/&blocks/Projects/Projects";

import './Home.page.scss'

const HomePage = () => {
    return (
        <div className={'home-page'}>
            <Enter/>
            <Advantages/>
            <WeTeach/>
            <Projects/>
        </div>
    );
};

export default HomePage;