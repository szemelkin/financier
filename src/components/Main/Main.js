import React from 'react';
import NavTab from './NavTab/NavTab';
// import AboutProject from './_AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import MainPage from './MainPage/MainPage';
import './main.css'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Main = () => {

    const currentUser = React.useContext(CurrentUserContext);

    // <NavTab />
    // <AboutProject />
    // <Techs />
    // <AboutMe />
    // <Portfolio />

    return (
        <div>
            <main className="main">
                <MainPage />
            </main>
        </div>
    )

};

export default Main;