import { Job, Role } from "../types";

const senseRole: Role = {
  title: "Manufacturing Engineer",
  dateStart: new Date("2022-09-01"),
  dateEnd: new Date("2024-09-01"),
  details: [
    "Spearheaded production line design of a dual ethernet version of energy monitor brought to market, including determining test software and test head UI requirements, analyzing build results to refine testing thresholds, and overseeing the deployment, training, and load balancing at a contract manufacturer site.",
    "Planned, deployed, and managed an RMA process at a third party partner, implementing automated functional testing through proprietary software to reclaim product inventory and reduce electronic waste.",
  ],
};

const cognexNPIRole: Role = {
  title: "Manufacturing Engineer, New Product Introduction",
  dateStart: new Date("2021-02-01"),
  dateEnd: new Date("2022-09-01"),
  details: [
    "Managed alpha (in-house), beta (CM), and RTM production of machine vision systems, including designing line configuration, training operators, debugging assembly issues, resolving test issues, and updating key stakeholders.",
    "Headed Design for Assembly reviews with cross-team engineers for alpha stage projects to improve hardware standardization, simplify processes, plan appropriate test coverage, and leverage past engineering efforts.",
    "Designed assembly fixtures in SolidWorks and fabricated them using in-house 3D printing equipment for use in mass production of high-volume machine vision systems, ensuring production capacity and quality met KPIs.",
  ],
};
const cognexSustainingRole: Role = {
  title: "Associate Manufacturing Engineer, Sustaining Engineering",
  dateStart: new Date("2018-05-01"),
  dateEnd: new Date("2021-02-01"),
  details: [
    "Coordinated with software and electrical engineers to build three types of modular battery charging stations, developed the mechanical design and fabrication, ensuring international shipping regulation compliance.",
    "Organized a swift release process to accelerate manufacturing of over forty customer-specific products in the Life Sciences, coordinating with test and software engineers to identify key requirements and implement production environment testing.",
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
