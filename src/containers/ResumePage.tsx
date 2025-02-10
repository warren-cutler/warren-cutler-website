//types
import { Job } from '../types';
//data
import { jobsData } from '../data/jobsData';
//components
import { JobCard } from '../components/JobCard';
import { Button } from '../components/Button';

export const ResumePage = () => {
  const jobs: Job[] = jobsData;

  return (
    <div className='resumeContainer'>
      {jobs.map((job, idx) => {
        return <JobCard key={'Job-' + idx} {...job}></JobCard>;
      })}
      <div className='self-center'>
        <a href='/src/assets/cutler_resume.pdf' target='_blank'>
          <Button size={'thick'} primary={false} bordered={true}>Full Resume (PDF)</Button>
        </a>
      </div>
    </div>
  );
};
