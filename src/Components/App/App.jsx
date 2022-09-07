import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import mirage from "src/Mirage/mirage";

import AppRouter from "../AppRouter/AppRouter";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import 'normalize.css'
import '../../assets/fonts/fonts.scss'
import './App.scss'

const context = {
    gradientSwitch: true,
    animationSwitch: false
}

export const AppContext = React.createContext(undefined)

const App = () => {
    return (
       <AppContext.Provider value={context}>
           <BrowserRouter>
               <Header />
               <AppRouter/>
               <Footer/>
           </BrowserRouter>
       </AppContext.Provider>
    );
};

export default App;