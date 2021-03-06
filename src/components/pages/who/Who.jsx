import React from 'react'
import './Who.css'
import '../GlobalPageStyle.css'

const Who = () => {
  return (
    <div className="who_page_container" id="who">
      <div className="whoText">
        <h1 id="about-header">Who am I?</h1>
        <h2 className="whoTextTitle"> Junior Full Stack Web Developer</h2>
        <p className="who_text">
          I work with Test Driven Development in an Agil way. I create webpages
          with React, mobile-applications with Expo/React-Native, APIs with Ruby
          on Rails. I test my front-end using Cypress and my back-end using
          RSpec
        </p>
        <h2 className="whoTextTitle">Don't underestimate a junior</h2>
        <p className="who_text">
          I started building websites after a 12 week Full Stack Web Developer
          Bootcamp. 12 weeks may not sound like enough time to learn what you
          need to know to become a web developer. But I advise you who are
          reading this to check out my projects and think for yourself. "If he
          managed to learn this in 12 weeks, how much can he learn if he works
          for us??"
        </p>
        <h2 className="whoTextTitle">A little about me</h2>
        <p className="who_text">
          I'm working on getting my bachelor's degree in media and communication
          science. My dream is to become a FULL full-stack web developer
          sometime in the future. By that, I mean that I want to be able to
          build frontend and backend applications in combination with having a
          sufficient understanding of communicative science to know what type of
          communication to use. As well as build on my knowledge skills in web
          design to be able to make the website and the message of the website
          attractive to the user. I strongly believe that functionality, message
          and style are the cornerstones of a really successful website. With
          the help of my programming skills, I hope to be able to build websites
          with all the functionality that the site requires. With knowledge in
          the science of knowledge, I hope to be able to convey the website's
          message in a good way. In order not only to get visitors to the
          website but also to get them to stay there, I think you need to make
          it aesthetically pleasing.
        </p>
      </div>
      <div className="languages_container">
        <h2>Languages</h2>
        <ul>
          <li className="list_item">JavaScript</li>
          <li className="list_item">Ruby</li>
          <li className="list_item">HTML</li>
          <li className="list_item">CSS</li>
          <li className="list_item">Node.js</li>
        </ul>
        <h2>Libraries</h2>
        <ul>
          <li className="list_item">Redux</li>
          <li className="list_item">Cypress</li>
          <li className="list_item">RSpec</li>
          <li className="list_item">React</li>
          <li className="list_item">React-native/Expo</li>
        </ul>
        <h2>Framework</h2>
        <ul>
          <li className="list_item">Axios</li>
          <li className="list_item">Ruby on Rails</li>
        </ul>
      </div>
    </div>
  )
}

export default Who
