import React from 'react';

import Enter from "./&blocks/Enter/Enter";
import Advantages from "components/Pages/Home.page/&blocks/Advantages/Advantages";

import './Home.page.scss'


const HomePage = () => {
    return (
        <div className={'home-page'}>
            <Enter/>
            <Advantages/>
        </div>
    );
};

export default HomePage;