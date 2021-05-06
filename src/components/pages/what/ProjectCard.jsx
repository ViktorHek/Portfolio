import React from 'react'
import './What.css'

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      {project.link ? (
        <div onClick={() => window.open(`${project.link}`)}>
          <button className="project_button">
            <img
              src="/images/linkimg.png"
              alt="link"
              className="project_image"
            />
          </button>
        </div>
      ) : null}
      <p>{project.language}</p>
    </div>
  )
}

export default ProjectCard
