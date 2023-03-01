import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Project from './components/Project'
import projectData from './projectData'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)

  }
  const projects = projectData.map(project => {
    return (
      <Project
        key={project.id}
        title={project.title}
        img={project.img}
        url={project.url}
        description={project.description}
        verktyg={project.verktyg}
       />
    )
  })
  return (
    <div className={`App ${darkMode ? 'dark': ''}`}>
      <div className='Main'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Title darkMode={darkMode} />
        <h2>Projects</h2>
        <div className='projects--wrapper'>
          {projects}

        </div>
      </div>
    </div>
  )
}

export default App
