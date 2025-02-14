//types
import { Job } from '../types';
//data
import { jobsData } from '../data/jobsData';
//components
import { RoleCard } from '../components/RoleCard';
import { Button } from '../components/generics/Button';
import { Card } from '../components/generics/Card';

export const ResumePage = () => {
  const jobs: Job[] = jobsData;

  return (
    <Card className='flex flex-col mx-5 my-3 px-2 py-1 min-w-sm max-w-5xl'>
      {jobs.map((job) => {
        return (
            <div className='flex flex-col mt-2 mb-3'>
              <div className='flex items-center m-1 gap-3 font-bold lg:text-lg xl:text-xl'><a className='shrink-0' href={job.companyUrl} target='_blank'>
                <img className='rounded-md drop-shadow-def hover:outline-2 hover:outline-primary-950'
                  src={job.companyLogo}
                  height='70'
                  width='70'
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
      <div className='self-center'>
        <a href='/src/assets/cutler_resume.pdf' target='_blank'>
          <Button className='mb-2' size={'thick'} primary={false} bordered={true}>
            Full Resume (PDF)
          </Button>
        </a>
      </div>
    </Card>
  );
};
