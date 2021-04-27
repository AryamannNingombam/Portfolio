import React from 'react'
import { LineAnimation } from '../shared/LineAnimation'
import './Navbar.css'
 

export const Navbar = () => {
    return (
        <>
        <div id='navbar-main-div'>
            {/* ary_amann */}
            <div id='ary_amann'>ary_amann</div>
            <div id='social-links'>
                <a href="https://www.linkedin.com/in/aryamann-ningombam-a86240183/" target="_blank">Linkedin</a>
             |
             <a href="https://www.instagram.com/ary_amann/" target="_blank">Instagram</a>
             | 
             <a href="https://github.com/AryamannNingombam" target="_blank">Github</a>
             
             </div>
        </div>
        <LineAnimation/>
        </>
    )
}
