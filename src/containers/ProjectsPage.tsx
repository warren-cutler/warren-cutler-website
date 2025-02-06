//types
import { Project } from '../types';
//data
import { projectsData } from '../data/projectsData';
//components
import { ProjectCard } from '../components/ProjectCard';

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
