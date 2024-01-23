import React from 'react';
import sweetlemon from '../images/sweetlemon.png';
import mail from '../images/mail.png';
import linkedin from '../images/linkedin.png'
export default function Info () {
    return (
        <div className='info--section'>
            <img src= {sweetlemon} className='sweetlemon--png'/>

            <div className='info--text_container'>
                <p className='sweetlemon--title'>Sweet Lemon</p>
                <p className='subtitle'>Software Company</p>
                <p>
                    sweetlemon.pro
                </p>
            </div>

            <div className='info--contact_container'>
                <button className='email--button'>
                    <img src={mail} className='mail--icon'/>
                    Email
                    </button>
                <button className='linkedin--button'>
                    <img src={linkedin}  className='linkedin--icon'/>
                    LinkedIn
                </button>
            </div>
            

            
        </div>
    )
}