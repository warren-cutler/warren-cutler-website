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
    <div className='flex flex-col px-5 m-5 py-1 justify-start min-w-sm'>
      {jobs.map((job) => {
        return (
          <Card orientation='col'>
            <div className='flex items-center justify-between'>
              <a href={job.companyUrl} target='_blank'>
                <img
                  src={job.companyLogo}
                  height='50'
                  width='50'
                  alt='Click to visit the employer website'
                />
              </a>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
            {job.roles.map((role, idx) => {
              return <RoleCard key={'Role-' + idx} {...role}></RoleCard>;
            })}
          </Card>
        );
      })}
      <div className='self-center'>
        <a href='/src/assets/cutler_resume.pdf' target='_blank'>
          <Button size={'thick'} primary={false} bordered={true}>
            Full Resume (PDF)
          </Button>
        </a>
      </div>
    </div>
  );
};
