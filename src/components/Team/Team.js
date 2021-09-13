import React from 'react';
import '../Team/team.css'

import team__photo from '../../images/me-mob.png';
import usa__photo from '../../images/pic-usa-2.png';


const Team = () => {
    return (
        <section className="team" id="aboutProject">
            <h1 className="team__main-title">О нас</h1>
            <div className="team__block">
                <img className="team__pic" src={team__photo} alt="Логотип место"/>
                <div className="team__description">
                    <p className="team__text">Здравствуйте, меня зовут Сергей Земелькин. Многие меня знают как основателя Frank Research Group. Я рад представить вам исследовательское бюро "Financier".<br /><br />В финансовой индустрии я с 2005 года. За это время было реализовано более 40 исследовательских и консалтинговых проектов для банков, МФО и инвестиционных компаний. Я и моя команда будем рады помочь вам в изучении рынков, игроков и бизнес-моделей финансового рынка.</p> 
                    <p className="team__text"></p> 
                </div>
            </div>
            {
            <img className="team__pic-usa" src={usa__photo} alt="Логотип место"/>
            }
            </section>
    )

};

export default Team;