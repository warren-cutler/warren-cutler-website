import { Job, Role } from '../types';

const senseRole = 'd';

const cognexNPIRole = 'd';
const cognexSustainingRole = 'd';

export const jobsData = [{  id: 1,
    company: 'Sense Labs / Schneider Electric',
    location: 'Cambridge MA / Foxborough MA',
    roles: senseRole,

},{  id: 2,
    company: 'Cognex Corporation',
    location: 'Natick, MA',
    roles: [cognexNPIRole, cognexSustainingRole]

}]


