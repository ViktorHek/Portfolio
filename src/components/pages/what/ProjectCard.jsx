import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
    >
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <button className="project_image_button" href={project.link}>
      <img src="/images/linkimg.png" alt="link" className="project_image"/>
      </button>
      <p>{project.language}</p>
    </div>
  )
}

export default ProjectCard
