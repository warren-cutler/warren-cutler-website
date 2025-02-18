//types
import { Project } from "../types";
//data
import { projectsData } from "../data/projectsData";
//components
import { Card } from "../components/generics/Card";

export const ProjectsPage = () => {
  const projects: Project[] = projectsData;

  return (
    <div className="m-5 grid min-w-sm grid-cols-[repeat(auto-fill,minmax(384px,1fr))] justify-center gap-[2vw] self-stretch px-5 py-1">
      {projects.map((project, idx) => {
        return (
          <Card key={idx} className="flex max-w-xl flex-col items-center p-2">
            <img
              className="drop-shadow-def"
              src={project.imagePath}
              height="200"
              width="200"
            ></img>
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="text-center">{project.description}</p>
            {project.linkUrl ? (
              <a className="underline" href={project.linkUrl}>
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
