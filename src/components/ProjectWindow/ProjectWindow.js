import React from 'react';
import { useEffect, useState } from 'react';
import '../ProjectWindow/project-window.css'




const ProjectWindow = ({propText}) => {

    const [isOpen, setIsOpen] = useState(true)

    
function openDescriptionHandler() {
    if  (isOpen === true) {
        setIsOpen(false)
    } else {    
        setIsOpen(true)
    }
    
}

    // console.log(propText)
    return (
        <div>
            <section className="project-window">
                <div className="project-window__title">
                    <a onClick = {openDescriptionHandler} className="project-window__title__button">+</a>
                    <div className="project-window__title__text">{propText.title}</div>
                </div>
                <div className= { isOpen ? 'project-window__description project-window__description_hide' : 'project-window__description'} >{propText.description}</div>
            </section>
        </div>
        )

    };
    
export default ProjectWindow;