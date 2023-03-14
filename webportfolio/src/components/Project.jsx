import githubLogo from '../assets/github.svg'
import githubLogoWhite from '../assets/github-white.svg'


import '../App.css'

export default function Project(props) {
    return (
        <div className={`project ${props.order ? '' : 'reverse--flex'}`} >
             <div className='project--imgWrapper'><a target="_blank" href={props.url}><img className='project--img' src={`src/assets/${props.img}`} alt="" /></a></div>
            <div className={`project--content ${props.order ? '' : 'reverse--content'}`} >
                <a target='_blank   ' href={props.url}><h1 className={`project--title ${props.title}`}>{props.title}</h1></a>
                <p className='project--desc'>{props.description}</p>
                <div className='project--btn'>
                <a target='_blank' href={props.github}><img className='logo'src={props.darkMode ? githubLogoWhite : githubLogo} alt="" /></a>
                </div>
            </div>
           
        </div>
    )
}