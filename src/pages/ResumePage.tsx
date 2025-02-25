//types
import { Job, Education } from "../types";
//data
import { jobsData } from "../data/jobsData";
import { educationData } from "../data/educationData";
//components
import { RoleCard } from "../components/RoleCard";
import { Button } from "../components/generics/Button";
import { Card } from "../components/generics/Card";

export const ResumePage = () => {
  const jobs: Job[] = jobsData;
  const education: Education[] = educationData;

  return (
    // work experience card
    <div className="flex flex-col">
      <Card className="mx-5 my-3 flex max-w-5xl min-w-xs flex-col px-5 py-2">
        {jobs.map((job) => {
          return (
            <div className="mt-2 mb-3 flex flex-col">
              <div className="flex items-center gap-3">
                <a className="shrink-0" href={job.url} target="_blank">
                  <img
                    className="drop-shadow-def hover:outline-primary-950 h-[50px] w-[70px] rounded-md hover:outline-2"
                    src={job.logo}
                    alt="Click to visit the employer website"
                  />
                </a>
                <p className="grow font-bold lg:text-lg xl:text-xl">
                  {job.company}
                </p>
                <p className="text-end text-sm italic sm:flex-row md:text-base xl:text-lg">
                  {job.location}
                </p>
              </div>
              {job.roles.map((role, idx) => {
                return <RoleCard key={"Role-" + idx} {...role}></RoleCard>;
              })}
            </div>
          );
        })}
      </Card>
      {/* education card */}
      <Card className="mx-5 my-3 flex max-w-5xl min-w-xs flex-col px-5 py-2">
        {education.map((edu) => {
          return (
            <div className="mt-2 mb-3 flex flex-col">
              <div className="flex items-center gap-3">
                <a className="shrink-0" href={edu.url} target="_blank">
                  <img
                    className="drop-shadow-def hover:outline-primary-950 h-[50px] w-[70px] rounded-md bg-white p-1 hover:outline-2"
                    src={edu.logo}
                    alt="Click to visit the school website"
                  />
                </a>
                <p className="grow font-bold lg:text-lg xl:text-xl">
                  {edu.school}
                </p>
                <p className="text-end text-sm italic sm:flex-row md:text-base xl:text-lg">
                  {edu.location}
                </p>
              </div>
              <div className="flex flex-col py-1">
                <div className="flex flex-col justify-between text-sm italic sm:flex-row md:text-base xl:text-lg">
                  <p className="font-bold">{edu.degree}</p>
                  <p>
                    {edu.dateEnd.toLocaleDateString("en-US", {
                      timeZone: "UTC",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Card>
      {/* resume download button */}
      <div className="self-center">
        <a href="/assets/warren-cutler-resume.pdf" target="_blank">
          <Button
            className="m-2"
            size={"thick"}
            primary={false}
            bordered={true}
          >
            Full Resume (PDF)
          </Button>
        </a>
      </div>
    </div>
  );
};
