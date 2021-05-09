import React from 'react'
import '../GlobalPageStyle.css'
import ProjectCard from './ProjectCard'
import Data from './projects'

const What = () => {
  let projectList = (
    <ul className="projectList_container">
      {Data.map((project) => {
        return <ProjectCard project={{ ...project }} />
      })}
    </ul>
  )

  return (
    <div className="main_page_container">
      <h1>Feel free to checkout the work i've done</h1>
      <h4>
        The link icon will take you to the deployed website. But I saved the
        best for last. if you go all the way down to the Footer, you will find a
        link to my GitHub page. There you will find the codebase for all the
        projects you see here, and a couple other. This involves the projects
        presented here that does not have a deployed website. 
      </h4>
      <div>
        {projectList ? (
          <div>
            {projectList}
            {/* <div>"hello"</div>
            <div>"hey"</div>
            <div>"hi"</div> */}
          </div>
        ) : (
          <h1>Sorry, something went wrong</h1>
        )}
      </div>
    </div>
  )
}

export default What
