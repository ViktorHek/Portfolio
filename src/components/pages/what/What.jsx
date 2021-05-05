import React, { useEffect } from 'react'
import './What.css'
import '../GlobalPageStyle.css'
import axios from 'axios'
import ProjectCard from './ProjectCard'

const What = () => {
  let projectList
  let projects

  const fetchProjects = async () => {
    let projects = await axios.get('./data/projects.json')
    return projects
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  projectList = (
    <div>
      {projects.map((project) => {
        return <ProjectCard project={{ ...project }} />
      })}
    </div>
  )

  return (
    <div className="main_page_container">
      <h1>this is the What page</h1>
      {projectList.length ? (
        <div>{projectList}</div>
      ) : (
        <h1>Sorry, something went wrong</h1>
      )}
    </div>
  )
}

export default What
