import React, {useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter} from "react-router-dom";

import mirage from "src/Mirage/mirage";

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