import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import reactLogo from '../../images/logo.svg';
import profileLink from '../../images/profile.svg';
import burgerMenu from '../../images/burger_menu_max.svg';
import crossButton from '../../images/close_cross.svg';
import financier_logo from '../../images/financier.svg';
import research_bureau_logo from '../../images/research_bureau.svg';
import financier_logo_white from '../../images/logo-white-compact.png';
import phone_tube from '../../images/phone_tube.svg';
// import './header/header.css'
import '../Header/header.css'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const handleBurger = (e) => {
    document.getElementById("surprise").classList.toggle('header__invisible')
    document.getElementById("burgerButton").classList.toggle('header__invisible')
    document.getElementById("crossButton").classList.toggle('header__invisible')
    document.getElementById("surprise1").classList.toggle('header__invisible')
    document.getElementById("surprise2").classList.toggle('header__invisible')
    document.getElementById("surprise3").classList.toggle('header__invisible')
    document.getElementById("surprise4").classList.toggle('header__invisible')
    document.getElementById("surprise5").classList.toggle('header__invisible')
    document.getElementById("surprise6").classList.toggle('header__invisible')

}

const handleCrossButton = (e) => {
    document.getElementById("surprise").classList.toggle('header__invisible')
    document.getElementById("burgerButton").classList.toggle('header__invisible')
    document.getElementById("crossButton").classList.toggle('header__invisible')
    document.getElementById("surprise1").classList.toggle('header__invisible')
    document.getElementById("surprise2").classList.toggle('header__invisible')
    document.getElementById("surprise3").classList.toggle('header__invisible')
    document.getElementById("surprise4").classList.toggle('header__invisible')
    document.getElementById("surprise5").classList.toggle('header__invisible')
    document.getElementById("surprise6").classList.toggle('header__invisible')

}


const Header = (props) => {

    const location = useLocation();

    // console.log('props.handleRequest',props.handleRequest)

    const main = 
        <div>
            <header className="header">
                <div className="logo-block">
                    <img className="logo" src={financier_logo_white} alt="Логотип место"/>
                </div>

                <div className="menu">
                    <Link to="experience" className="link" href="/experience">Опыт</Link>                        
                    <Link to="team" className="link" href="/team">О нас</Link>
                </div>
                <div className="call-button">
                    <img className="phone-tube" src={phone_tube} alt="Логотип место"/>
                    <p className="phone-number"> +7 903 720 4252</p>
                </div>
            </header>
        </div>
        
    const experience = 
        <div>
            <header className="header">
                <div className="logo-block">
                    <img className="logo" src={financier_logo_white} alt="Логотип место"/>
                </div>

                <div className="menu">
                    <Link to="" className="link" href="/">Главная</Link>                        
                    <Link to="team" className="link" href="/team">О нас</Link>
                </div>
                <div className="call-button">
                    <img className="phone-tube" src={phone_tube} alt="Логотип место"/>
                    <p className="phone-number"> +7 903 720 4252</p>
                </div>
            </header>
        </div>

    const team = 
        <div>
            <header className="header">
                <div className="logo-block">
                    <img className="logo" src={financier_logo_white} alt="Логотип место"/>
                </div>

                <div className="menu">
                    <Link to="" className="link" href="/">Главная</Link>                        
                    <Link to="experience" className="link" href="/experience">Опыт</Link>
                </div>
                <div className="call-button">
                    <img className="phone-tube" src={phone_tube} alt="Логотип место"/>
                    <p className="phone-number"> +7 903 720 4252</p>
                </div>
            </header>
        </div>
    
    const signing = 
        <div>
        </div>

    const currentUrl = location.pathname

    const menuNavigation = (currentUrl) => {
        if (currentUrl == "/" ) {return main}
        else if (currentUrl == '/experience') {return experience}
        else if (currentUrl == '/team') {return team}
    }


    return (
        <div>
            {
                menuNavigation(currentUrl)                
            }
        </div>
    )
    


};

export default Header;