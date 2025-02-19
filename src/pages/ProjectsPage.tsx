//types
import { Project } from "../types";
//data
import { projectsData } from "../data/projectsData";
//components
import { Card } from "../components/generics/Card";

export const ProjectsPage = () => {
  const projects: Project[] = projectsData;

  return (
    <div className="m-5 grid min-w-xs grid-cols-[repeat(auto-fill,minmax(320px,550px))] justify-center gap-[2vw] self-stretch px-5 py-1">
      {projects.map((project, idx) => {
        return (
          <Card key={idx} className="flex max-w-xl flex-col items-center justify-start text-center p-2">
            <img
              className="drop-shadow-def rounded-md max-h-140"
              src={project.imagePath}
            ></img>
        
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <p className=''>{project.description}</p>
              {project.linkUrl ? (
                <a
                  className="hover:text-secondary-800 underline duration-200 ease-in"
                  href={project.linkUrl}
                >
                  {project.linkUrl}
                </a>
              ) : (
                ""
              )}
           
            <div className="flex grow self-end">
              <p className="self-end italic">{project.status}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
