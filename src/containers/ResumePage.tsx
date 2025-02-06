//types
import { Job } from '../types';
//data
import { jobsData } from '../data/jobsData';
//components
import { JobCard } from '../components/JobCard'

export const ResumePage = () => {
  const jobs: Job[] = jobsData;

  return (
    <div className='resumeContainer'>
      {jobs.map((job, idx) => {
        return <JobCard key={'Job-' + idx} {...job}></JobCard>;
      })}
      <button>Full Resume (PDF)</button>
    </div>
  );
};
