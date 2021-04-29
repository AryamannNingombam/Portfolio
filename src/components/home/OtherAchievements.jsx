import React from 'react'
import { ALL_OTHER_ACHIEVEMENTS ,PATENT_LINK} from '../../constants'
import './OtherAchievements.css'
import {a} from 'react-router-dom';

export const OtherAchievements = () => {
    return (
        <div id='other-achievements-main-container'>
            <span className='other-achievements-heading' id="other-achievements-main-heading">
                Some Misc. Achievements
            </span>
            <ul id="other-achievements-achievement-list"> 
            {ALL_OTHER_ACHIEVEMENTS.map((achievement,index)=>(
                <li key={index}
                 className="other-achievements-li"
                  >
                {achievement}
                    </li>
            ))}
            
            </ul>
            <div id="other-achievements-patent-area">
                <span className='other-achievements-heading' id="other-achievements-patent-heading">
                    Oh, and I hold a patent too
                </span>
                <span id="other-achievements-patent-link">
                    You can read about it more <a id="other-achievements-patent-href" href={PATENT_LINK} rel="noopener" target="_blank">Here</a>
                </span>

            </div>
            
        </div>
    )
}
