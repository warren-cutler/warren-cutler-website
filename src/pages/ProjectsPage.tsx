//types
import { Project } from '../types';
//data
import { projectsData } from '../data/projectsData';
//components
import { Card } from '../components/generics/Card';

export const ProjectsPage = () => {
  const projects: Project[] = projectsData;

  return (
    <div className='self-stretch grid grid-cols-[repeat(auto-fill,minmax(384px,1fr))] px-5 m-5 py-1 gap-[2vw] justify-center min-w-sm'>
      {projects.map((project, idx) => {
        return (
          <Card key={idx} className='flex flex-col items-center p-2 max-w-xl'>
            <img src={project.imagePath} height='200' width='200'></img>
            <h2>{project.name}</h2>
            <p className='text-center'>{project.description}</p>
            {project.linkUrl ? (
              <a className='underline' href={project.linkUrl}>
                {project.linkUrl}
              </a>
            ) : (
              ''
            )}
            <div className='flex grow self-end'>
              <p className='italic self-end'>{project.status}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
