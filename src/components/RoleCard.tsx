//types
import { Role } from '../types';

export const RoleCard = (role: Role) => {
  return (
    <div className='flex flex-col py-1'>
      <div className='flex sm:flex-row flex-col justify-between italic'><p>{role.title}</p>
      <p className=''>
        {role.dateStart.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })}
        {' - '}
        {role.dateEnd.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })}
      </p></div>
      <ul role='list' className='list-disc ml-5'>{role.details.map((detail) => {
        return <li>{detail}</li>;
        
      })}
      </ul>
    </div>
  );
};
