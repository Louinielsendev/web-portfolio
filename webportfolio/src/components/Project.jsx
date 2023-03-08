
import '../App.css'

export default function Project(props) {

    return (
        <div className={`project ${props.order ? '' : 'reverse--flex'}`} >
             <div className='project--imgWrapper'><a target="_blank" href={props.url}><img className='project--img' src={`./src/assets/${props.img}`} alt="" /></a></div>
            <div className={`project--content ${props.order ? '' : 'reverse--content'}`} >
                <h1 className={`project--title ${props.title}`}>{props.title}</h1>
                <p className='project--desc'>{props.description}</p>
                <div className='project--btn'>
                    <div>GitHub</div>
                    <a target="_blank" href={props.url}><div>Live</div></a>
                </div>
            </div>
           
        </div>
    )
}