//types
import {Project} from '../types'

//components
import {ProjectCard} from './ProjectCard';

import {projectsData} from '../projectsData';


export const ProjectsContainer = () => {

    const projects: Project[] = projectsData;

    return (
        <div className='projectsContainer'>
            {projects.map((project, idx)=>{
                return (<ProjectCard key={"Project-" + idx} {...project}></ProjectCard>)
            })}
        </div>
    )

}