import { Job, Role } from "../types";

const senseRole: Role = {
  title: "Manufacturing Engineer",
  dateStart: new Date("2022-09-01"),
  dateEnd: new Date("2024-09-01"),
  details: [
    "Spearheaded production line design of an energy monitor brought to market, load balancing stations efficiently, and determining test software thresholds and UI requirements to simplify operator workflows and prevent quality escapes.",
    "Designed, deployed, and oversaw an RMA process at a third party partner, implementing automated functional testing through proprietary software to enable product reclamation and reduce electronic waste by up to 75%.",
    "Managed product rebranding project, working with packaging supplier to design new packaging based on marketing-provided artwork, updating assembly documentation, and coordinating changeover with contract manufacturer and third party logistics company to minimize material waste and avoid production schedule disruption.",
    "Maintained (D)FMEA documentation through design iterations, coordinating with CM to investigate quality issues through 8D and 5Y methodologies, and drive design/process corrective actions to mitigate risk of future escapes.",
    "Collaborated on design reviews, including injection molding, raw PCB manufacturing, and SMT processes, ensuring product designs met Intertek safety standards and manufacturing followed industry best practices for reducing likelihood of defects such as solder bridging, cold solder joints, tombstoning, and beading.",
  ],
};

const cognexNPIRole: Role = {
  title: "Manufacturing Engineer, New Product Introduction",
  dateStart: new Date("2021-02-01"),
  dateEnd: new Date("2022-09-01"),
  details: [
    "Managed alpha (in-house), beta (CM), and RTM builds of machine vision systems, including designing line configuration, training operators, debugging assembly and design issues, resolving test issues, and updating key stakeholders.",
    "Conducted Design for Manufacture and Assembly exercises with cross-team engineers to improve design standardization, simplify assemblies, plan test coverage, and leverage past engineering efforts to create a smoother NPI release process.",
    "Led mentorship sessions with junior engineers to facilitate the resolution of production bottlenecks, employing root cause analysis and data-driven decision-making processes, improving overall team effectiveness.",
    "Designed assembly fixtures in SolidWorks and fabricated them using in-house 3D printing equipment for use in mass production of high-volume machine vision systems, ensuring production capacity and quality met KPIs.",
  ],
};

const cognexSustainingRole: Role = {
  title: "Associate Manufacturing Engineer, Sustaining Engineering",
  dateStart: new Date("2018-05-01"),
  dateEnd: new Date("2021-02-01"),
  details: [
    "Designed, fabricated, and assembled custom modular battery charging/discharging stations, prioritizing field reparability and operator ease of use, ensuring global distribution centers adhered to lithium battery shipping regulations.",
    "Organized a swift release process (15-20% time savings) to accelerate development of over forty products in the Life Sciences, coordinating with software engineers to implement testing according to stringent customer-specific PRDs.",
    "Employed Red X methodology to root cause intermittent production quality escapes, including a lens focusing problem that was endangering the company's relationship with a major customer, leading to test fixture design improvements.",
    "Developed standardized documentation templates for assembly and test procedures, ensuring CM was provided with clear and comprehensive instructions that could be easily translated and referenced, and reducing onboarding time required for manufacturing engineers taking over new or existing product lines.",
  ],
};

export const jobsData: Job[] = [
  {
    id: 1,
    company: "Sense Labs / Schneider Electric",
    logo: "/assets/SenseLogo.jpg",
    url: "https://sense.com/",
    location: "Cambridge, MA / Foxborough, MA",
    roles: [senseRole],
  },
  {
    id: 2,
    company: "Cognex Corporation",
    logo: "/assets/CognexLogo.jpg",
    url: "https://www.cognex.com/",
    location: "Natick, MA",
    roles: [cognexNPIRole, cognexSustainingRole],
  },
];
