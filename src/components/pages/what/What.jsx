import React from 'react'
import '../GlobalPageStyle.css'
import ProjectCard from './ProjectCard'
import Data from './projects'

const What = () => {
  let projectList = (
    <div>
      {Data.map((project) => {
        return <ProjectCard project={{ ...project }} />
      })}
    </div>
  )

  return (
    <div className="main_page_container">
      <h1>this is the What page</h1>
      <div>
        {projectList ? (
          <div className="projectList_container">{projectList}</div>
        ) : (
          <h1>Sorry, something went wrong</h1>
        )}
      </div>
    </div>
  )
}

export default What
