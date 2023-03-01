import { useState } from 'react'
import '../App.css'

export default function Project(props) {
    const [overlayDisplay, setOverlayDisplay] = useState(false)
    const styles = {
        opacity: overlayDisplay ? '100%' : '0%'
    }

    const badges = props.verktyg.map(verktyg => {
        return (
            <h2 className={`badge ${verktyg}`}>{verktyg}</h2>
        )
    })

    function toggleOverlay() {
        setOverlayDisplay(prevOverlay => !prevOverlay)
    }

    return (
        <a target='_blank' href={props.url}><div className='project' onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
            <div style={styles} className='overlay'>
                <div className="overlay--contentCover">
                    <div className="overlay--content">
                        <p className='overlay--text'>{props.description}</p>
                        {badges}
                    </div>
                </div>
            </div>
            <img src={`./src/assets/${props.img}`} alt="" />
            <h1>{props.title}</h1>
        </div></a>
    )
}