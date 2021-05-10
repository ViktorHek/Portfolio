import React from 'react'
import './How.css'
import '../GlobalPageStyle.css'

const How = () => {
  return (
    <div className="main_how_container">
      <h1>Contact</h1>
      <h4>Email: Viktorkarlsson125@gmail.com</h4>
      <h4>Phone: 073 370 67 33</h4>
      <br/>
      <h2>Links</h2>
      <div className="how_link_container">
        <h4 className="how_link" onClick={() => window.open("https://github.com/ViktorHek")}>GitHub</h4>
        <h4 className="how_link" onClick={() => window.open("https://www.linkedin.com/in/viktor-karlsson-7ba676a3/")}>LinkedIn</h4>
      </div>
    </div>
  )
}

export default How