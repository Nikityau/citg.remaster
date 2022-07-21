import React from 'react';

import Enter from "./&blocks/Enter/Enter";
import Advantages from "components/Pages/Home.page/&blocks/Advantages/Advantages";
import WeTeach from "components/Pages/Home.page/&blocks/WeTeach/WeTeach";

import './Home.page.scss'

const HomePage = () => {
    return (
        <div className={'home-page'}>
            <Enter/>
            <Advantages/>
            <WeTeach/>
        </div>
    );
};

export default HomePage;