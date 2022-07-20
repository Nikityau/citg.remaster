import React from 'react';
import {BrowserRouter} from "react-router-dom";

import AppRouter from "../AppRouter/AppRouter";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import 'normalize.css'
import '../../assets/fonts/fonts.scss'
import './App.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;