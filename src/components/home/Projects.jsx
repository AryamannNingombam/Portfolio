import React,{useState} from 'react'
import { ALL_PROJECTS } from '../../constants'
import { ProjectCard } from '../shared/ProjectCard'
import './Projects.css'


export const Projects = () => {
    const firstThree = ALL_PROJECTS.slice(0,3);
 
    const [showAll,setShowAll] = useState(false);
    const onShowClick = (e)=>{
        setShowAll(!showAll);

    }
    return (
        <div id="all-projects-section">
            <span id="all-projects-main-heading">
               Some Of My Projects 
            </span>
            <div id="all-projects-card-area">
            {showAll  ? ALL_PROJECTS.map((project,index)=>(
                <ProjectCard project={project} key={index}/>            
            )) : 
            firstThree.map((project,index)=>(
                <ProjectCard project={project} key={index}/>            
            ))}
       
            
            </div>
            <span id="all-projects-show-more" onClick={onShowClick}>Show {showAll ? "Less": "More"}</span>
        </div>
    )
}
