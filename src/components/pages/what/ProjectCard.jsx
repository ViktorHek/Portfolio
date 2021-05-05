import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <ui>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <i class="fas fa-link">
        {project.link}
      </i>
      <p>{project.language}</p>
    </ui>
  )
}

export default ProjectCard