import React from 'react'
import './What.css'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="main_card_container">
        <h4>{project.name}</h4>
      <div className="card_container">
        {/* <p>{project.description}</p>
        {project.link ? (
          <div onClick={() => window.open(`${project.link}`)}>
            <button className="project_button">
              <img
                src="/images/link_red.png"
                alt="Link"
                className="project_image"
              />
            </button>
          </div>
        ) : null}
        <p>{project.language}</p> */}
        <p>{project.id}</p>
      </div>
    </div>
  )
}

export default ProjectCard
