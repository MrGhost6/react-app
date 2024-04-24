import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h1>webD</h1>
      </div>

      <div className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
      </div>
    </div>

    <div className="boxes">

      <div className="yellow"></div>
      <div className="pink"></div>
      
    </div>

    <div className="fTitle">


      
        <h1 className="web">WEB 
        <p className="dev"> DEVLOPPEMENT</p>
        <h1 className="S">FREELANCER</h1>
        </h1>
      


      
    </div>

    <div className="side-boxes">
      <div className="projects">
        <h3>+50</h3>
        <p>Project</p>
      </div>

      <div className="fast">
        <h3>50%</h3>
        <p>Fast Service</p>
      </div>
    </div>




    <div className="secPage">



    </div>

    </>
  )
}

export default App
