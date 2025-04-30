import { useState } from 'react'
import growthLogo from './assets/growth.gif'
import Logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        
        <img src={Logo} className="logos react" alt="React logo" /><br/>
        
          <img src={growthLogo} className="logo react" alt="React logo" />
      </div>
      <h1>02 Seek Development Ongoing</h1>
      
    </>
  )
}

export default App
