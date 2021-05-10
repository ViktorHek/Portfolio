import React from 'react'
import './Home.css'

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
          <h1 className="home_title">Viktor Karlsson</h1>
          <h2 className="home_title">Junior Full-Stack Web Developer</h2>
          <br />
          <br />
          <h3 className="home_text">
            Check out my webpage. You will find an introduction about me,
            projects i've done and how to get in contact with me. All artwork,
            icons and images are made by me, for example the one to the left. Creating my own icons and
            artwork gives me the exclusive right to everything you see on this
            page. To create is also fun and increases creativity. You see, I
            look at coding as problem solving. Everything I do is to work
            towards beautiful solutions
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Home
