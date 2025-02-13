//types
import { Project } from '../types';
//data
import { projectsData } from '../data/projectsData';
//components
import { Card } from '../components/generics/Card';

export const ProjectsPage = () => {
  const projects: Project[] = projectsData;

  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(384px,1fr))] px-5 m-5 py-1 gap-[2vw] justify-center min-w-sm'>
      {projects.map((project) => {
        return (
          <Card >
            <img src={project.imagePath} height='200' width='200'></img>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.linkUrl ? project.linkUrl : ''}</p>
            <p>{project.status}</p>
          </Card>
        );
      })}
    </div>
  );
};
