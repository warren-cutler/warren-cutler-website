//types
import { Role } from '../types';

export const RoleCard = (role: Role) => {
  return (
    <div className='roleCard'>
      <div className='roleInfo'><p>{role.title}</p>
      <p>
        {role.dateStart.toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
        -{' '}
        {role.dateEnd.toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </p></div>
      <ul>{role.details.map((detail) => {
        return <li>{detail}</li>;
        
      })}
      </ul>
    </div>
  );
};
