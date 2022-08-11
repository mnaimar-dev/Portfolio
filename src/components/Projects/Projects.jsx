import React from 'react'
import { data } from '../../helpers/data'
import'./Projects.css'


const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projects__title">Projects & Works</h2>
        <div className="projects__grid">
        {
            data.map((data) => {
                return (
                    
                    <div>
                        <a href={ data.link } target= "_blank">
                            <img className={ data.imgClass } src={ data.image } alt="" />
                        </a>
                    </div>
                )
            })
        }
        </div>
    </section>
  )
}

export default Projects