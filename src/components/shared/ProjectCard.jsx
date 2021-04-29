import React from 'react'
import './ProjectCard.css';
export const ProjectCard = ({project}) => {
    return (
        <div className="project-card-main-area">
             {project.name}
        </div>
    )
}
