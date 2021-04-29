import React from 'react'
import { ALL_PROJECTS } from '../../constants'
import { ProjectCard } from '../shared/ProjectCard'
import './Projects.css'


export const Projects = () => {
    return (
        <div id="all-projects-section">
            <span id="all-projects-main-heading">
               Some Of My Projects 
            </span>
            <div id="all-projects-card-area">
            {ALL_PROJECTS.map((project,index)=>(
                <ProjectCard project={project} key={index}/>            
            ))}
            
            </div>
            
        </div>
    )
}
