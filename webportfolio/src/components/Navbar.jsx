import githubLogo from '../assets/github.svg'
import githubLogoWhite from '../assets/github-white.svg'
import linkedinLogo from '../assets/linkedin.svg'
import linkedinLogoWhite from '../assets/linkedin-white.svg'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { useState } from 'react'


import '../App.css'

export default function Navabar(props) {
    
    
    return (
        <div className='nav'>
            <div className="nav--logo">
                <h1>LOUIDEV</h1>
            </div>
            <ul className="nav--navigation">
               
                <li>
                    <a target='_blank' href="https://github.com/Louinielsendev"><img className='logo'src={props.darkMode ? githubLogoWhite : githubLogo} alt="" /></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/louilindkvistnielsen/"><img className='logo linkedinlogo' src={props.darkMode ? linkedinLogoWhite : linkedinLogo} alt="" /></a>
                </li>
                <li>
                    <img className='logo' src={props.darkMode ? moon : sun} onClick={props.toggleDarkMode} alt="" />
                </li>
            </ul>

        </div>
    )
}