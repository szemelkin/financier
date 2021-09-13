import React from 'react';
import '../ProjectCard/project-card.css'

//  <p className="about-project__timeline_description">Front-end</p>
// <p className="about-project__timeline_description">Back-end</p>

const ProjectCard = () => {
    return (
        <div>
            <div className="project-card">
                <div className="movies-card__items">
                    <button onClick = {handleSaveMovies}  className="movies-card__button"><img className="movies-card__icon" src={cardLikeButtonClassName}  alt="Здесь должна быть картинка"/></button>
                    <h2 className="movies-card__duration">{NameOfProject}</h2>
                </div>
                <div className="">
                    <p className="">
                    </p>
                </div>
                
            </div>
        </div>
    )

};

export default ProjectCard;