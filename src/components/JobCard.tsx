//types
import {Job, Role} from '../types'

//components
import {RoleCard} from '../components/RoleCard';

export const JobCard = (job: Job) => {

   return (
        <div className = 'jobCard'>
            <a href={job.companyUrl} target="_blank"> <img src={job.companyLogo} height='30' width='30' alt='Click to visit the employer website'/> </a> 
            <p>{job.company}</p>
            <p>{job.location}</p>
            {job.roles.map((role, idx)=>{
              return(<RoleCard key={'Role-'+idx} {...role} ></RoleCard>)
            })}
            
        </div>
    )
};
