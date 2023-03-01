import '../App.css'

export default function Title(props){
    return(
        <div className={`title ${props.darkMode ? 'dark' : ''}`}>
            <h2 >LOUI LINDKVIST NIELSEN</h2>
            <h1>Front-End Developer.</h1>
            <p>Just nu läser jag <a target='_blank' className={`title--link ${props.darkMode ? 'dark' : ''}`} href="https://lnu.se/program/interaktiva-medier-och-webbteknologier/">Interaktiva medier och webbteknologier</a> vid Linnéuniversitetet i Växjö och tar min kandidatexamen inom Medieteknik våren 2024.</p>
        </div>
    )
}