import React from 'react'
import { ALL_SKILLS } from '../../constants'
import { SkillsCard } from '../shared/SkillsCard'
import './Skills.css'


export const Skills = () => {

    return (
        <div>
            <div id="skills-main-heading">
                Things I've Messed With
            </div>
            <div id="skills-main-area">
            {ALL_SKILLS.map((skill,index)=>(
                <SkillsCard key={index} name={skill}/>
            ))}
            </div>
            
        </div>
    )
}

