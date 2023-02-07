import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'

import '../App.css'

export default function Navabar() {
    return (
        <div className="nav">
            <div className="nav--logo">
                <img src={githubLogo} alt="" />
            </div>
            <ul className="nav--navigation">
                <li>About</li>
                <li>Projects</li>
                <li>
                    <a target='_blank' href="https://github.com/Louinielsendev"><img className='logo'src={githubLogo} alt="" /></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/louilindkvistnielsen/"><img className='logo linkedinlogo' src={linkedinLogo} alt="" /></a>
                </li>

            </ul>
        </div>
    )
}