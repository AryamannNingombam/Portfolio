import React from 'react'
import './SkillsCard.css'

export const SkillsCard = ({name}) => {
    return (
        <div className="skills-card-main-container">
            <span className="skill-card-main-heading">
                {name}
            </span>
        </div>
    )
}
