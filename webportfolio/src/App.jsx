import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Project from './components/Project'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Title />
      <h2>Projects</h2>
      <div className='projects--wrapper'>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default App
