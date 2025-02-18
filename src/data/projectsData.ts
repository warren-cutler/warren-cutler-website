import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "A11y Root",
    description:
      "Full stack open source VS Code Extension (and accompanying web dashboard) for analyzing your projects' web accessibility compliance; sponsored by OSLabs.",
    imagePath: "/src/assets/a11yroot-ext-cropped.gif",
    linkUrl: "https://a11yroot.dev/",
    status: "Launched! (beta)",
  },
  {
    id: 2,
    name: "Disc-ography",
    description:
      "A website dedicated to tracking your disc golf collection(s) virtually, searching for new discs from a range of manufacturers, and more!",
    imagePath: "/src/assets/discography.gif",
    linkUrl: "",
    status: "Coming Soon!",
  },
  {
    id: 3,
    name: "AltSprout",
    description:
      "Visual Content Management SPA - utilizing LLM AI to generate descriptive alt text for images.",
    imagePath: "/src/assets/wc-headshot.jpg",
    linkUrl: "",
    status: "Proof of Concept",
  },
];

// {
//   id: 4,
//   name: 'Project4',
//   description: 'The Fourth Project',
//   imagePath: '/src/assets/wc-headshot.jpg',
//   linkUrl: 'http://www.google.com',
//   status: 'N/A'
// },
// {
//   id: 5,
//   name: 'Project5',
//   description: 'The Fifth Project',
//   imagePath: '/src/assets/wc-headshot.jpg',
//   linkUrl: 'http://www.google.com',
//   status: 'N/A'
// },
