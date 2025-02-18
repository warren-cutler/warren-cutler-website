//types
import { Job, Education } from '../types';
//data
import { jobsData } from '../data/jobsData';
import { educationData } from '../data/educationData';
//components
import { RoleCard } from '../components/RoleCard';
import { Button } from '../components/generics/Button';
import { Card } from '../components/generics/Card';

export const ResumePage = () => {
  const jobs: Job[] = jobsData;
  const education: Education[] = educationData;

  return (
    // work experience card
    <div className='flex flex-col'>
      <Card className='flex flex-col mx-5 my-3 px-2 py-1 min-w-sm max-w-5xl'>
        {jobs.map((job) => {
          return (
            <div className='flex flex-col mt-2 mb-3'>
              <div className='flex items-center m-1 gap-3 font-bold lg:text-lg xl:text-xl'>
                <a className='shrink-0' href={job.url} target='_blank'>
                  <img
                    className='rounded-md drop-shadow-def hover:outline-2 w-[70px] hover:outline-primary-950'
                    src={job.logo}
                    alt='Click to visit the employer website'
                  />
                </a>
                <p className='grow '>{job.company}</p>
                <p className='text-end'>{job.location}</p>
              </div>
              {job.roles.map((role, idx) => {
                return <RoleCard key={'Role-' + idx} {...role}></RoleCard>;
              })}
            </div>
          );
        })}
      </Card>
      {/* education card */}
      <Card className='flex flex-col mx-5 my-3 px-2 py-1 min-w-sm max-w-5xl'>
        {education.map((edu) => {
          return (
            <div className='flex flex-col mt-2 mb-3'>
              <div className='flex items-center m-1 gap-3 font-bold lg:text-lg xl:text-xl'>
                <a className='shrink-0' href={edu.url} target='_blank'>
                  <img
                    className='bg-white p-1 rounded-md w-[70px] drop-shadow-def hover:outline-2 hover:outline-primary-950'
                    src={edu.logo}
                    alt='Click to visit the school website'
                  />
                </a>
                <p className='grow '>{edu.school}</p>
                <p className='text-end'>{edu.location}</p>
              </div>
              <div className='flex flex-col py-1'>
                <div className='flex sm:flex-row flex-col justify-between italic text-sm md:text-base xl:text-lg'>
                  <p>{edu.degree}</p>
                  <p>
                    {edu.dateEnd.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Card>
      {/* resume download button */}
      <div className='self-center'>
        <a href='/src/assets/cutler_resume.pdf' target='_blank'>
          <Button
            className='mt-2'
            size={'thick'}
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
