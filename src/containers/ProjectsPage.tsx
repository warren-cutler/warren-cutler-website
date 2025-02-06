//types
import { Project } from '../types';

//components
import { ProjectCard } from '../components/ProjectCard';

import { projectsData } from '../data/projectsData';

export const ProjectsPage = () => {
  const projects: Project[] = projectsData;

  return (
    <div className='projectsContainer'>
      {projects.map((project, idx) => {
        return <ProjectCard key={'Project-' + idx} {...project}></ProjectCard>;
      })}
    </div>
  );
};
