import React from 'react'
import './Introduction.css'
import profilePhoto from '../../images/PROFILE_PHOTO.jpeg'
 

export const Introduction = () => {
    return (
        <div id={'introduction-main-div'}>
            <div id="head-and-image-area">
                <span id="yo_whats_popping_heading">
                    <span id="yo_word">Yo,</span>    
                    <span id="whats_poppin_word">what's poppin'?</span>
                </span>
                <img alt="Photu" id ='introduction-profile-photo' src={profilePhoto}/>
            </div>
            <div id="introduction-description-area">
            <span id='introduction-description-text'>
            I am an undergraduate student at Manipal Institute Of Technology.
             I like making software products, participating in hackathons, 
             and thinking out various strategies to scale any product.
            I’m a big fitness enthusiast, hyper-competitive for anything
             possible, and a reader. My goals include pursuing 
             entrepreneurship, learning anything I want faster than 
             most people, being able to do muscle-ups, 
            and being able to talk to women without creeping them out.

            </span>
            
            </div>
     
      
           
        </div>
    )
}
