//types
import {Project} from '../types'

export const ProjectCard = (project: Project) => {

    return (
        <div className = 'projectCard'>
            <img src='/src/assets/wc-headshot.jpg' height='200' width='200'></img>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.linkUrl ? project.linkUrl : ''}</p>
            <p>{project.status}</p>
        </div>
    )
}