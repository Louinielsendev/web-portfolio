import { useState } from 'react'

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
        order={project.order}
       />
    )
  })
  return (
    <div className={`App ${darkMode ? 'dark': ''}`}>
      <div className='Main'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Title darkMode={darkMode} />
        <h2 className='projects--title'>Mina projekt</h2>
        <div className='projects--wrapper'>
          {projects}

        </div>
      </div>
    </div>
  )
}

export default App
