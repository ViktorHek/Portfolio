import React from 'react'
import './What.css'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="project_container">
      <div className="grid">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        {project.link ? (
          <div onClick={() => window.open(`${project.link}`)}>
            <button className="project_button">
              <img
                src="/images/link_red.png"
                alt="link"
                className="project_image"
              />
            </button>
          </div>
        ) : null}
        <p>{project.language}</p>
      </div>
    </div>
  )
}

export default ProjectCard
