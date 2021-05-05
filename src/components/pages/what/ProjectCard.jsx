import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <li>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <img src="/images/linkimg.png" alt="Link">
        {project.link}
      </img>
      <p>{project.language}</p>
    </li>
  )
}

export default ProjectCard
