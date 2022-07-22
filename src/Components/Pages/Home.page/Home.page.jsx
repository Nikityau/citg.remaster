import React from 'react';

import Enter from "./&blocks/Enter/Enter";
import Advantages from "components/Pages/Home.page/&blocks/Advantages/Advantages";
import WeTeach from "components/Pages/Home.page/&blocks/WeTeach/WeTeach";
import Projects from "components/Pages/Home.page/&blocks/Projects/Projects";
import Awards from "components/Pages/Home.page/&blocks/Awards/Awards";
import AboutUs from "components/Pages/Home.page/&blocks/AboutUs/AboutUs";

import './Home.page.scss'

const HomePage = () => {
    return (
        <div className={'home-page'}>
            <Enter/>
            <Advantages/>
            <WeTeach/>
            <Projects/>
            <Awards/>
            <AboutUs/>
        </div>
    );
};

export default HomePage;