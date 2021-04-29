import React from 'react'
import './ProjectCard.css';
export const ProjectCard = ({project}) => {
    return (
        <div className="project-card-main-area">
            {project.image ? <img src={project.image} className="project-card-project-image"/>
             : <span className="project-card-project-name">{project.name}</span>}
            
      
             
        </div>
    )
}
