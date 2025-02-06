//types
import {Role} from '../types'

export const RoleCard = (role: Role) => {

   return (
        <div className = 'roleCard'>
            <p>{role.title}</p>
            <p>{role.dateStart.toJSON()} - {role.dateEnd.toJSON()}</p>
            {role.details.map((detail)=>{
                return <p>{detail}</p>
            })}
        </div>
    )
};