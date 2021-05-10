import React from 'react'
import './Home.css'
import '../GlobalPageStyle.css'

const Home = () => {
  return (
    <div className="main_page_container">
      <div className="home_page_container">
        <img
          src="/images/web_affichbild.jpg"
          alt="img"
          className="home_background_image"
        />
        <div className="home_intro_container">
          <h1 className="home_title">Hey Checkout My Page</h1>
          <br />
          <br />
          <h3 className="home_text">
            I added a bunch of cool but unnecessary stuff to keep you
            entertained
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Home
