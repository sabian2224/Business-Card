import React from 'react';
import simpson from '../images/simpson.jpg';
import mail from '../images/mail.png';
import linkedinButtonIcon from '../images/linkedinButtonIcon.png'

export default function Info () {
    return (
        <div className='info--section'>
            <img src= {simpson} 
            className='card--image' alt='card-pic' />

            <div className='info--text_container'>
                <p className='name'>Sabian Zhupa</p>
                <p className='subtitle'>Software Developer</p>
                <p>
                    sabianzhupa.com
                </p>
            </div>

            <div className='info--contact_container'>
                <button className='email--button'>
                    <img src={mail} className='mail--icon' alt='mail-icon'/>
                    Email
                    </button>
                <button className='linkedin--button'>
                    <img src={linkedinButtonIcon}  
                    className='linkedin-button--icon' alt='linkedin-icon'/>
                    LinkedIn
                </button>
            </div>
            

            
        </div>
    )
}