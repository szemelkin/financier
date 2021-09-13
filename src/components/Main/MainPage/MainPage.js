import React from 'react';
import '../MainPage/main-page.css'

//  <p className="about-project__timeline_description">Front-end</p>
// <p className="about-project__timeline_description">Back-end</p>

const MainPage = () => {
    return (
        <section className="about-project" id="aboutProject">
            <h2 className="main-title">Исследования финансовой индустрии</h2>
            <h3 className="description">Делаем исследования для команд банков, МФО, инвесткомпаний и других коллег из финансов</h3>
            {
            // <div className="button-order">
            //     <div className="button-order__text">Связаться</div>
            //     <p className="button-order__arrow">{'>>'}</p> 
            // </div>
            }
        </section>
    )

};

export default MainPage;