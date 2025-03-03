import { Job, Role } from "../types";

const senseRole: Role = {
  title: "Manufacturing Engineer",
  dateStart: new Date("2022-09-01"),
  dateEnd: new Date("2024-09-01"),
  details: [
    "Spearheaded production line design of an energy monitor brought to market, determining test software thresholds and UI requirements to simplify operator workflows, load balance efficiently, and prevent quality escapes.",
    "Designed, deployed, and managed an RMA process at a third party partner, implementing automated functional testing through proprietary software to enable product reclamation and reduce electronic waste by up to 75%.",
    "Conducted extensive regression testing for monthly software updates, utilizing automated test tools and scripts, to identify and flag performance issues in embedded systems and maintain backwards compatibility of field-deployed legacy devices.",
  ],
};

const cognexNPIRole: Role = {
  title: "Manufacturing Engineer, New Product Introduction",
  dateStart: new Date("2021-02-01"),
  dateEnd: new Date("2022-09-01"),
  details: [
    "Managed alpha (in-house), beta (CM), and RTM production of machine vision systems, including designing line configuration, training operators, debugging assembly and design issues, resolving test issues, and updating key stakeholders.",
    "Conducted Design for Assembly exercises with cross-team engineers to improve alpha-stage design standardization, simplify assemblies, plan appropriate test coverage, and leverage past engineering efforts to create a smoother design release process.",
    "Led mentorship sessions with junior engineers to facilitate the resolution of production bottlenecks, employing root cause analysis and data-driven decision-making processes.",
    "Designed assembly fixtures in SolidWorks and fabricated them using in-house 3D printing equipment for use in mass production of high-volume machine vision systems, ensuring production capacity and quality met KPIs.",
  ],
};

const cognexSustainingRole: Role = {
  title: "Associate Manufacturing Engineer, Sustaining Engineering",
  dateStart: new Date("2018-05-01"),
  dateEnd: new Date("2021-02-01"),
  details: [
    "Designed, fabricated, and assembled custom modular battery charging/discharging stations, prioritizing ease of use and field repairability, ensuring global distribution centers adhered to lithium battery shipping regulations.",
    "Organized a swift release process to accelerate development of over forty products in the Life Sciences, coordinating with software engineers to implement production environment testing according to stringent customer-specific requirements.",
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
